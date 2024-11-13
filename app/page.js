import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import FeaturedEvent from '@/components/FeaturedEvent';
import EventListing from '@/components/EventListing';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="space-y-8">
        <Hero />
        <Stats />
        <section className="container mx-auto px-4 -mt-10 lg:-mt-20">
          <FeaturedEvent />
        </section>
        <EventListing />
        <Testimonials />
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
}
