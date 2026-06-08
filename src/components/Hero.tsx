import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import GalaxyBackground from "./GalaxyBackground";
import resume from "@/assets/Anagha-resume.pdf";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBackground})`
    }} />
      <div className="absolute inset-0 gradient-secondary opacity-90" />
      
      {/* 3D Floating Objects */}
      <GalaxyBackground />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Anagha O</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up-delay-1">Full Stack Developer </p>
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto animate-fade-in-up-delay-2">Passionate about building responsive, user-friendly websites and continuously exploring new technologies. </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up-delay-3">
          <Button 
            variant="hero" 
            size="lg" 
            className="min-w-[200px]"
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              projectsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </Button>
          <Button 
            variant="glow" 
            size="lg" 
            className="min-w-[200px]"
            onClick={() => window.open(resume, '_blank')}
          >
            View My Resume
          </Button>
        </div>
        
        <div className="flex justify-center gap-6 animate-fade-in-up-delay-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-12 w-12 hover:shadow-glow"
            onClick={() => window.open('https://github.com/oanagha', '_blank')}
          >
            <Github className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-12 w-12 hover:shadow-glow"
            onClick={() => window.open('https://linkedin.com/in/anaghao8', '_blank')}
          >
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-12 w-12 hover:shadow-glow"
            onClick={() => window.open('mailto:oanagha93@gmail.com', '_blank')}
          >
            <Mail className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>;
};
export default Hero;