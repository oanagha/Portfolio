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
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Full Stack Developer with experience building scalable web applications and enterprise software solutions using React.js, TypeScript, Go, Node.js, Firebase, and SQL databases. Experienced in developing customer-facing platforms, SaaS applications, admin dashboards, and data-driven systems.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Skilled in designing responsive user interfaces, integrating REST APIs, and collaborating across cross-functional teams to deliver production-ready solutions. Currently working as a Junior Software Engineer at GEESESQUADS, following a ME(A)RN Stack Developer internship at LUMINAR TECHNOLAB. I hold a Bachelor's degree in Computer Science from the University of Calicut.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 gradient-secondary rounded-full text-sm font-medium">User-Centric Design</span>
              <span className="px-4 py-2 gradient-secondary rounded-full text-sm font-medium">
                REST API Integration
              </span>
              <span className="px-4 py-2 gradient-secondary rounded-full text-sm font-medium">
                Cross-Functional Collaboration
              </span>
            </div>
          </div>
          
          <div className="gradient-secondary rounded-2xl p-8 shadow-card hover:shadow-glow transition-smooth hover:-translate-y-2 hover:scale-105">
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