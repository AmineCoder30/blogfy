
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Technology",
      description: "Latest tech trends, innovations, and insights into the future of technology",
      icon: "💻",
      postCount: 24,
      color: "bg-blue-500",
      posts: [
        {
          id: 1,
          title: "The Future of Web Development",
          excerpt: "Exploring the latest trends and technologies shaping the future of web development...",
          author: "John Doe",
          date: "Dec 8, 2024",
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: 7,
          title: "AI in Everyday Applications",
          excerpt: "How artificial intelligence is transforming our daily digital experiences...",
          author: "Jane Smith",
          date: "Dec 5, 2024",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      name: "Development",
      description: "Coding tutorials, best practices, and development methodologies",
      icon: "🔧",
      postCount: 32,
      color: "bg-green-500",
      posts: [
        {
          id: 3,
          title: "Understanding Modern JavaScript",
          excerpt: "A comprehensive guide to ES6+ features and modern JavaScript development...",
          author: "Mike Johnson",
          date: "Dec 4, 2024",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: 4,
          title: "Mastering CSS Grid Layout",
          excerpt: "Learn how to create complex, responsive layouts with CSS Grid...",
          author: "Sarah Wilson",
          date: "Dec 2, 2024",
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      name: "Productivity",
      description: "Tips, tools, and strategies for efficient work and life optimization",
      icon: "🚀",
      postCount: 18,
      color: "bg-purple-500",
      posts: [
        {
          id: 2,
          title: "Productivity Tips for Remote Workers",
          excerpt: "Essential strategies to maintain productivity while working remotely...",
          author: "Jane Smith",
          date: "Dec 6, 2024",
          image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      name: "Design",
      description: "UI/UX insights, design principles, and creative inspiration",
      icon: "🎨",
      postCount: 15,
      color: "bg-pink-500",
      posts: [
        {
          id: 5,
          title: "The Art of Minimalist Design",
          excerpt: "How less can be more in modern design principles...",
          author: "Alex Chen",
          date: "Nov 30, 2024",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      name: "Lifestyle",
      description: "Work-life balance, wellness, and personal development",
      icon: "🌱",
      postCount: 12,
      color: "bg-emerald-500",
      posts: [
        {
          id: 6,
          title: "Building Sustainable Tech Habits",
          excerpt: "Creating lasting positive changes in your tech routine...",
          author: "Emma Davis",
          date: "Nov 28, 2024",
          image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&q=80"
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Categories
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our articles organized by topic. Find the content that interests you most.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category.name} className="space-y-8">
                {/* Category Header */}
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{category.icon}</div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">{category.name}</h2>
                    <p className="text-muted-foreground mt-1">{category.description}</p>
                    <Badge variant="secondary" className="mt-2">
                      {category.postCount} articles
                    </Badge>
                  </div>
                </div>

                {/* Category Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.posts.map((post) => (
                    <Card key={post.id} className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                          {category.name}
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
                          <User className="h-4 w-4 mr-1" />
                          <span className="mr-4">{post.author}</span>
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* View More Link */}
                {category.posts.length > 0 && (
                  <div className="text-center">
                    <Link 
                      to="/blog" 
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      View all {category.name.toLowerCase()} articles →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Categories;
