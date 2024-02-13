import { Inter } from 'next/font/google';
import './card.scss';
import Navbar from './components/navbar';
import './globals.scss';
import './single-project.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio of Abu Said',
  description: 'This is the portfolio of Abu Said. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen relative mx-auto px-6 lg: max-w-6xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
