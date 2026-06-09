import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import GalaxyBackground from "./GalaxyBackground";
import resume from "@/assets/Anagha_O.pdf";
import { useHeroScroll } from "@/context/HeroScrollContext";

const Hero = () => {
  const { progress } = useHeroScroll();
  const isMorphing = progress > 0.02;
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      />
      <div className="absolute inset-0 z-0 gradient-secondary opacity-90" />

      {/* 3D Floating Objects */}
      <GalaxyBackground />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span
              className="transition-opacity duration-200"
              style={{
                opacity: isMorphing ? Math.max(0, 1 - progress * 3) : 1,
              }}
            >
              Hi, I'm{" "}
            </span>
            <span
              id="hero-name"
              className="gradient-text"
              style={{ visibility: isMorphing ? "hidden" : "visible" }}
            >
              Anagha O
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up-delay-1">
            <span
              id="hero-title"
              className="inline-block"
              style={{ visibility: isMorphing ? "hidden" : "visible" }}
            >
              SOFTWARE ENGINEER
            </span>
          </p>
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto animate-fade-in-up-delay-2">
            Full Stack Developer passionate about building scalable web
            applications and meaningful digital experiences. Focused on
            delivering reliable, user-centric solutions through clean
            development practices, continuous learning, and a commitment to
            quality.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up-delay-3">
          <Button
            variant="hero"
            size="lg"
            className="min-w-[200px]"
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              projectsSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Work
          </Button>
          <Button
            variant="glow"
            size="lg"
            className="min-w-[200px]"
            onClick={() => window.open(resume, "_blank")}
          >
            View My Resume
          </Button>
        </div>

        <div
          id="hero-social-trigger"
          className="flex justify-center gap-6 animate-fade-in-up-delay-3"
        >
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 hover:shadow-glow"
            onClick={() => window.open("https://github.com/oanagha", "_blank")}
          >
            <Github className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 hover:shadow-glow"
            onClick={() =>
              window.open("https://linkedin.com/in/anaghao8", "_blank")
            }
          >
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 hover:shadow-glow"
            onClick={() => window.open("mailto:oanagha93@gmail.com", "_blank")}
          >
            <Mail className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};
export default Hero;
