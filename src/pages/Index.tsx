import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Book, User, Calendar } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const Index = () => {
  const [email, setEmail] = useState("");

  const scrollToNewsletter = () => {
    const newsletterSection = document.getElementById('newsletter-section');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    // Here you would typically send the email to your backend
    toast.success("Successfully subscribed! Thank you for joining our newsletter.");
    setEmail("");
  };

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development...",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      category: "Technology",
      author: "John Doe",
      date: "Dec 8, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Productivity Tips for Remote Workers",
      excerpt: "Essential strategies to maintain productivity and work-life balance while working remotely...",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      category: "Productivity",
      author: "Jane Smith", 
      date: "Dec 6, 2024",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Understanding Modern JavaScript",
      excerpt: "A comprehensive guide to ES6+ features and modern JavaScript development practices...",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      category: "Development",
      author: "Mike Johnson",
      date: "Dec 4, 2024",
      readTime: "10 min read"
    }
  ];

  const categories = [
    {
      name: "Technology",
      description: "Latest tech trends and innovations",
      icon: "💻",
      postCount: 24
    },
    {
      name: "Productivity",
      description: "Tips for efficient work and life",
      icon: "🚀",
      postCount: 18
    },
    {
      name: "Development", 
      description: "Coding tutorials and best practices",
      icon: "🔧",
      postCount: 32
    },
    {
      name: "Design",
      description: "UI/UX insights and inspiration",
      icon: "🎨",
      postCount: 15
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Mastering CSS Grid Layout",
      excerpt: "Learn how to create complex, responsive layouts with CSS Grid...",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
      category: "Development",
      date: "Dec 2, 2024"
    },
    {
      id: 5,
      title: "The Art of Minimalist Design",
      excerpt: "How less can be more in modern design principles...",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
      category: "Design",
      date: "Nov 30, 2024"
    },
    {
      id: 6,
      title: "Building Sustainable Tech Habits",
      excerpt: "Creating lasting positive changes in your tech routine...",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&q=80",
      category: "Lifestyle",
      date: "Nov 28, 2024"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-purple-50/30 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Stories Worth
              <span className="text-primary block">Reading</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Discover insightful articles, tutorials, and stories that inspire, educate, and 
              entertain. Join our community of curious minds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3" asChild>
                <Link to="/blog">
                  Explore Articles <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-3"
                onClick={scrollToNewsletter}
              >
                Subscribe for Updates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hand-picked articles that showcase the best of our content
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={post.id} className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${index === 0 ? 'h-64 lg:h-96' : 'h-48'}`}
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className={`font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 ${index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                    <Link to={`/post/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className={`text-muted-foreground mb-4 line-clamp-3 ${index === 0 ? 'text-lg' : ''}`}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Explore Topics
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive deep into the subjects that matter most to you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    <Link to="/categories">
                      {category.name}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Badge variant="secondary">{category.postCount} posts</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter-section" className="py-16 lg:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Stay in the Loop
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest articles, insights, and updates delivered straight to your inbox. 
            No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
            />
            <Button className="sm:w-auto" onClick={handleSubscribe}>
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Join 2,500+ readers who never miss an update
          </p>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Latest Articles
            </h2>
            <Button variant="outline" asChild>
              <Link to="/blog">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card key={post.id} className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    <Link to={`/post/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl lg:text-3xl font-light text-foreground mb-8 leading-relaxed">
            "The insights and knowledge shared here have transformed how I approach 
            my daily work. Truly inspiring content that makes a difference."
          </blockquote>
          <div className="flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" 
              alt="Sarah Connor"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="text-left">
              <p className="font-semibold text-foreground">Sarah Connor</p>
              <p className="text-muted-foreground">Senior Developer at TechCorp</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
