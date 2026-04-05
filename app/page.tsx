import Navigation from "./components/Navigation";
import HeroSection from "./sections/HeroSection";
import CountdownSection from "./sections/CountdownSection";
import EventsSection from "./sections/EventsSection";
// import StorySection from "./sections/StorySection";
import FamilySection from "./sections/FamilySection";
import VenueSection from "./sections/VenueSection";
// import RSVPSection from "./sections/RSVPSection";
import Footer from "./components/Footer";
// import MusicButton from "./components/MusicButton";
import ConfettiEffect from "./components/ConfettiEffect";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <ConfettiEffect />
      <HeroSection />
      <CountdownSection />
      {/* <StorySection /> */}
      <EventsSection />
      <FamilySection />
      <VenueSection />
      {/* <RSVPSection /> */}
      <Footer />
      {/* <MusicButton /> */}
    </main>
  );
}
