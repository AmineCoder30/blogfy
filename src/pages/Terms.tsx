
import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-8">
              Last updated: December 10, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using ModernBlog, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Description of Service</h2>
              <p>
                ModernBlog provides a platform for sharing articles, insights, and information related to technology, 
                productivity, development, design, and lifestyle topics. Our service includes:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Access to blog articles and content</li>
                <li>Newsletter subscription services</li>
                <li>Contact and communication features</li>
                <li>Community interaction opportunities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">User Conduct</h2>
              <p>You agree not to use the service to:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Spam or harass other users</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use automated means to access the service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
              <p>
                All content on ModernBlog, including but not limited to text, graphics, logos, images, and software, 
                is the property of ModernBlog or its content suppliers and is protected by copyright and other intellectual property laws.
              </p>
              <p className="mt-4">
                You may not reproduce, distribute, modify, or create derivative works of our content without explicit written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">User-Generated Content</h2>
              <p>
                If you submit content to our website (such as comments or contact form submissions), you grant us a 
                non-exclusive, royalty-free, perpetual license to use, reproduce, and display such content.
              </p>
              <p className="mt-4">
                You represent that you own or have the necessary rights to any content you submit and that such content 
                does not violate any third-party rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimers</h2>
              <p>
                The information on ModernBlog is provided on an "as is" basis. We make no warranties, expressed or implied, 
                and hereby disclaim all other warranties including implied warranties of merchantability, fitness for a particular purpose, 
                or non-infringement of intellectual property.
              </p>
              <p className="mt-4">
                We do not warrant that the service will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p>
                In no event shall ModernBlog be liable for any indirect, incidental, special, consequential, or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
              <p>
                We may terminate or suspend your access to our service immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, 
                we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
              <p>
                These Terms shall be interpreted and governed by the laws of the State of California, United States, 
                without regard to conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <ul className="list-none mt-4">
                <li>Email: legal@modernblog.com</li>
                <li>Address: San Francisco, CA, United States</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
