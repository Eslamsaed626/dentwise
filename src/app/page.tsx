import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWork from "@/components/landing/HowItWork";
import PricingSection from "@/components/landing/PricingSection";
import WhatToAsk from "@/components/landing/WhatToAsk";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header></Header>
      <Hero></Hero>
      <section id="how-it-work">
        <HowItWork></HowItWork>
      </section>
      <WhatToAsk></WhatToAsk>
      <PricingSection></PricingSection>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  );
};

export default Home;
