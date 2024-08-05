// src/app/api/guardar/route.js
import dbConnect from "@/utils/bd";
import Contact from "@/models/Contact";

export async function POST(req) {
  try {
    await dbConnect();
    const { name, email, message } = await req.json();
    console.log("Request body:", { name, email, message });

    if (!name || !email || !message) {
      console.error("Validation error: Missing fields");
      return new Response(
        JSON.stringify({ success: false, error: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const newContact = await Contact.create({ name, email, message });
    console.log("New contact created:", newContact);
    return new Response(JSON.stringify({ success: true, data: newContact }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating contact:", error.message);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
