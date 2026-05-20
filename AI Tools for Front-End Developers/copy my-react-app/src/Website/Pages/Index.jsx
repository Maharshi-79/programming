import OfferSection from "./OfferSection";
import AboutSection from "./About";
import ClientSection from "./ClientSection";
import Menu from "./Menu";
import BookSection from "./Book";

export default function Index() {
  return (
    <>
      {/* Offer Section */}
      <OfferSection />

      {/* Food/Menu Section */}
      <Menu />

      {/* About Section */}
      <AboutSection />

      {/* Book Table Section */}
      <BookSection />

      {/* Client/Testimonial Section */}
      <ClientSection />
    </>
  );
}