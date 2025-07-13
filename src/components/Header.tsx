import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-wiras-primary">
              WIRAS
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-wiras-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-wiras-primary transition-colors">
                About
              </a>
              <a href="#academics" className="text-foreground hover:text-wiras-primary transition-colors">
                Academics
              </a>
              <a href="#research" className="text-foreground hover:text-wiras-primary transition-colors">
                Research
              </a>
              <a href="#location" className="text-foreground hover:text-wiras-primary transition-colors">
                Campus
              </a>
              <a href="#contact" className="text-foreground hover:text-wiras-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:inline-flex">
              Apply Now
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;