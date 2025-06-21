import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filters = [
    { id: "all", label: "All" },
    { id: "seo", label: "SEO" },
    { id: "ppc", label: "PPC" },
    { id: "automation", label: "Automation" },
    { id: "dashboards", label: "Dashboards" },
    { id: "ml", label: "ML" },
    { id: "cro", label: "CRO" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      {/* Floating orbs background */}
      <div className="absolute inset-0">
        <div className="floating-orb w-28 h-28 top-1/4 right-10" style={{ animationDelay: '1s' }}></div>
        <div className="floating-orb w-36 h-36 bottom-1/3 left-16" style={{ animationDelay: '3s' }}></div>
        <div className="floating-orb w-20 h-20 top-10 left-1/3" style={{ animationDelay: '5s' }}></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Featured <span className="text-destructive">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Showcase of data-driven marketing solutions that delivered measurable business impact.
          </motion.p>
          
          {/* Project Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.id)}
                className="transition-all"
              >
                {filter.label}
              </Button>
            ))}
          </motion.div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="project-card glass-card rounded-xl p-6 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${project.color === 'blue' ? 'bg-primary/10' : 'bg-destructive/10'}`}>
                  <project.icon className={`w-8 h-8 ${project.color === 'blue' ? 'text-primary' : 'text-destructive'}`} />
                </div>
                <Badge variant="secondary" className="bg-green-500/10 text-green-400">
                  {project.result}
                </Badge>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.company}</p>
              
              <p className="text-foreground mb-6 text-sm">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <Link href={`/projects/${project.slug}`}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`${project.color === 'blue' ? 'text-primary hover:text-primary' : 'text-destructive hover:text-destructive'} group-hover:translate-x-1 transition-transform`}
                >
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
