import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import About from "@/components/about/About";
import Service from "@/components/services/Service";
import Doctors from "@/components/doctors/Doctors";
import Testimonials from "@/components/testmonials/Testimonials";

export default function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Service />
        <Doctors />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
