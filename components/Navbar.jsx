import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <div>
      <h1 className="absolute top-6 left-6 text-4xl font-bold text-red-600 hidden md:block md:text-3xl">Crowd Plan</h1>
      </div>
      <div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/">Events</Link>
      </div>
      
      </div>
    </nav>
  )
}
