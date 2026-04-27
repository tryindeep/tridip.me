import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Toaster } from "./components/ui/sonner";

const Home = () => {
  useEffect(() => {
    document.title = "Tridip Pramanick - Software & AI Engineer";
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#1C1A17] paper-grain">
      <Header />
      <main className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-4">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Skills />
        <Contact />
      </main>
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
