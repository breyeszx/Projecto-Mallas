import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { IoLogInOutline } from "react-icons/io5";

export function UINavbar() {
  return (
    <header className="flex items-center justify-between bg-background px-4 py-3 sm:px-6 lg:px-8 sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">Mallas Inc</span>
      </Link>
      <nav className="hidden items-center gap-6 md:flex">
        <Link
          href="/"
          className="text-sm font-medium hover:text-primary hover:underline data-[active]:underline"
          prefetch={false}
        >
          Inicio
        </Link>
        <Link
          href="/sobre-nosotros"
          className="text-sm font-medium hover:text-primary hover:underline data-[active]:underline"
          prefetch={false}
        >
          Sobre Nosotros
        </Link>
        <Link
          href="/contactanos"
          className="text-sm font-medium hover:text-primary hover:underline data-[active]:underline"
          prefetch={false}
        >
          Contactanos
        </Link>
        <Link
          href="/preguntas-frecuentes"
          className="text-sm font-medium hover:text-primary hover:underline data-[active]:underline"
          prefetch={false}
        >
          Preguntas Frecuentes
        </Link>
      </nav>
      <div className="hidden items-center gap-4 md:flex">
        <Link href="/login">
        <Button variant="link" className="text-sm font-medium">
          <IoLogInOutline />
          Login
        </Button>
        </Link>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="md:hidden">
          <div className="grid gap-4 p-4">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <MountainIcon className="h-6 w-6" />
              <span className="text-lg font-semibold">Mallas Inc</span>
            </Link>
            <nav className="grid gap-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-primary hover:underline data-[active]:underline"
                prefetch={false}
              >
                Inicio
              </Link>
              <Link
                href="/sobre-nosotros"
                className="text-sm font-medium hover:text-primary hover:underline data-[active]:underline"
                prefetch={false}
              >
                Sobre Nosotros
              </Link>
              <Link
                href="/contactanos"
                className="text-sm font-medium hover:text-primary hover:underline data-[active]:underline"
                prefetch={false}
              >
                Contacto
              </Link>
              <Link
                href="/preguntas-frecuentes"
                className="text-sm font-medium hover:text-primary hover:underline data-[active]:underline"
                prefetch={false}
              >
                Preguntas Frecuentes
              </Link>
            </nav>
            <div className="flex items-center justify-end gap-4">
              <Button variant="link" className="text-sm font-medium">
                <IoLogInOutline />
                Login
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
