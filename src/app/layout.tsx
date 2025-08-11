import '@/styles/main.scss';
import { Noto_Sans_KR } from 'next/font/google';
import type { ReactNode } from 'react';
import SkipNav from './layout/SkipNav';
import Header from './layout/Header';
// import Footer from "./layout/Footer";
import Sidebar from './layout/Sidebar';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  variable: '--font-noto-sans-kr',
});

export const metadata = {
  title: {
    default: 'React UI',
    template: '%s | React UI',
  },
  description: 'React UI 컴포넌트 모음집',
};

type RootLayoutProps = { children: ReactNode };

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={notoSansKr.variable}>
        <div className="layout__wrapper">
          <SkipNav />
          <Header />
          <main className="layout__container" role="main">
            <div className="layout__block row">
              <Sidebar />
              <section className="layout__content col-9" role="content" aria-labelledby="본문">
                {children}
              </section>
            </div>
          </main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
