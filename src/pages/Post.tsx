
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link, useParams } from "react-router-dom";
import { Calendar, User, Clock, Share, ArrowLeft } from "lucide-react";

const Post = () => {
  const { id } = useParams();

  // Mock post data - in a real app, this would be fetched based on the ID
  const post = {
    id: 1,
    title: "The Future of Web Development",
    content: `
      <p>Web development is evolving at an unprecedented pace, driven by advances in technology, changing user expectations, and the need for more efficient development processes. As we look toward the future, several key trends are emerging that will shape how we build and interact with web applications.</p>

      <h2>The Rise of AI-Powered Development</h2>
      <p>Artificial Intelligence is no longer just a buzzword in web development—it's becoming an integral part of the development workflow. From AI-powered code completion tools like GitHub Copilot to automated testing and bug detection, AI is helping developers work more efficiently and catch issues earlier in the development cycle.</p>

      <p>AI is also transforming user experiences on the web. We're seeing more applications integrate natural language processing, computer vision, and machine learning capabilities directly into web interfaces, creating more intuitive and personalized user experiences.</p>

      <h2>Progressive Web Applications (PWAs)</h2>
      <p>Progressive Web Applications continue to bridge the gap between web and native mobile applications. With improved offline capabilities, push notifications, and app-like interfaces, PWAs are becoming an increasingly attractive option for businesses looking to reach users across all platforms with a single codebase.</p>

      <p>The latest updates to service workers and web APIs are making PWAs even more powerful, allowing developers to create experiences that are nearly indistinguishable from native applications while maintaining the accessibility and reach of the web.</p>

      <h2>The Edge Computing Revolution</h2>
      <p>Edge computing is revolutionizing how we think about web application architecture. By processing data closer to the user, edge computing reduces latency and improves performance, especially for users in remote locations or areas with slower internet connections.</p>

      <p>Platforms like Cloudflare Workers, Vercel Edge Functions, and AWS Lambda@Edge are making it easier than ever for developers to deploy code that runs at the edge, enabling faster response times and better user experiences worldwide.</p>

      <h2>WebAssembly and Performance</h2>
      <p>WebAssembly (WASM) is opening up new possibilities for web applications by allowing code written in languages like Rust, C++, and Go to run in the browser at near-native speeds. This is particularly exciting for computationally intensive applications like games, image processing, and scientific computing.</p>

      <p>As WebAssembly continues to mature, we can expect to see more high-performance applications moving to the web, further blurring the lines between what's possible on the web versus native platforms.</p>

      <h2>The Future is Bright</h2>
      <p>The future of web development is incredibly exciting. With these advancing technologies, developers have more tools than ever to create fast, responsive, and engaging web experiences. The key is staying curious, continuing to learn, and being open to new approaches and technologies as they emerge.</p>

      <p>As we move forward, the web will continue to be a platform for innovation, creativity, and connection. The next few years promise to bring even more exciting developments that will shape how we build and experience the web.</p>
    `,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80",
    category: "Technology",
    author: {
      name: "John Doe",
      bio: "Senior Full-Stack Developer with 8+ years of experience in web technologies. Passionate about creating efficient, scalable applications and sharing knowledge with the developer community.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    date: "December 8, 2024",
    readTime: "5 min read",
    tags: ["Web Development", "AI", "PWA", "Edge Computing", "WebAssembly"]
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Understanding Modern JavaScript",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
      category: "Development"
    },
    {
      id: 3,
      title: "Mastering CSS Grid Layout", 
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
      category: "Development"
    },
    {
      id: 4,
      title: "The Art of Minimalist Design",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80", 
      category: "Design"
    }
  ];

  return (
    <Layout>
      <article className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button variant="ghost" className="mb-8" asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Article Header */}
          <header className="mb-8">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
              <Button variant="outline" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Featured Image */}
            <div className="relative overflow-hidden rounded-lg mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 lg:h-96 object-cover"
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div 
              className="text-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Separator className="my-8" />

          {/* Author Bio */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-foreground mb-4">About the Author</h3>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {post.author.name}
                    </h4>
                    <p className="text-muted-foreground">
                      {post.author.bio}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Related Posts */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {relatedPost.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      <Link to={`/post/${relatedPost.id}`}>
                        {relatedPost.title}
                      </Link>
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Post;
