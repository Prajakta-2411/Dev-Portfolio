import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Sections/Navbar";
import HeroSection from "./components/Sections/HeroSection";

export default function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSection />
      </div>
    </ThemeProvider>
  );
}
