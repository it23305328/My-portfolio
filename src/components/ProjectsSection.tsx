import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: " Helth care system-",
      description: "A web-based application built with PHP, HTML, and CSS to manage healthcare services efficiently. Features include patient management, appointment scheduling, medical records management, and doctor/staff profiles. The system offers a user-friendly interface and a responsive design for seamless access on both desktop and mobile devices.",
      techStack: ["PHP", "HTML", "CSS", ],
      github: "https://github.com/it23305328/soft-toy-management-system",
      date: "2024",
      featured: true
    },
    {
      title: " Online tour guide system",
      description: "The Online Tour Guide System is a web application developed using Java, JSP, and CSS. It allows users to browse tourist destinations, book tours, and make secure payments. The system also includes customer care support and upcoming events management, offering a simple and user-friendly interface for both travelers and administrators.",
      techStack: ["JAVA", "JSP", "CSS" , "JavaScript"],
      github: "https://github.com/it23305328/Online-tour-guide-system",
      date: "2024",
      featured: false
    },
    {
      title: "soft toy management system",
      description: "A MERN stack-based system for managing orders, production, inventory, finance, and user management in a soft toy company.",
      techStack: ["Express.js", "React.js", "Node.js", "MongoDB"],
      github: "https://github.com/it23305328/soft-toy-management-system",
      date: "2025",
      featured: true
    },
    {
      title: "Imili-Pocket Mobile Application ",
      description: "Imili-Pocket is a Kotlin-based mobile app that helps users manage personal finances by tracking income, expenses, and budgets. It features a user-friendly interface, monthly reports, and simple navigation to make financial management easy and convenient.",
      techStack: ["Kotlin", "SharedPreferences"],
      github: "https://github.com/it23305328/Imili-Pocket",
      date: "2025",
      featured: false
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
            onClick={() => window.open('https://github.com/it23305328', '_blank')}
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