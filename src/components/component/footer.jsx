import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoLogInOutline } from "react-icons/io5";

export function Footer() {
  return (
    <footer className="w-full bg-muted py-8">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">Links</h4>
            <nav className="grid gap-2">
              <Link
                href="/"
                className="text-sm hover:underline"
                prefetch={false}
              >
                Inicio
              </Link>
              <Link
                href="/sobre-nosotros"
                className="text-sm hover:underline"
                prefetch={false}
              >
                Sobre Nosotros
              </Link>
              <Link
                href="/contactanos"
                className="text-sm hover:underline"
                prefetch={false}
              >
                Nuestro Contacto
              </Link>
              <Link
                href="contactanos"
                className="text-sm hover:underline"
                prefetch={false}
              >
                Preguntas Frecuentes
              </Link>
            </nav>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">
              Copyright
            </h4>
            <p className="text-sm">
              &copy; 2024 Acme Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <InstagramIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <XIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <FacebookIcon className="h-5 w-5" />
              </Link>
            </div>
            <Button variant="link" className="text-sm font-medium">
              <IoLogInOutline />
              Login
            </Button>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">
              Contacto
            </h4>
            <div className="space-y-1 text-sm">
              <p>123 Main St, Anytown USA</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@acme.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props) {
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
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
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
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon(props) {
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
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
