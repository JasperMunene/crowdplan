'use client'
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
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
import { useUser } from '@clerk/nextjs';

const EventDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const { user } = useUser();
  const [event, setEvent] = useState(null);
  const [status, setStatus] = useState('Register Now');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/events/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEvent(data);
        setEditedEvent(data); 
      });
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  function handleClick() {
    toast("Successfully Registered!", {
      description: "Check your email for details",
    });
    setStatus("Registered!");
    setButtonDisabled(true);
  }

  const handleDelete = async () => {
    if (user.id !== event.userId) {
      return alert('You are not authorized to delete this event.');
    }

    try {
      const response = await fetch(`http://localhost:3000/events/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success("Event deleted successfully.");
        router.push('/events'); 
      } else {
        toast.error("Failed to delete the event.");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("An error occurred while deleting the event.");
    }
  };

  const handleEditSave = async () => {
    if (user.id !== event.userId) {
      return alert('You are not authorized to edit this event.');
    }

    try {
      const response = await fetch(`http://localhost:3000/events/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedEvent),
      });

      if (response.ok) {
        const updatedEvent = await response.json();
        setEvent(updatedEvent);
        toast.success("Event updated successfully.");
        setIsEditing(false);
      } else {
        toast.error("Failed to update the event.");
      }
    } catch (error) {
      console.error("Error updating event:", error);
      toast.error("An error occurred while updating the event.");
    }
  };

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
            {isEditing ? (
              <input
                className="text-4xl font-bold text-white mb-2 bg-transparent outline-none border-b border-white"
                value={editedEvent.title}
                onChange={(e) => setEditedEvent({ ...editedEvent, title: e.target.value })}
              />
            ) : (
              <h1 className="text-4xl font-bold text-white mb-2">{event.title}</h1>
            )}
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
                {isEditing ? (
                  <textarea
                    className="w-full text-gray-700 leading-relaxed p-2 border border-gray-300 rounded"
                    value={editedEvent.description}
                    onChange={(e) => setEditedEvent({ ...editedEvent, description: e.target.value })}
                  />
                ) : (
                  <p className="text-gray-700 leading-relaxed">{event.description}</p>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    {isEditing ? (
                      <input
                        type="date"
                        className="border border-gray-300 rounded p-1"
                        value={editedEvent.date}
                        onChange={(e) => setEditedEvent({ ...editedEvent, date: e.target.value })}
                      />
                    ) : (
                      <p className="font-medium">{new Date(event.date).toLocaleDateString()}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gray-500" />
                    {isEditing ? (
                      <input
                        type="time"
                        className="border border-gray-300 rounded p-1"
                        value={editedEvent.time}
                        onChange={(e) => setEditedEvent({ ...editedEvent, time: e.target.value })}
                      />
                    ) : (
                      <p className="font-medium">{event.time}</p>
                    )}
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    {isEditing ? (
                      <input
                        className="border border-gray-300 rounded p-1 w-full"
                        value={editedEvent.location}
                        onChange={(e) => setEditedEvent({ ...editedEvent, location: e.target.value })}
                      />
                    ) : (
                      <p className="font-medium">{event.location}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="font-medium">KES</p>
                    {isEditing ? (
                      <input
                        type="number"
                        className="border border-gray-300 rounded p-1"
                        value={editedEvent.price}
                        onChange={(e) => setEditedEvent({ ...editedEvent, price: e.target.value })}
                      />
                    ) : (
                      <p className="font-medium">{event.price}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button onClick={handleClick} disabled={buttonDisabled} className="w-full" size="lg">
              {status}
            </Button>

            {user && user.id === event.userId && (
              <>
                <Button onClick={handleDelete} className="w-full" size="lg">
                  Delete
                </Button>
                {isEditing ? (
                  <Button onClick={handleEditSave} className="w-full" size="lg">
                    Save Changes
                  </Button>
                ) : (
                  <Button onClick={() => setIsEditing(true)} className="w-full" size="lg">
                    Edit
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
