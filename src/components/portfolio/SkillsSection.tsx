interface SkillCategory {
  title: string;
  skills: string[];
  gradient: string;
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Primary Skills",
      skills: ["React","Next","Redux", "Angular", "JavaScript (ES6+)","TypeScript", "NodeJS", "HTML5", "CSS3"],
      gradient: "from-primary to-purple-400",
    },
    {
      title: "Secondary Skills",
      skills: ["GraphQL","RestAPI", "AWS", "Azure Services", " Tailwind CSS", "Redux","Jest/RTL","MongoDB"],
      gradient: "from-accent to-cyan-400",
    }
  ];

  /*React 16 ,NextJS,JavaScript, Typescript, Angular 14 ,
  NodeJS, ExpressJs, HTML5, CSS3, Material-	UI,
  Tailwind CSS, Media Queries,TypeScript, ES6/ES5,
   MongoDB,MySQL,Redux,   RestAPI,GraphQL, AWS, 
   	Azure Services, GitHub, Jenkins, CI/CD, Docker,
     Kubernetes,D3.JS,Jira, Bootstrap, Webpack, Babel, Axios, 	Jest,Ajax,Enzyme, 
  ESLint, Prettier, Passport.js, Chrome DevTools, React DevTools, React Router,VS Code.*/

  const additionalSkills = [
    "Performance Optimization",
    "Responsive Design",
    "Accessibility (a11y)",
    "Cross-browser Compatibility",
    "UI/UX Collaboration",
    "Code Reviews",
    "Technical Documentation",
  ];

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container max-w-6xl relative z-10">
        <div className="text-center mb-16">
        
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 
                hover:border-primary/30 transition-all duration-500 card-hover overflow-hidden"
            >
              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className={`inline-flex px-3 py-1 rounded-full bg-gradient-to-r ${category.gradient} mb-4`}>
                <span className="text-white text-sm font-semibold">{category.title}</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary/50 border border-border/50 text-foreground text-sm font-medium rounded-lg
                      hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Expertise */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((item) => (
               <span key={item} className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 
          border border-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
               {item}
              </span>

              //<span
              //  key={item}
              //  className="px-4 py-2 bg-secondary/30 border border-border/50 text-muted-foreground rounded-full text-sm
              //    hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
              //>
              //  {item}
              //</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
