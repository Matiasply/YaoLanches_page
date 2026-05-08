import { About } from "./_components/about";
import { Favorites } from "./_components/favorites";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { Testemunhos } from "./_components/testemunhos";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Favorites/>
      <Testemunhos/>
    </main>
    
  );
}
