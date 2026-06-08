import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Github, Linkedin,  } from "lucide-react";
import GalaxyBackground from "./GalaxyBackground";
const Contact = () => {
  return <section className="py-20 px-6 gradient-secondary relative">
      <GalaxyBackground />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get in touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">oanagha93@gmail.com</p>
                  </div>
                </div>
                
                {/* <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 00000000</p>
                  </div>
                </div> */}
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Calicut ,India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Follow me</h3>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="h-12 w-12 hover:shadow-glow">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-12 w-12 hover:shadow-glow">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-12 w-12 hover:shadow-glow">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-card">
            <h3 className="text-xl font-semibold mb-6">Send a message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <Button variant="hero" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;