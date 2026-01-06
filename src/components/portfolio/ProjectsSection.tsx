import { TrendingUp, Layers } from "lucide-react";

interface Project {
  title: string;
  description: string;
  domain: string;
  technologies: string[];
  impact: string;
  gradient: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Enterprise Workforce Platform",
      description:"The HP Workforce Experience Platform (WXP) is a cloud-based, AI-powered digital employee experience (DEX) platform. It helps IT teams monitor, manage, and improve the performance and satisfaction of digital tools — like PCs, Macs, printers, mobile devices, apps, and virtual workspaces — by using real-time telemetry, analytics, and automation to prevent issues before they happen and enhance workforce productivity.",
      domain: "Enterprise Workforce Solution",
      technologies: ["React", "TypeScript", "Redux", "REST APIs", "Material UI"],
      impact: "Used by 100K+ employees globally",
      gradient: "from-primary to-purple-500",
    },
    //{
    //  title: "Banking Analytics Dashboard",
    //  description:
    //    "Developed data-driven dashboards for real-time financial analytics. Implemented complex data visualizations and ensured high performance with large datasets.",
    //  domain: "FinTech / Banking",
    //  technologies: ["Angular", "NgRx", "D3.js", "RxJS", "Node.js"],
    //  impact: "Reduced report generation time by 60%",
    //  gradient: "from-accent to-cyan-500",
    //},
    //{
    //  title: "Retail POS System",
    //  description:
    //    "Created a modern point-of-sale system for retail chains. Built responsive interfaces optimized for touch screens and implemented offline-first functionality.",
    //  domain: "Retail Technology",
    //  technologies: ["Angular", "TypeScript", "IndexedDB", "Service Workers"],
    //  impact: "Handles 10K+ daily transactions",
    //  gradient: "from-pink-500 to-rose-500",
    //},
    {
      title: "Automotive IoT Dashboard",
      description:
        "We deliver end-to-end solutions, not just components. Our integrated framework turns raw data from the physical world into decisive action and measurable business outcomes.",
      domain: "Automotive IoT",
      technologies: ["React", "WebSocket", "Chart.js", "Node.js", "MongoDB"],
      impact: "Monitors 5K+ connected vehicles",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container max-w-6xl relative z-10">
        <div className="text-center mb-16">
          {/*<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-primary text-sm font-medium">Featured Work</span>
          </div>*/}
          <h2 className="text-4xl md:text-5xl font-bold">
            Projects & <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of enterprise applications I've built across different industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-card border border-border/50 overflow-hidden
                hover:border-primary/30 transition-all duration-500 card-hover"
            >
              {/* Project Header with gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Layers className="w-12 h-12 text-white/50" />
                </div>
                {/* Domain Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                  {project.domain}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-1 text-muted-foreground text-xs">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Impact */}
                <div className="flex items-center gap-2 text-sm pt-4 border-t border-border/50">
                  <div className="p-1.5 rounded-full bg-emerald-500/10">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <span className="text-emerald-400 font-medium">{project.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note for placeholder */}
        {/*<div className="text-center mt-12 p-6 rounded-2xl bg-card border border-dashed border-border/50">
          <p className="text-muted-foreground text-sm">
            📝 These are placeholder projects based on your experience domains. 
            Please provide specific project details you'd like to highlight.
          </p>
        </div>*/}
      </div>
    </section>
  );
};

export default ProjectsSection;
