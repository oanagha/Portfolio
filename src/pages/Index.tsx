import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update document title and meta description for SEO
    document.title = "Anagha O - Frontend Developer | Software Engineer";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Full Stack Developer with experience building scalable web applications using React.js, TypeScript, Go, Node.js, Firebase, and SQL databases. Junior Software Engineer at GEESESQUADS.');
    }

    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Anagha O",
      "jobTitle": "Junior Software Engineer",
      "description": "Frontend Developer and Software Engineer specializing in React.js, TypeScript, Go, and Node.js",
      "url": window.location.origin,
      "sameAs": [
        "https://github.com/oanagha",
        "https://linkedin.com/in/anaghao8"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;
