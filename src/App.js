import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeCard from "./components/HomeCard";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
function App() {
  return (
    <div className="font-roboto-slab text-white max-w-[100vw] min-w-[100vw] relative">
      <Header />
      <div className="w-screen bg-[#111111] h-fit max-w-[100vw] min-w-[100vw] sm:px-16 xs:px-4">
        <HomeCard />
        <Projects />
        <Technologies />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
