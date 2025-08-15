import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 88 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "Express.js", level: 82 },
        { name: "PostgreSQL", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 60 },
        { name: "Jest/Testing", level: 75 }
      ]
    }
  ];

  const certifications = [
    "AWS Cloud Practitioner",
    "Meta Frontend Developer",
    "Google UX Design Certificate",
    "freeCodeCamp Responsive Web Design"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="p-6 hover:scale-105 transition-spring animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-text-light">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-6 text-center">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 skill-bg p-4 rounded-lg hover:scale-105 transition-spring"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;