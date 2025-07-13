import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Building, Users, Wifi, Car, Coffee, TreePine, Shield } from "lucide-react";
import knowledgeCityImage from "@/assets/knowledge-city.jpg";

const Location = () => {
  const facilities = [
    { icon: Building, title: "Modern Campus", description: "State-of-the-art academic buildings" },
    { icon: Users, title: "Community Living", description: "Integrated residential facilities" },
    { icon: Wifi, title: "Digital Infrastructure", description: "High-speed internet throughout" },
    { icon: Car, title: "Transportation", description: "Easy connectivity to major cities" },
    { icon: Coffee, title: "Student Services", description: "Dining halls and recreational areas" },
    { icon: TreePine, title: "Green Spaces", description: "Beautiful gardens and outdoor areas" },
    { icon: Shield, title: "Safe Environment", description: "24/7 security and support" },
    { icon: MapPin, title: "Strategic Location", description: "In the heart of South India" }
  ];

  return (
    <section id="location" className="py-20 bg-wiras-light-green/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Campus
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Markaz Knowledge City
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Located within the biggest integrated township in South India, our campus provides 
            an unparalleled environment for learning, research, and personal growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="relative overflow-hidden rounded-lg shadow-elegant mb-8">
              <img 
                src={knowledgeCityImage} 
                alt="Markaz Knowledge City" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wiras-navy/80 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Markaz Knowledge City</h3>
                  <p className="text-white/90">South India's Premier Educational Township</p>
                </div>
              </div>
            </div>

            <Card className="shadow-card border-0 bg-gradient-to-br from-accent/30 to-wiras-light-green/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-wiras-primary mb-4">Why Choose Our Location?</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-wiras-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Largest integrated educational township in South India</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-wiras-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Purpose-built for academic excellence and research</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-wiras-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Comprehensive facilities for international students</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-wiras-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Safe, secure, and culturally rich environment</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-wiras-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Well-connected to major transportation hubs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facilities.map((facility, index) => {
                const IconComponent = facility.icon;
                return (
                  <Card key={index} className="shadow-card border-0 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-4 text-center">
                      <div className="w-10 h-10 bg-wiras-gold/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="h-5 w-5 text-wiras-navy" />
                      </div>
                      <h4 className="font-semibold text-sm text-wiras-primary mb-1">{facility.title}</h4>
                      <p className="text-xs text-muted-foreground">{facility.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="shadow-elegant border-0 bg-gradient-primary text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-wiras-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Visit Our Campus</h3>
                    <p className="text-white/90 text-sm mb-4 leading-relaxed">
                      Experience firsthand the unique environment that makes WIRAS special. 
                      Schedule a campus tour and discover why students from around the world 
                      choose to study with us.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Address:</span> Markaz Knowledge City, South India</p>
                      <p><span className="font-medium">Campus Size:</span> Integrated Township</p>
                      <p><span className="font-medium">International Students:</span> Welcome</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/20">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-wiras-gold hover:bg-wiras-gold/90 text-wiras-navy font-semibold flex-1">
                      Schedule Campus Tour
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-wiras-primary flex-1">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;