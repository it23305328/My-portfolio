import { Card } from "@/components/ui/card";
import { Code, Laptop, Lightbulb, Rocket } from "lucide-react";

const AboutSection = () => {
  const techStack = [
    { name: "JavaScript", icon: "🟨" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "HTML/CSS", icon: "🎨" },
  ];

  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Code",
      description: "Writing maintainable and efficient code"
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Responsive Design",
      description: "Creating beautiful UIs across all devices"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Problem Solving",
      description: "Analytical thinking and creative solutions"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Fast Learner",
      description: "Always eager to learn new technologies"
    },
  ];

  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Get to know more about my journey and what drives my passion for software engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="w-72 h-72 rounded-xl bg-card flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
            </div>
          </div>

          <div className="animate-fade-in-up delay-200">
            <h3 className="text-2xl font-bold mb-6">My Story</h3>
            <div className="space-y-4 text-text-light">
              <p>
                I'm a passionate software engineering student with a love for creating 
                digital solutions that make a difference. My journey began with curiosity 
                about how things work behind the scenes of our favorite applications.
              </p>
              <p>
                Currently pursuing my degree while actively building projects and 
                contributing to open source. I believe in continuous learning and 
                staying up-to-date with the latest technologies and best practices.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new frameworks, 
                participating in hackathons, or mentoring fellow students in their 
                programming journey.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:scale-105 transition-spring animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-primary mb-4 flex justify-center">
                {highlight.icon}
              </div>
              <h4 className="font-semibold mb-2">{highlight.title}</h4>
              <p className="text-sm text-text-light">{highlight.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="skill-bg px-6 py-3 rounded-full flex items-center gap-3 hover:scale-105 transition-spring"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;