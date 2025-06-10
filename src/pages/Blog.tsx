
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Search, Calendar, User } from "lucide-react";
import { useState } from "react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development including AI integration, edge computing, and progressive web applications...",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      category: "Technology",
      author: "John Doe",
      date: "Dec 8, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Productivity Tips for Remote Workers",
      excerpt: "Essential strategies to maintain productivity and work-life balance while working remotely. Learn about time management, communication tools, and workspace setup...",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      category: "Productivity",
      author: "Jane Smith",
      date: "Dec 6, 2024",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Understanding Modern JavaScript",
      excerpt: "A comprehensive guide to ES6+ features and modern JavaScript development practices including async/await, destructuring, and modules...",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      category: "Development",
      author: "Mike Johnson",
      date: "Dec 4, 2024",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Mastering CSS Grid Layout",
      excerpt: "Learn how to create complex, responsive layouts with CSS Grid. This tutorial covers grid containers, items, and advanced positioning techniques...",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      category: "Development",
      author: "Sarah Wilson",
      date: "Dec 2, 2024",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "The Art of Minimalist Design",
      excerpt: "How less can be more in modern design principles. Explore whitespace, typography, and color theory to create elegant, user-friendly interfaces...",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      category: "Design",
      author: "Alex Chen",
      date: "Nov 30, 2024",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Building Sustainable Tech Habits",
      excerpt: "Creating lasting positive changes in your tech routine. Tips for digital wellness, screen time management, and healthy tech consumption...",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      category: "Lifestyle",
      author: "Emma Davis",
      date: "Nov 28, 2024",
      readTime: "5 min read"
    }
  ];

  const categories = ["all", "Technology", "Productivity", "Development", "Design", "Lifestyle"];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            All Articles
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of insightful articles, tutorials, and stories
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Filter by:</span>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredPosts.length} of {allPosts.length} articles
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
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
                    <p className="text-muted-foreground mb-4 line-clamp-3">
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
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search terms or filters</p>
              <Button variant="outline" onClick={() => {setSearchTerm(""); setSelectedCategory("all");}}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {filteredPosts.length > 0 && (
        <section className="py-8 border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-4">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <span className="text-muted-foreground">Page 1 of 1</span>
              <Button variant="outline" disabled>
                Next
              </Button>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Blog;
