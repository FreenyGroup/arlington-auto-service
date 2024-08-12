import BootstrapInit from '@/helper/BootstrapInit';
import './font.css';
import './globals.scss';

export const metadata = {
  title: 'Arlington Auto Service - Car Repair & Auto Services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BootstrapInit />
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
