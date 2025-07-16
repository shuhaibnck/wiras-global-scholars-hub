import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Bell, Globe, Award, Newspaper } from "lucide-react";

const NewsUpdates = () => {
  const news = [
    {
      id: 1,
      title: "WIRAS Receives International Accreditation for Islamic Studies Program",
      excerpt: "The World Islamic Universities Association has officially accredited our Islamic Studies program, marking a significant milestone in our academic excellence journey.",
      category: "Institutional",
      date: "January 14, 2025",
      time: "2 hours ago",
      featured: true,
      icon: Award
    },
    {
      id: 2,
      title: "New Partnership with Oxford Centre for Islamic Studies",
      excerpt: "WIRAS signs strategic partnership agreement to facilitate student exchanges and collaborative research initiatives.",
      category: "Partnership",
      date: "January 13, 2025",
      time: "1 day ago",
      icon: Globe
    },
    {
      id: 3,
      title: "Research Grant Awarded for Climate Change Study",
      excerpt: "WIRAS receives substantial research grant to study Islamic environmental ethics and climate change solutions.",
      category: "Research",
      date: "January 12, 2025",
      time: "2 days ago",
      icon: Bell
    },
    {
      id: 4,
      title: "Digital Library Expansion Completed",
      excerpt: "Our digital library now houses over 50,000 Islamic manuscripts and contemporary academic resources.",
      category: "Technology",
      date: "January 11, 2025",
      time: "3 days ago",
      icon: Newspaper
    },
    {
      id: 5,
      title: "Annual International Students Enrollment Reaches Record High",
      excerpt: "This year's enrollment sees students from 45 countries joining WIRAS programs, reflecting our global appeal.",
      category: "Admissions",
      date: "January 10, 2025",
      time: "4 days ago",
      icon: Globe
    }
  ];

  const updates = [
    {
      id: 1,
      title: "Spring Semester Registration Opens",
      description: "Registration for Spring 2025 semester is now open for all programs.",
      date: "Deadline: February 1, 2025",
      type: "urgent"
    },
    {
      id: 2,
      title: "Library Extended Hours",
      description: "During exam period, library will be open 24/7 for student convenience.",
      date: "Effective: January 20, 2025",
      type: "info"
    },
    {
      id: 3,
      title: "Scholarship Applications Available",
      description: "Merit-based scholarships for international students now accepting applications.",
      date: "Deadline: March 15, 2025",
      type: "opportunity"
    }
  ];

  const featuredNews = news.find(item => item.featured);
  const otherNews = news.filter(item => !item.featured);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Latest Updates
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair">
            News & Updates
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stay informed with the latest news, announcements, and developments 
            from WIRAS and the global Islamic academic community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main News Section */}
          <div className="lg:col-span-2">
            {/* Featured News */}
            {featuredNews && (
              <div className="mb-8">
                <Card className="shadow-elegant border-0 bg-gradient-to-r from-wiras-gold/10 to-accent/20 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-wiras-gold text-wiras-navy">Breaking News</Badge>
                      <Badge variant="outline">{featuredNews.category}</Badge>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-wiras-primary font-playfair">
                      {featuredNews.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {featuredNews.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{featuredNews.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{featuredNews.time}</span>
                        </div>
                      </div>
                      <Button className="bg-wiras-primary hover:bg-wiras-primary/90 text-white">
                        Read Full Story
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Other News */}
            <div className="space-y-6">
              {otherNews.map(item => (
                <Card key={item.id} className="shadow-card border-0 bg-card hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-wiras-light-green rounded-lg flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-wiras-secondary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">{item.category}</Badge>
                          <span className="text-xs text-muted-foreground">{item.time}</span>
                        </div>
                        <h4 className="text-lg font-bold mb-2 text-foreground group-hover:text-wiras-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          {item.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{item.date}</span>
                          </div>
                          <Button variant="ghost" size="sm" className="text-wiras-primary hover:text-wiras-primary">
                            Read More
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar - Quick Updates */}
          <div className="lg:col-span-1">
            <Card className="shadow-card border-0 bg-wiras-light-green/30 sticky top-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-wiras-primary">Quick Updates</h3>
                <div className="space-y-4">
                  {updates.map(update => (
                    <div key={update.id} className="border-b border-border/50 pb-4 last:border-b-0 last:pb-0">
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          update.type === 'urgent' ? 'bg-red-500' :
                          update.type === 'opportunity' ? 'bg-wiras-gold' :
                          'bg-wiras-secondary'
                        }`}></div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm mb-1">{update.title}</h4>
                          <p className="text-xs text-muted-foreground mb-2">{update.description}</p>
                          <span className="text-xs font-medium text-wiras-primary">{update.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-border/50">
                  <Button variant="outline" size="sm" className="w-full border-wiras-primary text-wiras-primary hover:bg-wiras-primary hover:text-white">
                    View All Announcements
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-wiras-primary text-wiras-primary hover:bg-wiras-primary hover:text-white">
            Subscribe to News Updates
            <Bell className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;
