import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files (CV)
  app.get('/Antriksh Tewari - 10+ Years - Head of Marketing.pdf', (req, res) => {
    const filePath = path.join(process.cwd(), 'client', 'public', 'Antriksh Tewari - 10+ Years - Head of Marketing.pdf');
    res.download(filePath, 'Antriksh Tewari - 10+ Years - Head of Marketing.pdf', (err) => {
      if (err) {
        console.error('Error downloading file:', err);
        res.status(404).json({ error: 'File not found' });
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
