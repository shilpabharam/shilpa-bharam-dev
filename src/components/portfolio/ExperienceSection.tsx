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
        "Built a store inventory management dashboard using React, TypeScript, Redux, and GraphQL.",
        "Migrated legacy UI components to AngularJS-based architecture, improving maintainability and performance",
        "Improved rendering performance by ~200ms through memoization and optimized component state placement.",
        "Worked with AWS S3 and CloudFront for frontend asset deployment.",
        "Wrote unit tests using Jest and React Testing Library, achieving ~80% coverage for core components."

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
        "Contributed to HP’s Workforce Experience Portal, used by 40K+ employees across 20+ countries, centralizing device lifecycle management.",
        "Implemented Redux architecture for predictable state management and maintainable frontend workflows.",
        "Mentored junior developers and participated in code reviews to uphold frontend best practices and code quality.",
        "Integrated GraphQL APIs into frontend workflows, reducing average data fetch latency by ~180ms.",
        "Partnered with DevOps to automate deployments using Jenkins and AWS, contributing to CI/CD pipelines for dev and staging environments."
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
        "Migrated secure online banking modules from jQuery to Angular, supporting 200K+ customers.",
        "Utilized Angular Routing and Lazy Loading to optimize performance and reduce initial load time by over 15%.",
        "Translated UI/UX wireframes into responsive, mobile-first applications, increasing mobile adoption by ~15%.",
        "Collaborated with backend teams to integrate APIs and ensure reliable, secure data flows."
      ],
    },
    {
      company: "Automotive Research Association of India (ARAI)",
      role: "Front-End Developer",
      period: "2016 - 2018",
      location: "India",
      description:
        "Built responsive web applications for automotive IoT and internal enterprise tools.",
      technologies: ["JavaScript", "React", "Angular", "MongoDB", "CSS3"],
      highlights: [
        "Built a real-time IoT fleet management dashboard using Angular, Highcharts, and Google Maps APIs to track 500+ vehicles.",
        "Developed interactive data visualizations and map-based UI for near real-time telemetry.",
                "Collaborated with product and UX teams to deliver user-focused features.",
        "Worked across the full SDLC, contributing to a product built from scratch in a startup-style environment."
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
              className={`relative mb-12 last:mb-0 ${index % 2 === 0 ? "md:pr-8 md:text-right md:mr-auto" : "md:pl-8 md:ml-auto"
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
                  <span className="font-bold text-heading text-lg">{exp.role + "  |"}</span>
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
