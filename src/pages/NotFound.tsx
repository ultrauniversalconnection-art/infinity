import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Home, Phone } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead title="Page Not Found — Infinity WiFi Connects" description="The page you're looking for doesn't exist." path={location.pathname} />
      <section className="flex min-h-[70vh] items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-2 font-heading text-8xl font-extrabold text-primary">404</h1>
          <h2 className="mb-4 font-heading text-2xl font-bold">Page Not Found</h2>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/">
              <Button size="lg" className="gap-2 bg-primary font-heading font-semibold text-primary-foreground hover:bg-primary/90">
                <Home className="h-4 w-4" /> Back to Home
              </Button>
            </Link>
            <a href="tel:+18337086855">
              <Button size="lg" variant="outline" className="gap-2 border-accent/50 font-heading text-accent hover:bg-accent/10">
                <Phone className="h-4 w-4" /> Call (833) 708-6855
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
