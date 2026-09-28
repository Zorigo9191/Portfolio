import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Snowfall from "./components/parts/snowFall";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Impressum from "./components/parts/Impressum";

function App() {
  return (
    <div className="relative min-h-[160vh] flex flex-col items-center justify-start">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Snowfall />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
      <Footer className="flex mt-b" />
    </div>
  );
}

export default App;
