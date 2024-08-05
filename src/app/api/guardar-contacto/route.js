// src/app/api/guardar/route.js
import dbConnect from "@/utils/bd";
import Contacto from "@/models/Contacto";

export async function POST(req) {
  try {
    await dbConnect();
    const { name, email, message, number } = await req.json();
    console.log("Request body:", { name, email, message, number });

    if (!name || !email || !message || !number) {
      console.error("Validation error: Missing fields");
      return new Response(
        JSON.stringify({ success: false, error: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const newContacto = await Contacto.create({ name, email, message, number });
    console.log("New Contacto created:", newContacto);
    return new Response(JSON.stringify({ success: true, data: newContacto }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating Contacto:", error.message);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
