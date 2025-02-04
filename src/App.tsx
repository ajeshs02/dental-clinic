import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import About from "@/components/about/About";
import Service from "@/components/services/Service";
import { Doctors } from "./components/doctors/Doctors";
import { Testimonials } from "./components/testimonials/Testimonials";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="wrapper">
          <About />
          <Service />
          <Doctors />
          <Testimonials />
        </div>
      </main>
      <Footer />
    </>
  );
}
