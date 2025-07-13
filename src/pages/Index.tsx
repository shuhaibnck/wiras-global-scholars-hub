import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Academics from "@/components/Academics";
import Research from "@/components/Research";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <Hero />
      <About />
      <Academics />
      <Research />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
