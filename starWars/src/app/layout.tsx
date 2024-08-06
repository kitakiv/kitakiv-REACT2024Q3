import React from 'react';
import { Metadata } from 'next';
import '../styles/index.scss';

export const metadata: Metadata = {
  title: 'Star Wars',
  description: 'Fan`s Star Wars page!!!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.svg" />
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
