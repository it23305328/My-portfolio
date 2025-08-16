import { Card } from "@/components/ui/card";
import { Database, Server, Cloud, Shield } from "lucide-react";

const DatabasesSection = () => {
  const databaseSkills = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Relational Databases",
      description: "Working with structured data and complex relationships",
      technologies: ["PostgreSQL", "MySQL", "SQLite", "SQL Server"]
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "NoSQL Databases",
      description: "Managing unstructured data and scalable solutions",
      technologies: ["MongoDB", "Firebase", "Redis", "DynamoDB"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Databases",
      description: "Leveraging cloud-based database services",
      technologies: ["AWS RDS", "Google Cloud SQL", "Azure SQL", "Supabase"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Database Security",
      description: "Implementing secure data access and protection",
      technologies: ["Authentication", "Authorization", "Encryption", "Backup"]
    }
  ];

  return (
    <section id="databases" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Databases</h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Expertise in database design, management, and optimization
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {databaseSkills.map((skill, index) => (
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

export default DatabasesSection;