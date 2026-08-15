import React from 'react';

export const metadata = {
  title: 'AgriDirect Platform',
  description: 'Agricultural supply chain and bidding system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
