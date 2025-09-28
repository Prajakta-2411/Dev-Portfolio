import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Sections/Navbar";


export default function App() {
  return (
    <ThemeProvider>
      <div>
       
        <Navbar/>
      </div>
     </ThemeProvider>
  );
}
