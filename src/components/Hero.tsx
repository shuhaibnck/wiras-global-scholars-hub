import { Button } from "@/components/ui/button";
import { GraduationCap, Globe, BookOpen } from "lucide-react";
import heroImage from "@/assets/wiras-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="WIRAS Campus" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center space-x-2 bg-wiras-gold/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <GraduationCap className="h-5 w-5 text-wiras-gold" />
            <span className="text-wiras-gold font-medium">Est. 2018</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            World Institute For
            <span className="text-wiras-gold block">Research In Advanced Sciences</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            An autonomous institution fostering excellence in Islamic scholarship 
            and modern academic research, molding exalted Islamic preachers for global impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-wiras-gold hover:bg-wiras-gold/90 text-wiras-navy font-semibold px-8 py-3">
              Explore Programs
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-wiras-navy px-8 py-3">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Globe className="h-6 w-6 text-wiras-gold" />
              <span className="text-lg">Global Reach</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <BookOpen className="h-6 w-6 text-wiras-gold" />
              <span className="text-lg">Islamic Tradition</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <GraduationCap className="h-6 w-6 text-wiras-gold" />
              <span className="text-lg">Modern Research</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;