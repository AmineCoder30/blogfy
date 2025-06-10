
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, User } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & Lead Writer",
      bio: "Passionate about technology and sharing knowledge. 8+ years of experience in web development.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      expertise: ["Web Development", "AI", "Tech Trends"]
    },
    {
      name: "Jane Smith",
      role: "Content Strategist",
      bio: "Expert in productivity and remote work strategies. Helps teams optimize their workflows.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?auto=format&fit=crop&w=300&q=80",
      expertise: ["Productivity", "Remote Work", "Team Management"]
    },
    {
      name: "Mike Johnson",
      role: "Technical Writer",
      bio: "Specializes in making complex technical concepts accessible to everyone.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      expertise: ["JavaScript", "React", "Node.js"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About ModernBlog
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're passionate about sharing knowledge, insights, and stories that inspire 
            and empower our community of curious minds.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe that knowledge should be accessible, engaging, and actionable. 
                Our mission is to create content that not only informs but also inspires 
                our readers to take action and make positive changes in their personal 
                and professional lives.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're a developer looking to stay current with the latest 
                technologies, a professional seeking productivity tips, or someone 
                interested in design and creativity, we're here to support your journey 
                of continuous learning and growth.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" 
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-foreground mb-4">Quality First</h3>
                <p className="text-muted-foreground">
                  We prioritize depth over breadth, ensuring every piece of content 
                  provides genuine value and actionable insights.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-foreground mb-4">Authenticity</h3>
                <p className="text-muted-foreground">
                  We share real experiences, honest opinions, and practical advice 
                  based on actual expertise and experimentation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-foreground mb-4">Community</h3>
                <p className="text-muted-foreground">
                  We believe in building a supportive community where knowledge 
                  is shared freely and everyone can learn and grow together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind ModernBlog
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="p-8">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Articles Published</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <p className="text-muted-foreground">Monthly Readers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2.5K</div>
              <p className="text-muted-foreground">Newsletter Subscribers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Reader Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Join Our Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to be part of our community? Start exploring our articles, 
            subscribe to our newsletter, or reach out to say hello.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/blog">
                <User className="mr-2 h-5 w-5" />
                Explore Articles
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
