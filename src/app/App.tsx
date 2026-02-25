import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.module.css";
import ProjectDetailContent from "../pages/projectDetails/sections/ProjectDetailContent";
import Home from "../pages/home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/projects" element={<ProjectDetailContent />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
