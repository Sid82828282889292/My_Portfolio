import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ 
  subsets: ['latin'], 
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Siddhant's Portfolio",
  description: 'An amalgamation of Data Science, Machine Learning and Web Development',
  keywords: ['Data Science', 'Frontend Development', 'React', 'Next.js', 'Machine Learning', 'Data Analytics'],
  authors: [{ name: 'Siddhant Gupta' }],
  icons: {
  icon: "/portfolio-logo.svg",
  shortcut: "/portfolio-logo.svg",
  apple: "/portfolio-logo.svg",
  other: [
    {
      rel: "mask-icon",
      url: "/portfolio-logo.svg",
    },
  ],
},
  openGraph: {
    title: 'Siddhant - Data Scientist & Frontend Developer',
    description: 'Portfolio showcasing data science projects, web applications, and analytics solutions.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}