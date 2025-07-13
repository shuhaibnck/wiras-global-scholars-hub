import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-wiras-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-wiras-gold">WIRAS</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              World Institute For Research In Advanced Sciences - Fostering excellence 
              in Islamic scholarship and modern academic research since 2018.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-white hover:text-wiras-gold hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-wiras-gold hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-wiras-gold hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-wiras-gold hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-wiras-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/80 hover:text-wiras-gold transition-colors">About WIRAS</a></li>
              <li><a href="#academics" className="text-white/80 hover:text-wiras-gold transition-colors">Academic Programs</a></li>
              <li><a href="#research" className="text-white/80 hover:text-wiras-gold transition-colors">Research</a></li>
              <li><a href="#location" className="text-white/80 hover:text-wiras-gold transition-colors">Campus</a></li>
              <li><a href="#" className="text-white/80 hover:text-wiras-gold transition-colors">Admissions</a></li>
              <li><a href="#" className="text-white/80 hover:text-wiras-gold transition-colors">Student Life</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-wiras-gold">Programs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-wiras-gold transition-colors">Islamic Studies</a></li>
              <li><a href="#" className="text-white/80 hover:text-wiras-gold transition-colors">Research Methods</a></li>
              <li><a href="#" className="text-white/80 hover:text-wiras-gold transition-colors">Comparative Religion</a></li>
              <li><a href="#" className="text-white/80 hover:text-wiras-gold transition-colors">Islamic Preaching</a></li>
              <li><a href="#" className="text-white/80 hover:text-wiras-gold transition-colors">Philosophy & Ethics</a></li>
              <li><a href="#" className="text-white/80 hover:text-wiras-gold transition-colors">Psychology</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-wiras-gold">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-wiras-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80 text-sm">Markaz Knowledge City</p>
                  <p className="text-white/80 text-sm">South India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-wiras-gold flex-shrink-0" />
                <p className="text-white/80 text-sm">+91 XXX XXX XXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-wiras-gold flex-shrink-0" />
                <p className="text-white/80 text-sm">info@wiras.edu</p>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-wiras-gold flex-shrink-0" />
                <p className="text-white/80 text-sm">www.wiras.edu</p>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-wiras-gold/10 border-wiras-gold/20 mb-8">
          <CardContent className="p-6">
            <div className="text-center">
              <h4 className="text-xl font-bold mb-3 text-wiras-gold">Ready to Join WIRAS?</h4>
              <p className="text-white/80 mb-4">
                Take the first step towards excellence in Islamic scholarship and modern research.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <Button className="bg-wiras-gold hover:bg-wiras-gold/90 text-wiras-navy font-semibold">
                  Apply Now
                </Button>
                <Button variant="outline" className="border-wiras-gold text-wiras-gold hover:bg-wiras-gold hover:text-wiras-navy">
                  Download Brochure
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2018-2024 World Institute For Research In Advanced Sciences (WIRAS). All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-wiras-gold transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-wiras-gold transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-wiras-gold transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;