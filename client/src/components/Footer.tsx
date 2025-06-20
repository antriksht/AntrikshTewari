import { Mail, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">
            <span className="text-primary">Antriksh</span> Tewari
          </div>
          <p className="text-muted-foreground mb-6">Marketing Meets Machine Learning</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:antriksh.tewari89@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/antrikshtewari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://wa.me/919999446188" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-green-400 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Antriksh Tewari. Transforming businesses through data-driven marketing excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
