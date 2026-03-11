import SEOHead from "@/components/SEOHead";

interface LegalPageProps {
  title: string;
  seoTitle: string;
  description: string;
  path: string;
  children: React.ReactNode;
}

const LegalPage = ({ title, seoTitle, description, path, children }: LegalPageProps) => (
  <>
    <SEOHead title={seoTitle} description={description} path={path} />
    <section className="py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="mb-8 font-heading text-3xl font-bold md:text-4xl">{title}</h1>
        <div className="prose prose-invert max-w-none space-y-4 text-sm text-muted-foreground [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:font-heading [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_strong]:text-foreground">
          {children}
        </div>
      </div>
    </section>
  </>
);

export const DisclaimerPage = () => (
  <LegalPage title="Disclaimer" seoTitle="Disclaimer — Infinity WiFi Connects" description="Disclaimer for Infinity WiFi Connects." path="/disclaimer">
    <p>Infinity WiFi Connects is an authorized retailer and comparison service for internet, TV, and streaming providers. We are not the service provider.</p>
    <p>All prices, packages, promotions, and availability are subject to change without notice and may vary by location. The information presented on this website is for general informational purposes only.</p>
    <p>While we strive to keep information accurate and up to date, we make no guarantees about the completeness, accuracy, or reliability of any information on this site.</p>
    <p>Service availability, speeds, and pricing are determined by individual providers and may differ from what is displayed. Contact us at (833) 708-6855 for the most current offers and availability in your area.</p>
  </LegalPage>
);

export const PrivacyPolicyPage = () => (
  <LegalPage title="Privacy Policy" seoTitle="Privacy Policy — Infinity WiFi Connects" description="Privacy Policy for Infinity WiFi Connects." path="/privacy-policy">
    <p>Last updated: {new Date().toLocaleDateString()}</p>
    <h2>Information We Collect</h2>
    <p>We may collect personal information such as your name, phone number, email address, and service address when you contact us or request a quote.</p>
    <h2>How We Use Your Information</h2>
    <p>Your information is used to match you with suitable internet and TV providers, process your service requests, and improve our services.</p>
    <h2>Information Sharing</h2>
    <p>We may share your information with service providers to fulfill your requests. We do not sell your personal information to third parties.</p>
    <h2>Contact</h2>
    <p>For questions about this policy, contact us at (833) 708-6855 or support@infinitywificonnects.com.</p>
  </LegalPage>
);

export const TermsPage = () => (
  <LegalPage title="Terms & Conditions" seoTitle="Terms & Conditions — Infinity WiFi Connects" description="Terms and Conditions for Infinity WiFi Connects." path="/terms">
    <p>By using this website, you agree to these terms. Infinity WiFi Connects acts as an intermediary between you and service providers.</p>
    <h2>Services</h2>
    <p>We provide comparison and recommendation services for internet, TV, and streaming plans. All services are provided by third-party providers.</p>
    <h2>Limitation of Liability</h2>
    <p>Infinity WiFi Connects is not liable for service issues, outages, or disputes with providers. Our role is limited to connecting you with providers.</p>
    <h2>Changes</h2>
    <p>We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of any changes.</p>
  </LegalPage>
);

export const RefundPolicyPage = () => (
  <LegalPage title="Refund Policy" seoTitle="Refund Policy — Infinity WiFi Connects" description="Refund Policy for Infinity WiFi Connects." path="/refund-policy">
    <p>Infinity WiFi Connects provides a free comparison and recommendation service. As we do not charge customers directly for our services, refund requests should be directed to your service provider.</p>
    <p>If you have billing questions or disputes related to your internet or TV service, please contact your provider directly or call us at (833) 708-6855 for assistance.</p>
  </LegalPage>
);

export const AdvertisingDisclosurePage = () => (
  <LegalPage title="Advertising Disclosure" seoTitle="Advertising Disclosure — Infinity WiFi Connects" description="Advertising Disclosure for Infinity WiFi Connects." path="/advertising-disclosure">
    <p>Infinity WiFi Connects may receive compensation from service providers when you sign up for services through our recommendations. This compensation helps us provide our comparison service at no cost to you.</p>
    <p>Our recommendations are based on your needs and preferences. While provider compensation may influence the order in which options are presented, we strive to provide unbiased and helpful recommendations.</p>
  </LegalPage>
);

export const CookiesPolicyPage = () => (
  <LegalPage title="Cookies Policy" seoTitle="Cookies Policy — Infinity WiFi Connects" description="Cookies Policy for Infinity WiFi Connects." path="/cookies-policy">
    <p>This website uses cookies to enhance your browsing experience, analyze site traffic, and serve relevant content.</p>
    <h2>Types of Cookies</h2>
    <p><strong>Essential cookies</strong> are necessary for the website to function. <strong>Analytics cookies</strong> help us understand how visitors interact with our site. <strong>Marketing cookies</strong> may be used to deliver relevant advertisements.</p>
    <h2>Managing Cookies</h2>
    <p>You can manage cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.</p>
  </LegalPage>
);
