import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // 1. Create Sample Users
  const farmer = await prisma.user.upsert({
    where: { email: 'farmer@agridirect.com' },
    update: {},
    create: {
      email: 'farmer@agridirect.com',
      name: 'John Doe (Farmer)',
      passwordHash: '$2a$10$e8wS.g/R2Z/dD6E5hP/O1eP7/cK2E0/b1I2K3L4M5N6O7P8Q9R0S1', // test password hash
      role: 'FARMER',
      phone: '+233500000001',
    },
  });

  const buyer = await prisma.user.upsert({
    where: { email: 'buyer@agridirect.com' },
    update: {},
    create: {
      email: 'buyer@agridirect.com',
      name: 'Jane Smith (Buyer)',
      passwordHash: '$2a$10$e8wS.g/R2Z/dD6E5hP/O1eP7/cK2E0/b1I2K3L4M5N6O7P8Q9R0S1',
      role: 'BUYER',
      phone: '+233500000002',
    },
  });

  console.log('✅ Users seeded successfully!');

  // 2. Create Sample Crop Listing
  const listing = await prisma.listing.create({
    data: {
      farmerId: farmer.id,
      cropType: 'Yellow Maize',
      quantityKg: 500.0,
      minPrice: 2.5,
      location: 'Kumasi, Ashanti Region',
      status: 'ACTIVE',
    },
  });

  console.log('✅ Listing seeded successfully!');

  // 3. Create Sample Bid
  await prisma.bid.create({
    data: {
      listingId: listing.id,
      buyerId: buyer.id,
      bidAmountPerKg: 3.0,
      status: 'PENDING',
    },
  });

  console.log('✅ Bids seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
