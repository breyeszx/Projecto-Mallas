/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/JOQXIhpbXGv
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    (<header
      className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
      <Link href="#" className="text-lg font-bold" prefetch={false}>
        Acme Inc
      </Link>
      <nav className="flex items-center space-x-6">
        <Link
          href="#"
          className="text-sm font-medium hover:underline hover:underline-offset-4"
          prefetch={false}>
          Home
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline hover:underline-offset-4"
          prefetch={false}>
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline hover:underline-offset-4"
          prefetch={false}>
          Contact
        </Link>
      </nav>
      <Button variant="outline">Login</Button>
    </header>)
  );
}