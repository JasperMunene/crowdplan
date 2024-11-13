// import { ClerkProvider } from '@clerk/nextjs'
import { Afacad } from 'next/font/google'
// import { neobrutalism } from '@clerk/themes'
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";

const afacad = Afacad({
  weight: '500',
  subsets: ['latin'],
})


export const metadata = {
  title: "Crowd Plan",
  description: "Event Platform",
};

export default function RootLayout({ children }) {
  return (
    // <ClerkProvider
    //   appearance={{
    //     baseTheme: neobrutalism
    //   }}
    // >
    <html lang="en">
      <body
        className={`${afacad.className} antialiased`}
      >
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
    // </ClerkProvider>
  );
}
