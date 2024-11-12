'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
// import { 
//     SignInButton,
//     SignedIn,
//     SignedOut,
//     UserButton 
// } from '@clerk/nextjs';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-red-600">
          <Link href="/">Crowd Plan</Link>
        </h1>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-red-600 text-lg">Home</Link>
          <Link href="/events" className="text-gray-700 hover:text-red-600 text-lg">Events</Link>
          <Link href="/event-creation" className="text-gray-700 hover:text-red-600 text-lg">Create Event</Link>
        </div>

        {/* Desktop Buttons - Conditionally Rendered */}
        <div className="hidden md:flex items-center space-x-4">
          {/* <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline">Login</Button>
            </SignInButton>
            <Link href="/sign-up">
              <Button>Sign Up</Button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu className="text-gray-700 w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-start p-4 space-y-4">
            <Link href="/" className="text-gray-700 hover:text-red-600">Home</Link>
            <Link href="/events" className="text-gray-700 hover:text-red-600">Events</Link>
            <Link href="/event-creation" className="text-gray-700 hover:text-red-600">Create Event</Link>
            {/* <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" className="w-full">Login</Button>
              </SignInButton>
              <Link href="/sign-up">
                <Button className="w-full">Sign Up</Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton className="w-full" />
            </SignedIn> */}
          </div>
        </div>
      )}
    </nav>
  );
}
