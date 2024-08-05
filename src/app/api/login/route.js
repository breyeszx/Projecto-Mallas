import dbConnect from "@/utils/bd";
import User from "@/models/User";
import { serialize } from 'cookie';

export async function POST(req) {
  try {
    await dbConnect();
    const { email, password } = await req.json();

    console.log("Received request with email:", email); // Agrega este log
    console.log("Received request with password:", password); // Agrega este log

    if (!email || !password) {
      return new Response(
        JSON.stringify({ success: false, error: "Email and password are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const user = await User.findOne({ email });
    console.log("Found user:", user); // Agrega este log

    if (!user) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid credentials" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Comparar la contraseña directamente
    const isMatch = password === user.password; // Compara sin bcrypt
    console.log("Password match:", isMatch); // Agrega este log

    if (!isMatch) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid credentials" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

        // Verificar si el usuario es un admin
        if (user.role !== "admin") {
          return new Response(
            JSON.stringify({ success: false, error: "You do not have permission to access this resource" }),
            {
              status: 403, // Forbidden
              headers: { "Content-Type": "application/json" },
            }
          );
        }

    // Autenticación exitosa
    // Establecer la cookie u otras acciones
    return new Response(
      JSON.stringify({ success: true, data: user }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in login API:", error); // Agrega este log
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
