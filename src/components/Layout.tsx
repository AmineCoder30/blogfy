
import { Link } from "react-router-dom";
import { useState } from "react";
import { Search, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              ModernBlog
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link to="/categories" className="text-foreground hover:text-primary transition-colors">
                Categories
              </Link>
              <Link to="/search" className="p-2 text-foreground hover:text-primary transition-colors">
                <Search className="h-4 w-4" />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-foreground hover:text-primary transition-colors"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-foreground hover:text-primary transition-colors"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <button
                className="p-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
                <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                  About
                </Link>
                <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
                <Link to="/categories" className="text-foreground hover:text-primary transition-colors">
                  Categories
                </Link>
                <Link to="/search" className="text-foreground hover:text-primary transition-colors flex items-center">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold text-primary mb-4">ModernBlog</h3>
              <p className="text-muted-foreground mb-4">
                A modern, clean blog focused on sharing valuable insights, stories, and knowledge
                with our community.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
                <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
                <Link to="/categories" className="block text-muted-foreground hover:text-primary transition-colors">
                  Categories
                </Link>
                <Link to="/search" className="block text-muted-foreground hover:text-primary transition-colors">
                  Search
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <div className="space-y-2">
                <Link to="/privacy" className="block text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="block text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 ModernBlog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
