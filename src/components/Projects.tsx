import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ProjectCard3D from "./ProjectCard3D";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const projects = [
    {
      title: "Skyline Storage",
      description: "Micro frontend self-storage management platform with separate customer-facing and admin frontend modules. Contributed to interfaces where users browse unit sizes, pricing, and availability. Built responsive floor plan and unit listing modules with dynamic backend integration, reusable React components, and admin dashboards for storage units, customer accounts, reservations, and facility operations.",
      tech: ["Micro Frontends", "React.js", "TypeScript", "Node.js", "Tailwind CSS", "Strapi"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "MAOS",
      description: "Developed the frontend for a SaaS platform designed for marketing agencies to centralize client, project, and team management. Built responsive UI components, interactive dashboards for clients, project role permissions, and user profiles. Collaborated with the backend team on Firestore data structures for clients, projects, and tasks.",
      tech: ["React.js", "Tailwind CSS", "Firebase", "Firestore"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "IP-Energy",
      description: "Developed a web-based assessment platform for SMEs to plan and evaluate energy projects. Implemented dynamic questionnaires with text inputs, ratings, checkboxes, and conditional forms. Translated Factfinding, Feasibility, and SDG alignment concepts into an intuitive digital workflow with structured data visualization for project evaluation and reporting.",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Library Management App",
      description: "Full-stack library management application using MongoDB, Express, and Node.js. Features include browse, add, update, and delete books with a responsive frontend interface.",
      tech: ["MongoDB", "Express.js", "Node.js", "HTML", "CSS"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Asset Manager", 
      description: "Comprehensive Asset Manager platform with Firebase, Express, and Node.js. Features asset rental, user assignment, usage history, overdue tracking, and revenue analytics with role-based access control.",
      tech: ["Firebase", "Express.js", "Node.js", "JavaScript"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Staffing CRM",
      description: "Lightweight CRM to manage staff profiles, roles, and daily operations. Features staff onboarding, task assignment, search and filter functionalities, and status tracking with clean responsive UI.",
      tech: ["JavaScript", "HTML", "CSS", "Node.js"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#"
    },
     {
      title: "Boat Website Clone",
      description: "Responsive frontend clone of the Boat website using HTML, CSS, and Bootstrap. Enhanced UI/UX design skills and improved frontend development expertise.",
      tech: ["HTML", "CSS", "Bootstrap"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional and personal projects that showcase my skills and experience
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.title}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-glow transition-smooth hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="aspect-video bg-gradient-secondary relative overflow-hidden">
                <ProjectCard3D isHovered={hoveredProject === project.title} />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs bg-background/50 rounded text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>
        
        {!showAllProjects && (
          <div className="text-center mt-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => setShowAllProjects(true)}
            >
              View All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;