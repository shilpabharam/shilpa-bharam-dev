import { Users, Globe, Building2, Zap, Code2, Layers } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Zap, value: "8+", label: "Years Experience", color: "from-primary to-purple-400" },
    { icon: Building2, value: "HP, Capgemini", label: "Enterprise Scale", color: "from-accent to-cyan-400" },
    { icon: Globe, value: "100K+", label: "Global Users", color: "from-primary to-pink-400" },
    { icon: Users, value: "Cross-functional", label: "Team Collaboration", color: "from-accent to-teal-400" },
  ];

  const highlights = [
    { icon: Code2, text: "Performance optimization & data-driven UI development" },
    { icon: Layers, text: "State management with Redux, NgRx, and Context API" },
    { icon: Users, text: "Cross-team collaboration with Product, UX, Backend & DevOps" },
    { icon: Zap, text: "Scalable frontend architecture for enterprise applications" },
  ];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container max-w-6xl relative z-10">
        <div className=" gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <span className="text-primary text-sm font-medium">About Me</span>
              </div>
            </div>
            <p className="text-lg text-text-primary leading-relaxed">
                    EDUCATION : Bachelor of Engineering (Computer Engineering) | University of Pune | 2015
            </p>
            <p className="text-muted-foreground leading-relaxed">
  
AWARDS : “On-the-Fly Award” – HP | “Rising Star Award” – Capgemini | Scholarship to attend undergraduate
degree program. | First girl to graduate with engineering degree from the middle school (India).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
