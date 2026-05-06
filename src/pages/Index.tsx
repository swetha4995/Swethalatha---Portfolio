import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen relative overflow-x-hidden">
      <ScrollProgress />
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Experience />
      <Research />
      <Contact />
    </main>
  );
};

export default Index;
