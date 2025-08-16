import { Camera, Heart, Users, Calendar } from "lucide-react";

const PhotographySection = () => {
  const photographyServices = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Wedding Photography",
      description: "Capturing your special day with artistic vision and emotional depth",
      features: ["Bridal Portraits", "Ceremony Coverage", "Reception Photography", "Engagement Sessions"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Event Photography",
      description: "Professional coverage for corporate events, parties, and celebrations",
      features: ["Corporate Events", "Birthday Parties", "Anniversary Celebrations", "Family Gatherings"]
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Special Occasions",
      description: "Preserving memories from life's important milestones",
      features: ["Graduation Ceremonies", "Baby Showers", "Religious Celebrations", "Cultural Events"]
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Portrait Sessions",
      description: "Professional portraits that capture personality and style",
      features: ["Individual Portraits", "Couple Photography", "Family Photos", "Professional Headshots"]
    }
  ];

  return (
    <section id="photography" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Wedding & Event Photography
          </h2>
          <p className="text-xl text-text-light leading-relaxed">
            Capturing life's most precious moments with creativity, passion, and professional expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {photographyServices.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mr-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
              </div>
              
              <p className="text-text-light mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-text-light">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold mb-4">Ready to Capture Your Special Day?</h3>
            <p className="text-text-light mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help preserve your precious memories with stunning photography 
              that tells your unique story.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;