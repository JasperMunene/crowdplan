import React from 'react';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-secondary/10 via-secondary/20 to-secondary/10 rounded-lg shadow-lg">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">What Our Users Say</h2>
        <p className="text-lg text-gray-600">Trusted by thousands of event-goers</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <TestimonialCard
          name="Sarah Johnson"
          role="Music Enthusiast"
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
          content="I've discovered so many amazing concerts through this platform. The booking process is seamless!"
        />
        <TestimonialCard
          name="Michael Chen"
          role="Tech Professional"
          image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
          content="The event recommendations are spot-on. I've attended some of the best tech conferences thanks to this site."
        />
        <TestimonialCard
          name="Emily Rodriguez"
          role="Food Blogger"
          image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
          content="As a foodie, I love how easy it is to find and book tickets for food festivals and cooking workshops."
        />
      </div>
    </section>
  );
}
