// src/app/api/users/route.js
import dbConnect from "@/utils/bd";
import User from "@/models/User";

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find({});
    return new Response(JSON.stringify({ success: true, data: users }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const { name, email, password, role } = await req.json();

    if (!name || !email || !password) {
      return new Response(JSON.stringify({ success: false, error: "All fields are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const newUser = await User.create({ name, email, password, role });
    return new Response(JSON.stringify({ success: true, data: newUser }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
