import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "International Conference on Islamic Finance",
      description: "A comprehensive three-day conference bringing together scholars, practitioners, and researchers to discuss the latest developments in Islamic finance and banking.",
      date: "February 15-17, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "WIRAS Main Auditorium",
      type: "Conference",
      status: "upcoming",
      attendees: "500+",
      featured: true
    },
    {
      id: 2,
      title: "Student Research Symposium",
      description: "Annual symposium showcasing outstanding research projects by WIRAS students across various disciplines.",
      date: "January 28, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Knowledge City Conference Hall",
      type: "Academic",
      status: "upcoming",
      attendees: "200+"
    },
    {
      id: 3,
      title: "Digital Manuscripts Workshop",
      description: "Hands-on workshop on digital preservation techniques for historical Islamic manuscripts.",
      date: "February 5, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Digital Lab, Building A",
      type: "Workshop",
      status: "upcoming",
      attendees: "50+"
    },
    {
      id: 4,
      title: "Interfaith Dialogue Series",
      description: "Monthly series promoting understanding and dialogue between different faith communities.",
      date: "January 30, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "WIRAS Community Center",
      type: "Dialogue",
      status: "upcoming",
      attendees: "150+"
    },
    {
      id: 5,
      title: "Alumni Networking Evening",
      description: "Connect with WIRAS alumni from around the world and explore collaboration opportunities.",
      date: "January 20, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "WIRAS Alumni Hall",
      type: "Networking",
      status: "past",
      attendees: "300+"
    }
  ];

  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const featuredEvent = upcomingEvents.find(event => event.featured);
  const otherEvents = upcomingEvents.filter(event => !event.featured);

  return (
    <section className="py-20 bg-wiras-light-green/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Upcoming Events
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair">
            Events & Programs
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join us for enriching academic conferences, workshops, and community gatherings 
            that foster learning, research, and intellectual exchange.
          </p>
        </div>

        {/* Featured Event */}
        {featuredEvent && (
          <div className="mb-12">
            <Card className="shadow-elegant border-0 bg-gradient-to-r from-wiras-secondary/10 to-wiras-primary/5 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-wiras-gold text-wiras-navy">Featured Event</Badge>
                      <Badge variant="outline">{featuredEvent.type}</Badge>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-wiras-primary font-playfair">
                      {featuredEvent.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {featuredEvent.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-wiras-secondary" />
                        <span className="text-sm font-medium">{featuredEvent.date}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-wiras-secondary" />
                        <span className="text-sm">{featuredEvent.time}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-wiras-secondary" />
                        <span className="text-sm">{featuredEvent.location}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-wiras-secondary" />
                        <span className="text-sm">{featuredEvent.attendees} Expected</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <Button size="lg" className="bg-wiras-primary hover:bg-wiras-primary/90 text-white">
                      Register Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg" className="border-wiras-primary text-wiras-primary hover:bg-wiras-primary hover:text-white">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Other Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {otherEvents.map(event => (
            <Card key={event.id} className="shadow-card border-0 bg-card hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">{event.type}</Badge>
                  <span className="text-xs text-muted-foreground">{event.attendees}</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-wiras-primary transition-colors">
                  {event.title}
                </h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {event.description}
                </p>
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-wiras-primary hover:bg-wiras-primary/90 text-white">
                    Register
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-wiras-primary text-wiras-primary hover:bg-wiras-primary hover:text-white">
            View All Events & Calendar
            <Calendar className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
