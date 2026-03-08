import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { GitHubGraph } from "@/components/GitHubGraph";
import { ProjectGrid } from "@/components/ProjectGrid";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <div className="max-w-3xl mx-auto w-full">
        <Hero />
        <ProjectGrid />
        <GitHubGraph />
        <AboutSection />
        <Footer />
      </div>
    </main>
  );
}
