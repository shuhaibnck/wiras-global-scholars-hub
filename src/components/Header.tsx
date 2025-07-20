import { Button } from "@/components/ui/button";
import { Menu, Search, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      {/* Top notification bar */}
      <div className="bg-wiras-primary text-wiras-secondary py-2 px-4 text-sm text-center">
        <span>World Institute For Research In Advanced Sciences • An autonomous institution under Jamia Markaz</span>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo and main nav */}
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-wiras-primary rounded-full flex items-center justify-center">
                <span className="text-wiras-secondary font-bold text-lg">W</span>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-wiras-primary">WIRAS</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">University</div>
              </div>
            </div>
            
            <nav className="hidden lg:flex space-x-8">
              <div className="relative group">
                <a href="#about" className="flex items-center text-foreground hover:text-wiras-primary transition-colors font-medium py-2">
                  About <ChevronDown className="ml-1 h-4 w-4" />
                </a>
              </div>
              <div className="relative group">
                <a href="#academics" className="flex items-center text-foreground hover:text-wiras-primary transition-colors font-medium py-2">
                  Academics <ChevronDown className="ml-1 h-4 w-4" />
                </a>
              </div>
              <div className="relative group">
                <a href="#research" className="flex items-center text-foreground hover:text-wiras-primary transition-colors font-medium py-2">
                  Research <ChevronDown className="ml-1 h-4 w-4" />
                </a>
              </div>
              <a href="#campus" className="text-foreground hover:text-wiras-primary transition-colors font-medium py-2">
                Campus
              </a>
              <a href="#admissions" className="text-foreground hover:text-wiras-primary transition-colors font-medium py-2">
                Admissions
              </a>
            </nav>
          </div>
          
          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button className="hidden md:inline-flex bg-wiras-primary hover:bg-wiras-primary/90 text-wiras-secondary font-medium">
              Apply Now
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;