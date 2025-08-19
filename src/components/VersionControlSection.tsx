import { Card } from "@/components/ui/card";
import { GitBranch, Users, Workflow, FileText } from "lucide-react";

const VersionControlSection = () => {
  const versionControlSkills = [
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "Git & GitHub",
      description: "Source code management and collaboration workflows",
      technologies: ["Git", "GitHub", "Repository Management", "GitLab"]
    },
    /*{
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Working effectively in development teams",
      technologies: ["Pull Requests", "Code Reviews", "Branching Strategies", "Merge Conflicts"]
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "CI/CD Pipelines",
      description: "Automated testing and deployment workflows",
      technologies: ["GitHub Actions", "GitLab CI", "Jenkins", "Automated Testing"]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Documentation",
      description: "Maintaining clear project documentation",
      technologies: ["README.md", "API Documentation", "Code Comments", "Wiki"]
    }*/
  ];

  return (
    <section id="version-control" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Version Control</h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Professional version control and collaborative development practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {versionControlSkills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 hover:scale-105 transition-spring animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-primary mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-text-light mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="skill-bg px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VersionControlSection;