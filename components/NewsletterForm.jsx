"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        toast("Successfully subscribed!", {
          description: "You'll now receive updates about new events.",
        });
        setEmail("");
      } else {
        toast("Subscription failed", { description: "Please try again later." });
      }
    } catch (error) {
      console.error("Error:", error);
      toast("An error occurred", { description: "Please try again later." });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-primary-foreground text-primary"
        required
      />
      <Button type="submit" variant="secondary">
        Subscribe
      </Button>
    </form>
  );
}
