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
        <main className="min-h-screen mx-5 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-24">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
