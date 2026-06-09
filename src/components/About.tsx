const About = () => {
  return <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full Stack Developer passionate about scalable, user-centric software solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I am a Full Stack Developer passionate about building scalable web applications and meaningful digital experiences. With professional experience in developing customer-facing platforms, SaaS products, administrative dashboards, and data-driven systems, I enjoy transforming complex requirements into intuitive and reliable solutions.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently working as a Junior Software Engineer at Geesesquads, I collaborate with cross-functional teams to develop production-ready applications that prioritize performance, usability, and maintainability. My journey began with a ME(A)RN Stack Development internship at Luminar Technolab, where I built a strong foundation in modern web development.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              As a Computer Science graduate from the University of Calicut, I am committed to continuous learning, solving real-world problems, and creating technology that delivers value to both businesses and users.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 gradient-secondary rounded-full text-sm font-medium">User-Centric Design</span>
              <span className="px-4 py-2 gradient-secondary rounded-full text-sm font-medium">
                REST API Integration
              </span>
              <span className="px-4 py-2 gradient-secondary rounded-full text-sm font-medium">
              Scalable Applications
              </span>
            </div>
          </div>
          
          <div className="gradient-secondary rounded-2xl p-8 shadow-card hover:shadow-glow transition-smooth hover:-translate-y-2 hover:scale-105 lg:sticky lg:top-24 self-start">
            <h3 className="text-xl font-semibold mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Education</span>
                <span className="font-medium">B.Sc Computer Science</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Current Role</span>
                <span className="font-medium">Junior Software Engineer</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Company</span>
                <span className="font-medium">GEESESQUADS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Location</span>
                <span className="font-medium">Calicut, India</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">University</span>
                <span className="font-medium">University of Calicut</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;