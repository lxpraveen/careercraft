import Hero from "../../components/Hero/Hero";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import Stats from "../../components/Stats/Stats";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import CTA from "../../components/CTA/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyChoose />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;