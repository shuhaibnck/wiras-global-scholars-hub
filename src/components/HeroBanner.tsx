import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";
import heroImage from "@/assets/wiras-hero.jpg";

const HeroBanner = () => {
  // This would typically come from a CMS or API
  const coverStory = {
    title: "WIRAS Leads Groundbreaking Research in Islamic Sciences Integration",
    caption: "Our latest research initiative bridges traditional Islamic scholarship with contemporary academic methodologies, setting new standards for global Islamic education.",
    author: "Dr. Muhammad Hassan",
    date: "January 15, 2025",
    readTime: "5 min read",
    backgroundImage: heroImage
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={coverStory.backgroundImage} 
          alt="Cover Story Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wiras-navy/90 via-wiras-primary/80 to-wiras-navy/70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Cover Story Badge */}
          <div className="inline-flex items-center space-x-2 bg-wiras-gold/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-wiras-gold rounded-full animate-pulse"></div>
            <span className="text-wiras-gold font-medium text-sm">Latest Cover Story</span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-playfair">
            {coverStory.title}
          </h1>
          
          {/* Caption */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
            {coverStory.caption}
          </p>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-white/80 mb-8">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span className="text-sm">{coverStory.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{coverStory.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{coverStory.readTime}</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-wiras-gold hover:bg-wiras-gold/90 text-wiras-navy font-semibold px-8 py-3">
              Read Full Story
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-wiras-navy px-8 py-3">
              Explore More Stories
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroBanner;