import { Button } from "@/components/ui/button";

export function Banner() {
  return (
    <div className="bg-primary text-primary-foreground py-16 px-8 flex flex-col items-center justify-center pb-16">
      <div className="text-center space-y-2">
        <p className="text-xl font-medium">
          Te preguntas por que confiar en nosotros?
        </p>
        <p className="text-base">
          Por que contamos con la mayor calidad en instalacion de mallas de
          seguridad, si quieres saber mas, haz click abajo
        </p>
        <Button variant="outline" className="text-black">
          Mas Informacion
        </Button>
      </div>
    </div>
  );
}
