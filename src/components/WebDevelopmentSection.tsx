import { Card } from "@/components/ui/card";
import { Globe, Smartphone, Code2, Palette } from "lucide-react";

const WebDevelopmentSection = () => {
  const webSkills = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern frameworks",
      technologies: ["React", "Vue.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Backend Development",
      description: "Creating robust server-side applications and APIs",
      technologies: ["Node.js", "Express.js", "Python", "Django", "RESTful APIs"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive Design",
      description: "Ensuring optimal user experience across all devices",
      technologies: ["Bootstrap", "Flexbox", "Grid", "Mobile-First Design"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces",
      technologies: ["Figma", "Adobe XD", "Wireframing", "Prototyping"]
    }
  ];

  return (
    <section id="web-development" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Web Development</h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Full-stack web development skills for creating modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {webSkills.map((skill, index) => (
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

export default WebDevelopmentSection;