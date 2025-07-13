import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Microscope, Globe2, Users, Brain, Heart } from "lucide-react";

const Academics = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Islamic Studies & Theology",
      description: "Comprehensive study of Quran, Hadith, Fiqh, and Islamic jurisprudence with modern pedagogical approaches.",
      level: "Graduate & Postgraduate",
      duration: "2-4 Years",
      color: "bg-wiras-secondary/10 text-wiras-secondary"
    },
    {
      icon: Microscope,
      title: "Research Methodologies",
      description: "Advanced research techniques combining traditional Islamic scholarship with contemporary academic standards.",
      level: "Research Programs",
      duration: "1-3 Years", 
      color: "bg-wiras-gold/10 text-wiras-navy"
    },
    {
      icon: Globe2,
      title: "Comparative Religion",
      description: "Interfaith dialogue and understanding through scholarly examination of world religions and philosophies.",
      level: "Specialized Studies",
      duration: "1-2 Years",
      color: "bg-wiras-primary/10 text-wiras-primary"
    },
    {
      icon: Users,
      title: "Islamic Preaching & Da'wah",
      description: "Training future Islamic preachers with modern communication skills and traditional knowledge.",
      level: "Certificate & Diploma",
      duration: "6 Months - 2 Years",
      color: "bg-wiras-secondary/10 text-wiras-secondary"
    },
    {
      icon: Brain,
      title: "Islamic Philosophy & Ethics",
      description: "Deep exploration of Islamic philosophical traditions and their application in contemporary contexts.",
      level: "Advanced Studies",
      duration: "2-3 Years",
      color: "bg-wiras-gold/10 text-wiras-navy"
    },
    {
      icon: Heart,
      title: "Islamic Psychology & Counseling",
      description: "Integration of Islamic principles with modern psychological practices for holistic well-being.",
      level: "Professional Programs",
      duration: "2-3 Years",
      color: "bg-wiras-primary/10 text-wiras-primary"
    }
  ];

  return (
    <section id="academics" className="py-20 bg-wiras-light-green/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Academic Programs
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Bridging Classical Wisdom & Modern Knowledge
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our multidisciplinary approach combines the richness of classical Islamic knowledge 
            with cutting-edge research methodologies and contemporary academic standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card key={index} className="shadow-card border-0 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg ${program.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-wiras-primary">{program.title}</CardTitle>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline" className="text-xs">{program.level}</Badge>
                    <Badge variant="outline" className="text-xs">{program.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant border-0 bg-gradient-primary text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h3>
              <p className="text-lg mb-8 text-white/90 leading-relaxed">
                Join students from around the world in our transformative academic programs 
                that honor Islamic tradition while embracing modern scholarship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-wiras-gold hover:bg-wiras-gold/90 text-wiras-navy font-semibold">
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-wiras-primary">
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Academics;