import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update document title and meta description for SEO
    document.title = "Anagha O - Full Stack Developer Trainee | MERN Stack Developer";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Full Stack Developer Trainee at GEESESQUADS specializing in MERN Stack development. Computer Science graduate from Calicut University with hands-on experience from LUMINAR TECHNOLAB internship.');
    }

    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Anagha O",
      "jobTitle": "Full Stack Developer Trainee",
      "description": "Full Stack Developer Trainee at GEESESQUADS",
      "url": window.location.origin,
      "sameAs": [
        "https://github.com/anagha-o",
        "https://linkedin.com/in/anagha-o"
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
