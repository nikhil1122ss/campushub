import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CampusHub - Engineering Tools at Great Price',
  description: 'CampusHub is a student-first marketplace for engineering and hostel essentials.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
