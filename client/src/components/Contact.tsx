import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Download, Linkedin, MessageCircle, Calendar, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "antriksh.tewari89@gmail.com",
      href: "mailto:antriksh.tewari89@gmail.com",
      color: "text-blue-500 group-hover:bg-blue-500/20 bg-blue-500/10"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9999446188",
      href: "tel:+919999446188",
      color: "text-green-500 group-hover:bg-green-500/20 bg-green-500/10"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Quick Chat",
      href: "https://wa.me/919999446188",
      color: "text-green-500 group-hover:bg-green-500/20 bg-green-500/10"
    }
  ];

  const guarantees = [
    { icon: "🟢", text: "Email responses within 24 hours" },
    { icon: "🔵", text: "Available for immediate consultation" },
    { icon: "🟣", text: "Flexible meeting schedules" }
  ];

  return (
    <section id="contact" className="py-20 bg-card relative overflow-hidden" ref={ref}>
      {/* Floating orbs background */}
      <div className="absolute inset-0">
        <div className="floating-orb w-36 h-36 top-1/4 left-10" style={{ animationDelay: '0.5s' }}></div>
        <div className="floating-orb w-28 h-28 bottom-1/4 right-12" style={{ animationDelay: '2.5s' }}></div>
        <div className="floating-orb w-20 h-20 top-16 right-1/3" style={{ animationDelay: '4.5s' }}></div>
      </div>
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => {
          const randomTop = Math.random() * 80 + 10;
          const randomLeft = Math.random() * 80 + 10;
          const randomSize = Math.random() * 3 + 2; // 2px to 5px
          const randomDuration = Math.random() * 4 + 2; // 2s to 6s
          const randomDelay = Math.random() * 5; // 0s to 5s
          const randomOpacity = Math.random() * 0.3 + 0.6; // 0.6 to 0.9
          
          return (
            <div
              key={`contact-particle-${i}`}
              className="section-particle"
              style={{
                top: `${randomTop}%`,
                left: `${randomLeft}%`,
                width: `${randomSize}px`,
                height: `${randomSize}px`,
                opacity: randomOpacity,
                animationDuration: `${randomDuration}s`,
                animationDelay: `${randomDelay}s`,
              }}
            />
          );
        })}
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Let's <span className="text-primary">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Ready to transform your marketing through data-driven strategies and AI-powered automation? Let's discuss how we can accelerate your growth.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-8">
                  Whether you're looking to optimize your marketing performance, implement advanced analytics, or explore AI-driven automation, I'm here to help drive measurable results for your business.
                </p>
              </motion.div>
              
              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-card/95 backdrop-blur-sm rounded-lg hover:bg-muted/95 transition-colors group border border-border/40"
                  >
                    <div className={`p-3 rounded-lg transition-colors ${method.color}`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">{method.title}</div>
                      <div className="text-muted-foreground">{method.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center space-x-4 p-4 bg-card/95 backdrop-blur-sm rounded-lg border border-border/40"
              >
                <div className="bg-muted p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-muted-foreground">Noida, India</div>
                </div>
              </motion.div>
            </div>
            
            {/* Download & Social Links */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-6">Professional Links</h3>
              </motion.div>
              
              <div className="space-y-4">
                <motion.a
                  href="/cv.pdf"
                  download
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center justify-between p-6 bg-gradient-to-r from-primary to-primary/80 rounded-lg hover:from-primary/90 hover:to-primary/70 transition-all glow-blue group"
                >
                  <div className="flex items-center space-x-4">
                    <Download className="w-8 h-8 text-primary-foreground" />
                    <div>
                      <div className="font-bold text-lg text-primary-foreground">Download CV</div>
                      <div className="text-primary-foreground/80 text-sm">Complete professional resume</div>
                    </div>
                  </div>
                  <div className="w-6 h-6 text-primary-foreground group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/antrikshtewari"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-center justify-between p-6 bg-card/95 backdrop-blur-sm rounded-lg hover:bg-muted/95 transition-colors group border border-border/40"
                >
                  <div className="flex items-center space-x-4">
                    <Linkedin className="w-8 h-8 text-primary" />
                    <div>
                      <div className="font-bold text-lg">LinkedIn Profile</div>
                      <div className="text-muted-foreground text-sm">Professional network & updates</div>
                    </div>
                  </div>
                  <div className="w-6 h-6 text-muted-foreground group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </motion.a>
              </div>
              
              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Response Guarantee</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      {guarantees.map((guarantee, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <span className="text-lg">{guarantee.icon}</span>
                          <span className="text-foreground">{guarantee.text}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
