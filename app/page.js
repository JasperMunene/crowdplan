import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import FeaturedEvent from '@/components/FeaturedEvent'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <section className="container mx-auto px-4 -mt-20">
        <FeaturedEvent />
      </section>
    </div>
  )
}
