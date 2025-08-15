import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with modern web technologies for optimal performance and user experience.",
      techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#",
      date: "2024",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      techStack: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "#",
      demo: "#",
      date: "2023",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts, beautiful data visualizations, and responsive design for all devices.",
      techStack: ["Vue.js", "Chart.js", "Weather API", "Tailwind"],
      github: "#",
      demo: "#",
      date: "2023",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "Analytics platform for social media performance tracking with advanced reporting, data visualization, and automated insights generation.",
      techStack: ["Python", "Django", "React", "D3.js"],
      github: "#",
      demo: "#",
      date: "2024",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            A showcase of my recent work and side projects that demonstrate my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden hover:scale-105 transition-spring animate-fade-in-up ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-text-light mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{project.date}</span>
                      {project.featured && (
                        <Badge variant="secondary" className="ml-2">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-text-light mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="skill-bg border-primary/30 text-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex items-center gap-2 hero-gradient hover:opacity-90"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"></div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('#', '_blank')}
          >
            View All Projects on GitHub
            <Github className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;