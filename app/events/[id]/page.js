// app/event-details/page.js
"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { Calendar, Clock, MapPin, User, DollarSign, } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from 'sonner';


const EventDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [event, setEvent] = useState(null);
  const [status, setStatus] = useState('Register Now')
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/events/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setEvent(data);
      });
  }, []);

  if (!event) {
    return <div>Loading...</div>;
  }

  function handleClick() {
    toast("Successfully Registered!", {
      description: "Check your email for details",
    });
    setStatus("Registered!")
    setButtonDisabled(true);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="relative h-[40vh] w-full">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4">{event.category}</Badge>
            <h1 className="text-4xl font-bold text-white mb-2">{event.title}</h1>
            <div className="flex items-center gap-4 text-white/90">
              <User className="h-4 w-4" />
              <span>Hosted by {event.host}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>About This Event</CardTitle>
                <CardDescription>Event Details and Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium">{new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium">{event.time}</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium">{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-medium">KES {event.price}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button onClick={handleClick} disabled={buttonDisabled} className="w-full" size="lg">
              {status}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
