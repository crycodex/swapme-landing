import ScrollNavbar from "@/components/ScrollNavbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollNavbar />
      <main className="pt-20">
        <section id="inicio">
          <Hero />
        </section>
        <section id="caracteristicas">
          <Features />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="download">
          <DownloadSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
