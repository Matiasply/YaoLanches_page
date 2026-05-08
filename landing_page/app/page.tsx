import { About } from "./_components/about";
import { Favorites } from "./_components/favorites";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Favorites/>
    </main>
    
  );
}
