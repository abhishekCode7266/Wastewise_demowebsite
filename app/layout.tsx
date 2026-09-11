import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'WasteWise - Food Rescue App',
  description: 'WasteWise connects restaurants with extra food straight to local shelters instead of ending up in garbage cans.',
  openGraph: {
    title: 'WasteWise - Food Rescue App',
    description: 'WasteWise connects restaurants with extra food straight to local shelters instead of ending up in garbage cans.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WasteWise - Food Rescue App',
    description: 'WasteWise connects restaurants with extra food straight to local shelters instead of ending up in garbage cans.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
