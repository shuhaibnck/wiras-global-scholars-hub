import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FlaskConical, BookOpen, Users, TrendingUp, Lightbulb, Globe } from "lucide-react";
import researchImage from "@/assets/research-academics.jpg";

const Research = () => {
  const researchAreas = [
    {
      icon: FlaskConical,
      title: "Islamic Jurisprudence Research",
      description: "Contemporary applications of classical Fiqh in modern contexts",
      publications: "50+ Papers"
    },
    {
      icon: BookOpen,
      title: "Quranic Studies",
      description: "Advanced hermeneutical approaches to Quranic interpretation",
      publications: "35+ Papers"
    },
    {
      icon: Users,
      title: "Islamic Social Sciences",
      description: "Sociological and anthropological studies within Islamic framework",
      publications: "40+ Papers"
    },
    {
      icon: TrendingUp,
      title: "Islamic Economics",
      description: "Modern economic theories through Islamic ethical principles",
      publications: "25+ Papers"
    },
    {
      icon: Lightbulb,
      title: "Islamic Education",
      description: "Innovative pedagogical methods in Islamic knowledge transmission",
      publications: "30+ Papers"
    },
    {
      icon: Globe,
      title: "Interfaith Studies",
      description: "Comparative religious studies and dialogue facilitation",
      publications: "20+ Papers"
    }
  ];

  return (
    <section id="research" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Research & Innovation
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Advancing Knowledge Through Islamic Scholarship
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our research programs integrate traditional Islamic scholarship with modern academic 
            methodologies, contributing to the global understanding of Islamic sciences and their 
            contemporary applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            {researchAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card key={index} className="shadow-card border-0 hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-wiras-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-wiras-navy" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-wiras-primary mb-2">{area.title}</h3>
                        <p className="text-muted-foreground mb-3 leading-relaxed">{area.description}</p>
                        <Badge variant="outline" className="text-xs">{area.publications}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={researchImage} 
                alt="Research at WIRAS" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wiras-navy/80 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">State-of-the-Art Facilities</h3>
                  <p className="text-white/90">Modern research infrastructure supporting traditional and contemporary scholarship</p>
                </div>
              </div>
            </div>

            <Card className="shadow-card border-0 bg-gradient-to-br from-wiras-light-green/50 to-accent/50">
              <CardHeader>
                <CardTitle className="text-wiras-primary">Research Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-wiras-primary">200+</div>
                    <div className="text-sm text-muted-foreground">Publications</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-wiras-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Research Projects</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-wiras-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Researchers</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-wiras-primary">10+</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 bg-gradient-primary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Join Our Research Community</h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  Contribute to groundbreaking research that bridges Islamic scholarship 
                  with contemporary academic inquiry.
                </p>
                <Button className="bg-wiras-gold hover:bg-wiras-gold/90 text-wiras-navy font-semibold w-full">
                  Explore Research Opportunities
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;