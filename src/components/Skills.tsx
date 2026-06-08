import SkillOrb from "./SkillOrb";
import GalaxyBackground from "./GalaxyBackground";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Shadcn/ui", "Bootstrap"]
    },
    {
      title: "Backend & Databases",
      skills: ["Go (GoLang)", "Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB", "Firebase", "Strapi", "JWT Authentication"]
    },
    {
      title: "Tools",
      skills: ["Postman", "GitHub", "Lovable", "Cursor AI", "Copilot", "Gemini CLI", "ChatGPT", "Git" ]
    }
  ];

  const allSkills = skillCategories.flatMap(category => category.skills);

  return (
    <section className="py-20 px-6 gradient-secondary relative">
      <GalaxyBackground />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* 3D Skills Visualization */}
        {/* <div className="mb-16">
          <SkillOrb skills={allSkills} />
        </div> */}

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="text-center group">
              <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-glow transition-smooth hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-6 gradient-text">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 bg-background/50 rounded-lg text-sm font-medium hover:bg-primary/10 transition-smooth cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;