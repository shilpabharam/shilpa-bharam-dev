import { Building2, MapPin, Calendar } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
        {
      company: "Alberstons",
      role: "Senior Front-End Engineer",
      period: " July 2025 - Present",
      location: "Remote / USA",
      description:
        "Leading frontend development for enterprise-scale applications serving global workforce management platforms.",
      technologies: ["React", "TypeScript", "Redux", "Node.js", "REST APIs"],
      highlights: [
        "Built and maintained customer-facing applications used by 100K+ users",
        "Led performance optimization initiatives reducing load times by 40%",
        "Collaborated with cross-functional teams across Product, UX, and Backend",
      ],
    },
    {
      company: "HP Inc.",
      role: "Senior Front-End Engineer",
      period: "Jan 2021 - Jan 2025",
      location: "India",
      description:
        "Leading frontend development for enterprise-scale applications serving global workforce management platforms.",
      technologies: ["React", "TypeScript", "Redux", "Node.js", "REST APIs"],
      highlights: [
        "Built and maintained customer-facing applications used by 100K+ users",
        "Led performance optimization initiatives reducing load times by 40%",
        "Collaborated with cross-functional teams across Product, UX, and Backend",
      ],
    },
    {
      company: "Capgemini",
      role: "Front-End Developer",
      period: "2018 - 2021",
      location: "India",
      description:
        "Developed enterprise web applications for banking and retail sectors with focus on scalability and user experience.",
      technologies: ["Angular", "JavaScript", "RxJS", "NgRx", "SASS"],
      highlights: [
        "Delivered retail POS systems handling thousands of daily transactions",
        "Implemented data-driven dashboards for banking analytics platforms",
        "Mentored junior developers and established coding best practices",
      ],
    },
    {
      company: "Previous Experience",
      role: "Front-End Developer",
      period: "2016 - 2018",
      location: "India",
      description:
        "Built responsive web applications for automotive IoT and internal enterprise tools.",
      technologies: ["JavaScript", "React", "Angular", "MongoDB", "CSS3"],
      highlights: [
        "Developed IoT dashboards for automotive industry clients",
        "Created internal workforce management tools",
        "Contributed to UI component libraries and design systems",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          {/*<div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 transform md:-translate-x-1/2" />*/}

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:pr-8 md:text-right md:mr-auto" : "md:pl-8 md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              {/*<div
                className={`absolute top-6 w-4 h-4 rounded-full border-4 border-background
                  bg-gradient-to-br from-primary to-accent glow-primary
                  left-0 md:left-auto ${
                    index % 2 === 0 ? "md:-right-[2.5rem]" : "md:-left-[2.5rem]"
                  } transform -translate-x-1/2 md:translate-x-0`}
              />*/}

              {/* Content Card */}
              <div
                className="ml-8 md:ml-0 group p-6 rounded-2xl bg-card border border-border/50 
                  hover:border-primary/30 transition-all duration-500 card-hover"
              >
                {/* Header */}
                <div className={`flex items-center gap-3 mb-4 md:justify-end}`}>
                  {/*<span className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                    <Building2 className="w-5 h-5 text-primary" />
                  </span>*/}
                  <span className="font-bold text-heading text-lg">{exp.company + "  |"}</span>
                    <span className="font-bold text-heading text-lg">{exp.role + "  |" }</span>
                        <span className={`flex items-center gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </span>
                </div>

              
                
                

                <p className="text-text-primary mb-4 text-left">{exp.description}</p>
                {/* Highlights */}
                <ul className="space-y-2 text-left">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
