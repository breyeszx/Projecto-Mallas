'use client'
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/guardar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert('Message sent successfully');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send message');
    }
  };
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" value={formData.name} onChange={(e) => setFormData(e.target.value.name)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData(e.target.value)}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  )
};

export default Form;
