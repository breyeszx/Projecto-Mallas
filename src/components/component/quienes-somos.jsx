export function QuienesSomos() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 md:grid-cols-4 lg:gap-12">
        <div className="space-y-4 md:col-span-2 align-bottom">
          <br />
          <br />
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl xl:text-5xl/none">
            The complete platform for building the Web
          </h1>
          <br />
          <br />
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Give your team the toolkit to stop configuring and start innovating.
            Securely build, deploy, and scale the best web experiences.
          </p>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Give your team the toolkit to stop configuring and start innovating.
            Securely build, deploy, and scale the best web experiences.
          </p>
        </div>
        <div className="space-y-4 md:col-span-2">
          <img
            src="/imagenes/Hero1.jpg"
            width="800"
            height="600"
            alt="Hero"
            className="mx-auto aspect-auto overflow-hidden rounded-xl object-bottom sm:w-full"
            title="Image 1"
          />
        </div>
      </div>
    </section>
  );
}
