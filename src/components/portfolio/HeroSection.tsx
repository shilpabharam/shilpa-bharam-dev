import { Download, Linkedin, Mail, Github, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";
const HeroSection = () => {
  const techStack = ["React", "Angular", "TypeScript", "Node.js", "MongoDB"];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 noise" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      {/*<div className="container max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 items-center">*/}
      <div className="container max-w-6xl relative z-10">
        <div className="grid grid-cols-12 items-center gap-4">

          {/* LEFT: 8 Columns */}
          <div className="col-span-12 lg:col-span-9 space-y-6 opacity-0 animate-fade-in-up">

            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">Shilpa Bharam</span>
            </h1>
            <h5 className="text-1xl leading-tight">
              <span className="gradient-text">+1(425)559-5646 | </span> <span className="gradient-text">shilpabharam06@gmail.com</span>
            </h5>

            {/* Role + Social */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 
          border border-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Senior Front-End Engineer
              </span>

              {/* Social Icons */}
     

              <a href="https://leetcode.com/shingnapure_shilpa17/" target="_blank">
                <img  src="https://www.svgrepo.com/show/341985/leetcode.svg" width="20px" height="20px" alt="" />
              </a>
                      <a href="https://www.linkedin.com/in/shilpabharam/" target="_blank"
                className="icon-btn">
                <Linkedin className="w-5 h-5" />
              </a>

              <a href="mailto:shilpa@example.com" className="icon-btn">
                <Mail className="w-5 h-5" />
              </a>

              <a href="https://github.com/shilpabharam" target="_blank"
                className="icon-btn">
                <Github className="w-5 h-5" />
              </a>

               

            <a href="https://www.hackerrank.com/profile/shilpabharam06" target="_blank" >
                <img className="icon-btn" src="https://www.svgrepo.com/show/341892/hackerrank.svg" width="20px" height="20px" alt="" />
              </a>

            </div>


            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
    Front-End Engineer with 8+ years of experience building high-performance, responsive, and accessible web applications across enterprise and customer-facing platforms.
Specialized in React, Next.js, Angular, and TypeScript with a strong focus on performance optimization, scalable UI architecture, and seamless user experiences.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-2">
              {techStack.map((tech, index) => (
                <span
                  key={tech}
                  className={`px-4 py-2 bg-secondary/50 rounded-full text-sm border 
              opacity-0 animate-fade-in stagger-${index + 1}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: 4 Columns */}
          <div className="col-span-12 lg:col-span-3 flex justify-center lg:justify-end 
      opacity-0 animate-fade-in stagger-3">

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 
          to-accent/40 rounded-full blur-3xl scale-110" />

              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden 
          border-2 border-primary/30 shadow-2xl animate-float">
                <img
                  src={profilePhoto}
                  alt="Shilpa Bharam"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="absolute -inset-4 border border-primary/10 rounded-full" />
              <div className="absolute -inset-8 border border-primary/5 rounded-full" />
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
