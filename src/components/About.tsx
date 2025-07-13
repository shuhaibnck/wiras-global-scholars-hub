import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About WIRAS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Excellence in Islamic Scholarship & Modern Research
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Founded with the vision of creating an exalted group of Islamic preachers 
            who pursue research in modern academic disciplines while maintaining the 
            richness of classical Islamic knowledge tradition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="shadow-card border-0 bg-wiras-light-green/50">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-wiras-secondary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Established</h3>
              <p className="text-2xl font-bold text-wiras-primary">2018</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card border-0 bg-accent/50">
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 text-wiras-gold mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Location</h3>
              <p className="text-sm font-medium text-foreground">Markaz Knowledge City</p>
              <p className="text-xs text-muted-foreground">South India</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card border-0 bg-wiras-light-green/50">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-wiras-secondary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Global Students</h3>
              <p className="text-2xl font-bold text-wiras-primary">Worldwide</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card border-0 bg-accent/50">
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 text-wiras-gold mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Institution</h3>
              <p className="text-sm font-medium text-foreground">Autonomous</p>
              <p className="text-xs text-muted-foreground">Under Jamia Markaz</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Card className="shadow-elegant border-0 bg-gradient-to-r from-wiras-light-green/30 to-accent/30">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-wiras-primary">Our Mission</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    WIRAS fosters uniqueness in the right to education, intellectual independence, 
                    and originality of resources. We blend tradition with innovative and advanced 
                    research for upgrading humanity with moral values, adhering to Sharia perspectives.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-wiras-gold rounded-full mt-2"></div>
                      <p className="text-muted-foreground">Multidisciplinary academic approaches</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-wiras-gold rounded-full mt-2"></div>
                      <p className="text-muted-foreground">Classical Islamic knowledge tradition</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-wiras-gold rounded-full mt-2"></div>
                      <p className="text-muted-foreground">International student opportunities</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-wiras-gold rounded-full mt-2"></div>
                      <p className="text-muted-foreground">Advanced research methodologies</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-wiras-primary">Academic Excellence</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Located within Markaz Knowledge City, the biggest integrated township in South India, 
                    WIRAS offers unparalleled opportunities for students from all over the world to engage 
                    in transformative learning experiences.
                  </p>
                  <div className="bg-white/50 rounded-lg p-6 border border-wiras-primary/10">
                    <blockquote className="text-lg italic text-wiras-primary font-medium">
                      "Moulding an exalted group of Islamic preachers who pursue research 
                      over modern academic disciplines at the same time."
                    </blockquote>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;