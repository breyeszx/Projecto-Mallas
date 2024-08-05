import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <Carousel className="rounded-lg overflow-hidden">
          <CarouselContent>
            <CarouselItem>
              <img
                src="/imagenes/Hero1.jpg"
                width={800}
                height={450}
                alt="Hero Image 1"
                className="aspect-video object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/imagenes/Hero2.jpg"
                width={800}
                height={450}
                alt="Hero Image 2"
                className="aspect-video object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/imagenes/Hero3.jpg"
                width={800}
                height={450}
                alt="Hero Image 3"
                className="aspect-video object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 text-primary hover:text-primary focus:outline-none">
            <ChevronLeftIcon className="h-6 w-6" />
          </CarouselPrevious>
          <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 text-primary hover:text-primary focus:outline-none">
            <ChevronRightIcon className="h-6 w-6" />
          </CarouselNext>
        </Carousel>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Proteje a los que mas amas con nosotros!
            </h1>
          </div>
          <div className="flex gap-6 p-4 justify-center">
            <Link href="/contactanos">
              <Button>Contactanos!</Button>
            </Link>
            <Link href="/sobre-nosotros">
              <Button variant="outline">Por que nosotros?</Button>
            </Link>
          </div>
          <p className="text-muted-foreground md:text-xl">
            Con nuestras mallas de la mejor calidad del mercado e instaladas a
            la perfecion para protejer tu balcon, ventana o lo que necesites
          </p>
        </div>
      </div>
    </section>
  );
}

function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
