import ScrollNavbar from "@/components/ScrollNavbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
