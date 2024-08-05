"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactHero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/guardar-contacto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert("Message sent successfully");
      setFormData({ name: "", email: "", message: "", number: "" });
    } else {
      alert("Failed to send message");
    }
  };

  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-16">
        <div className="space-y-4 text-left">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Contactanos!
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Llena tus datos en los siguentes campos para comunicarte con
              nosotros, te enviaremos un correo pidiendote medidas y tu
              domicilio para poder cotizar el costo de una futura instalacion
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="number"> phone number</Label>
            <Input
              id="number"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.number}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="min-h-[100px]"
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </section>
  );
}
