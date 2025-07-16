import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, BookOpen, ArrowRight } from "lucide-react";
import article1Thumb from "@/assets/thumbnails/article-1.jpg";
import article2Thumb from "@/assets/thumbnails/article-2.jpg";
import article3Thumb from "@/assets/thumbnails/article-3.jpg";
import article4Thumb from "@/assets/thumbnails/article-4.jpg";

const StudentArticles = () => {
  const articles = [
    {
      id: 1,
      title: "The Role of Technology in Modern Islamic Banking",
      excerpt: "Exploring how blockchain and fintech innovations align with Sharia principles in contemporary banking systems.",
      author: "Ahmed Al-Rashid",
      department: "Islamic Finance",
      date: "January 12, 2025",
      readTime: "8 min read",
      category: "Research",
      featured: true,
      thumbnail: article1Thumb
    },
    {
      id: 2,
      title: "Environmental Ethics in Islamic Jurisprudence",
      excerpt: "An analysis of Islamic environmental principles and their application to modern climate change challenges.",
      author: "Fatima Zahra",
      department: "Islamic Law",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Academic",
      thumbnail: article2Thumb
    },
    {
      id: 3,
      title: "Digital Preservation of Islamic Manuscripts",
      excerpt: "Innovative approaches to digitizing and preserving ancient Islamic texts for future generations.",
      author: "Omar Hassan",
      department: "Digital Humanities",
      date: "January 8, 2025",
      readTime: "5 min read",
      category: "Technology",
      thumbnail: article3Thumb
    },
    {
      id: 4,
      title: "Comparative Study: Islamic and Western Philosophy",
      excerpt: "A comprehensive analysis of philosophical traditions and their intersection in contemporary thought.",
      author: "Aisha Mahmoud",
      department: "Philosophy",
      date: "January 5, 2025",
      readTime: "12 min read",
      category: "Philosophy",
      thumbnail: article4Thumb
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Student Research
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair">
            Student Articles & Research
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover groundbreaking research and insightful articles by our talented students, 
            showcasing the intersection of Islamic scholarship and modern academic inquiry.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          {articles.filter(article => article.featured).map(article => (
            <Card key={article.id} className="shadow-elegant border-0 bg-gradient-to-r from-wiras-light-green/30 to-accent/30 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={article.thumbnail} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-wiras-gold text-wiras-navy">Featured</Badge>
                      <Badge variant="outline">{article.category}</Badge>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-wiras-primary font-playfair">
                      {article.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BookOpen className="h-4 w-4" />
                        <span>{article.department}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <Button className="bg-wiras-primary hover:bg-wiras-primary/90 text-white">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.filter(article => !article.featured).map(article => (
            <Card key={article.id} className="shadow-card border-0 bg-card hover:shadow-elegant transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.thumbnail} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="outline" className="text-xs bg-white/90 backdrop-blur-sm">{article.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-wiras-primary transition-colors">
                  {article.title}
                </h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-3 w-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-3 w-3" />
                    <span>{article.department}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <span className="text-xs">{article.readTime}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-wiras-primary group-hover:text-white transition-all">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-wiras-primary text-wiras-primary hover:bg-wiras-primary hover:text-white">
            View All Student Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudentArticles;
