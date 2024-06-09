import MainLayout from '@/components/shared/Layout/MainLayout';
import './globals.css';
import { ThemeProvider } from './theme-provider';
import { Noto_Sans, Roboto } from 'next/font/google';
import Provider from '@/util/Providers';

export const metadata = {
  title: 'lessons astronomy',
  description: 'Interactive lessons on astronomy',
};

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const notoSans = Noto_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-NotoSans',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='h-full'>
      <body
        className={`${roboto.className} ${notoSans.variable}  overflow-hidden dark:bg-black bg-white h-full`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Provider>
            <MainLayout>{children}</MainLayout>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}

