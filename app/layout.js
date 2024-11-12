import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Afacad } from 'next/font/google'
import { neobrutalism } from '@clerk/themes'
import "./globals.css";

const afacad = Afacad({
  weight: '400',
  subsets: ['latin'],
})


export const metadata = {
  title: "Crowd Plan",
  description: "Event Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: neobrutalism
      }}
    >
      <html lang="en">
        <body
          className={`${afacad.className} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
