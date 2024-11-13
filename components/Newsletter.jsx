import React from 'react'
import { Mail } from 'lucide-react'
import NewsletterForm from './NewsletterForm'

export default function Newsletter() {
  return (
    <section className="container mx-auto px-4 py-16">
    <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
      <div className="max-w-2xl mx-auto text-center">
        <Mail className="h-12 w-12 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Never Miss an Event</h2>
        <p className="mb-8">
          Subscribe to our newsletter and stay updated with the latest events in your area.
        </p>
        <NewsletterForm />
      </div>
    </div>
  </section>
  )
}
