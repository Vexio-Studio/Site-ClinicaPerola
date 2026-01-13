import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutClinic } from "@/components/AboutClinic";
import { DoctorSection } from "@/components/DoctorSection";
import { ServicesSection } from "@/components/ServicesSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { SextaSolidariaSection } from "@/components/SextaSolidariaSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutClinic />
        <DoctorSection />
        <ServicesSection />
        <DifferentialsSection />
        <SextaSolidariaSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
