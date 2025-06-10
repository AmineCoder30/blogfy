
import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-8">
              Last updated: December 10, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p>
                ModernBlog ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Name and email address (when you subscribe to our newsletter)</li>
                <li>Contact information (when you fill out our contact form)</li>
                <li>Comments and feedback you provide</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referral sources</li>
                <li>Device information (type, operating system, etc.)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6">
                <li>To send you our newsletter (only if you've subscribed)</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To improve our website and content</li>
                <li>To analyze website usage and trends</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Service providers who assist us in operating our website</li>
                <li>Legal requirements or protection of our rights</li>
                <li>Business transfers (merger, acquisition, etc.)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, 
                and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Unsubscribe from our newsletter at any time</li>
                <li>Object to certain data processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <ul className="list-none mt-4">
                <li>Email: privacy@modernblog.com</li>
                <li>Address: San Francisco, CA, United States</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
