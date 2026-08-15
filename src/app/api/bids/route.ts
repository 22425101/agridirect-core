import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyJwt } from '@/lib/auth';
import { z } from 'zod';

const bidSchema = z.object({
  listingId: z.string().uuid(),
  bidAmountPerKg: z.number().positive(),
});

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const user = await verifyJwt(token);

    if (user.role !== 'BUYER') {
      return NextResponse.json({ error: 'Only buyers can place bids.' }, { status: 403 });
    }

    const body = await req.json();
    const { listingId, bidAmountPerKg } = bidSchema.parse(body);

    const listing = await prisma.listing.findUnique({
      where: { id: listingId },
      include: { bids: { orderBy: { bidAmountPerKg: 'desc' }, take: 1 } },
    });

    if (!listing || listing.status !== 'ACTIVE') {
      return NextResponse.json({ error: 'Listing is inactive or unavailable.' }, { status: 400 });
    }

    const currentHighest = listing.bids[0]?.bidAmountPerKg || listing.minPrice;
    if (bidAmountPerKg <= currentHighest) {
      return NextResponse.json(
        { error: `Bid must be higher than $${currentHighest}` },
        { status: 422 }
      );
    }

    const newBid = await prisma.bid.create({
      data: { listingId, buyerId: user.id, bidAmountPerKg },
    });

    return NextResponse.json({ message: 'Bid placed successfully', bid: newBid }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid payload or server error' }, { status: 500 });
  }
}
