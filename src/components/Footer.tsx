import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:alex.johnson@email.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold hero-gradient bg-clip-text text-transparent hover:scale-105 transition-spring"
          >
            Portfolio
          </button>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full skill-bg hover:scale-110 hover:text-primary transition-spring"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-text-light">
            Ready to bring your ideas to life? Let's work together!
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-text-light">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by Muditha Madushanka</span>
          </div>
          
          <p className="text-sm text-text-light">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;