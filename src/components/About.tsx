const About = () => {
  return <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full Stack Developer Trainee passionate about creating innovative digital solutions
           </p> */}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">I am currently working as a Full Stack Developer Trainee at GEESESQUADS. Prior to this, I completed a MEARN Stack Development internship at LUMINAR TECHNOLAB, Calicut, where I gained hands-on experience in full-stack web development.</p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I hold a Bachelor's degree in Computer Science from Calicut University. I'm deeply 
              passionate about building responsive, user-friendly websites and continuously exploring 
              new and emerging technologies. Always eager to learn, adapt, and grow in the ever-evolving tech industry.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 gradient-secondary rounded-full text-sm font-medium">Design Thinker</span>
              <span className="px-4 py-2 gradient-secondary rounded-full text-sm font-medium">
                Continuous Learner
              </span>
              <span className="px-4 py-2 gradient-secondary rounded-full text-sm font-medium">
                Adaptable
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
                <span className="font-medium">Trainee at GEESESQUADS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Specialization</span>
                <span className="font-medium">Full Stack Developer</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">University</span>
                <span className="font-medium">Calicut University</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;