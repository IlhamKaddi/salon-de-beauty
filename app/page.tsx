import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Transformations from "@/components/Transformations";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Maps";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";
import Maps from "@/components/Maps";

export default function Home() {
  return (
    <main className="pt-4">
      <Navbar />
      <Hero />
      <About />
        <Transformations />
      <Services />
      <Gallery />
      <Testimonials />
    
      <Maps/>
      <Footer />
      <Whatsapp/>
    </main>
  );
}
