import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files (CV)
  app.get('/cv.pdf', (req, res) => {
    const filePath = path.join(process.cwd(), 'client', 'public', 'cv.pdf');
    res.download(filePath, 'Antriksh_Tewari_CV.pdf', (err) => {
      if (err) {
        console.error('Error downloading file:', err);
        res.status(404).json({ error: 'File not found' });
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
