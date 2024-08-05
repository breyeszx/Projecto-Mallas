// src/components/component/login.jsx

"use client"; // Asegúrate de que el componente sea un componente de cliente

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Importa useRouter desde next/navigation

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Inicializa el enrutador

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }), // Asegúrate de que estas variables contengan los valores correctos
    });
    
    if (res.ok) {
      const data = await res.json();
      console.log("Login successful:", data);
      // Redirige a la página de administrador o cualquier otra página
      router.push("/admin/dashboard");
    } else {
      // Maneja el error
      const errorData = await res.json();
      alert(errorData.error); // Muestra el mensaje de error
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-bg-gray-100">
      <Card className="w-full max-w-md p-6 space-y-4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Enter your email and password to access your account.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} className="space-y-4"> {/* Añade el manejador onSubmit */}
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Actualiza el estado al cambiar
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}>
                  <EyeIcon className="w-5 h-5" />
                  <span className="sr-only">Toggle password visibility</span>
                </Button>
              </div>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Actualiza el estado al cambiar
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm">
                  Remember me
                </Label>
              </div>
              <Link
                href="#"
                className="text-sm font-medium text-primary hover:underline"
                prefetch={false}>
                Forgot password?
              </Link>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit">Sign in</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

function EyeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
