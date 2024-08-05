import { UIForm } from "@/components/component/uiform";
import { Hero } from "@/components/component/hero";
import { Banner } from "@/components/component/banner";
import { Footer } from "@/components/component/footer";
import { ContactHero } from "@/components/component/contact-hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Banner />
      <ContactHero />
    </div>
  );
}
