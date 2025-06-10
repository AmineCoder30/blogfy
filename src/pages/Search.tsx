
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useSearchParams } from "react-router-dom";
import { Search as SearchIcon, Calendar, User, Filter } from "lucide-react";
import { useState, useEffect } from "react";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || "");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  // Update URL when search term changes
  useEffect(() => {
    if (searchTerm) {
      setSearchParams({ q: searchTerm });
    } else {
      setSearchParams({});
    }
  }, [searchTerm, setSearchParams]);

  const allPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development including AI integration, edge computing, and progressive web applications...",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      category: "Technology",
      author: "John Doe",
      date: "Dec 8, 2024",
      readTime: "5 min read",
      tags: ["web development", "AI", "future tech"]
    },
    {
      id: 2,
      title: "Productivity Tips for Remote Workers",
      excerpt: "Essential strategies to maintain productivity and work-life balance while working remotely. Learn about time management, communication tools, and workspace setup...",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      category: "Productivity",
      author: "Jane Smith",
      date: "Dec 6, 2024",
      readTime: "7 min read",
      tags: ["remote work", "productivity", "work-life balance"]
    },
    {
      id: 3,
      title: "Understanding Modern JavaScript",
      excerpt: "A comprehensive guide to ES6+ features and modern JavaScript development practices including async/await, destructuring, and modules...",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      category: "Development",
      author: "Mike Johnson",
      date: "Dec 4, 2024",
      readTime: "10 min read",
      tags: ["javascript", "es6", "programming"]
    },
    {
      id: 4,
      title: "Mastering CSS Grid Layout",
      excerpt: "Learn how to create complex, responsive layouts with CSS Grid. This tutorial covers grid containers, items, and advanced positioning techniques...",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      category: "Development",
      author: "Sarah Wilson",
      date: "Dec 2, 2024",
      readTime: "8 min read",
      tags: ["css", "grid", "layout", "responsive"]
    },
    {
      id: 5,
      title: "The Art of Minimalist Design",
      excerpt: "How less can be more in modern design principles. Explore whitespace, typography, and color theory to create elegant, user-friendly interfaces...",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      category: "Design",
      author: "Alex Chen",
      date: "Nov 30, 2024",
      readTime: "6 min read",
      tags: ["design", "minimalism", "ui/ux"]
    },
    {
      id: 6,
      title: "Building Sustainable Tech Habits",
      excerpt: "Creating lasting positive changes in your tech routine. Tips for digital wellness, screen time management, and healthy tech consumption...",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      category: "Lifestyle",
      author: "Emma Davis",
      date: "Nov 28, 2024",
      readTime: "5 min read",
      tags: ["digital wellness", "habits", "tech lifestyle"]
    }
  ];

  const categories = ["all", "Technology", "Productivity", "Development", "Design", "Lifestyle"];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = !searchTerm || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case "date":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "title":
        return a.title.localeCompare(b.title);
      case "author":
        return a.author.localeCompare(b.author);
      default:
        return 0;
    }
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the useEffect above
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Search Articles
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find exactly what you're looking for in our collection of articles
            </p>
          </div>

          {/* Main Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for articles, topics, authors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg"
              />
            </div>
          </form>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Filters:</span>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div>
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

                <div>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date">Date</SelectItem>
                      <SelectItem value="title">Title</SelectItem>
                      <SelectItem value="author">Author</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              {sortedPosts.length} result{sortedPosts.length !== 1 ? 's' : ''} found
              {searchTerm && ` for "${searchTerm}"`}
            </div>
          </div>

          {/* Clear Filters */}
          {(searchTerm || selectedCategory !== "all") && (
            <div className="mt-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSearchParams({});
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Search Results */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPosts.map((post) => (
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
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

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
              <SearchIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm 
                  ? `No articles found for "${searchTerm}". Try different keywords or browse all categories.`
                  : "Try adjusting your filters to see more results."
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" onClick={() => {setSearchTerm(""); setSelectedCategory("all"); setSearchParams({});}}>
                  Clear Filters
                </Button>
                <Button asChild>
                  <Link to="/blog">
                    Browse All Articles
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Search Tips */}
      {searchTerm && sortedPosts.length === 0 && (
        <section className="py-8 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Search Tips:</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Try using different keywords or synonyms</li>
              <li>• Check your spelling</li>
              <li>• Use fewer words for broader results</li>
              <li>• Browse by category to discover related content</li>
            </ul>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Search;
