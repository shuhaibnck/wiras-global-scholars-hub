import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import StudentArticles from "@/components/StudentArticles";
import Events from "@/components/Events";
import NewsUpdates from "@/components/NewsUpdates";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <HeroBanner />
      <StudentArticles />
      <Events />
      <NewsUpdates />
      <Footer />
    </div>
  );
};

export default Index;
