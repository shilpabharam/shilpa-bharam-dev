import { Mail, Linkedin, Github, Download, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "shilpa@example.com",
      href: "mailto:shilpa@example.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shilpabharam",
      href: "https://www.linkedin.com/in/shilpabharam/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/shilpabharam",
      href: "https://github.com/shilpabharam",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      {/*<div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Floating orbs */}
      {/*<div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />*/}
      
      <div className="container max-w-4xl relative z-10">
        {/*<div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
       
        </div>*/}

        {/* Status Badges */}
        {/*<div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-400 font-medium">Open to Opportunities</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-secondary/50 border border-border/50">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-foreground">Open to Relocate</span>
          </div>
          <div className="px-5 py-3 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-primary font-medium">H1B Visa</span>
          </div>
        </div>*/}

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-card border border-border/50 text-center
                hover:border-primary/30 transition-all duration-500 card-hover"
            >
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4 
                group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                <contact.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-heading font-semibold mb-1">{contact.label}</p>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                {contact.value}
              </p>
            </a>
          ))}
        </div>


        {/* Resume CTA */}
        {/*<div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border border-primary/20">
          <h3 className="text-xl font-bold text-heading mb-2">Ready to learn more?</h3>
          <p className="text-muted-foreground mb-6">
            Download my resume for a complete overview of my experience and skills.
          </p>
          <Button size="lg" className="gap-2 gradient-primary text-white border-0 hover:opacity-90 px-8">
            <Download className="w-5 h-5" />
            Download Resume
          </Button>
        </div>*/}

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border/50 text-center">
    <div className="credit"><span>Designed &amp; Built by</span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" alt="" width="25px" height="25px" /><span>Shilpa Shingnapure</span></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
