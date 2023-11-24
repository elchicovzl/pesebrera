import Navbar from "@/components/Navbar";
import { getGivewayFeatured } from "@/actions/get-giveways";
import LandingHero from "@/components/landing-hero";
import FeatureGiveway from "@/components/feature-giveway";
import {getTickets} from "@/actions/get-tickets";
import Footer from "@/components/Footer";

export default async function Home() {
  const giveway = await getGivewayFeatured();
  const tickets = await getTickets(giveway?.id);

  return (
    <div>
      <div className="container">
        <div className="flex justify-center flex-col items-center mt-10">
          <div className="text-white font-bold sm:py-36 text-center space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold mb-10">
              <h1>La Mejor Rifa del Momento</h1>
              <LandingHero />
            </div>
            {(giveway != null)? 
              <FeatureGiveway data={giveway} tickets={tickets.length}  />
              :
              <h2 className="text-3xl sm:text-5xl">No hay Sorteos en este momento.</h2>
            }
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:place-content-center sm:items-center mt-10">
          
          </div>
        </div>
      </div>
    </div>
  );
}
