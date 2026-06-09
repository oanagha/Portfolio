import GalaxyBackground from "./GalaxyBackground";

const topSkillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Shadcn/ui", "Responsive Design"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Go (GoLang)", "REST APIs", "JWT Authentication", "API Development"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Strapi"],
  },
];

const toolsCategory = {
  title: "Tools",
  skills: ["Git", "GitHub", "Postman", "pgAdmin", "Lovable", "Cursor AI"],
};

const SkillCard = ({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) => (
  <div className="group bg-card rounded-xl p-6 shadow-card border border-border/40 hover:shadow-glow hover:-translate-y-1 transition-smooth h-full">
    <h3 className="text-xl font-semibold mb-5 gradient-text text-center">{title}</h3>
    <div className="space-y-2.5">
      {skills.map((skill) => (
        <div
          key={skill}
          className="px-3 py-2.5 bg-background/50 rounded-lg text-sm font-medium text-center hover:bg-primary/10 transition-smooth cursor-default"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="py-20 px-6 relative bg-background">
      <div className="absolute inset-0 z-[1] gradient-secondary pointer-events-none" />
      <GalaxyBackground />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topSkillCategories.map((category) => (
              <SkillCard key={category.title} title={category.title} skills={category.skills} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-start-2">
              <SkillCard title={toolsCategory.title} skills={toolsCategory.skills} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
