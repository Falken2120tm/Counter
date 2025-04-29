import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ 
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Counter",
  description: "Counter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang='en' className='box-content'>
          <body className={`${rubik.className} m-0 h-screen`}>
              <div className='font-[400] leading-[1.35rem] text-[14px]'>
                  {children}
              </div>
          </body>
      </html>
  )
}
