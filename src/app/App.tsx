import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.module.css";
import ProjectDetailContent from "../pages/projectDetails/sections/ProjectDetailContent";
import Home from "../pages/home/Home";
import ProjectDetail from "../pages/projectDetails/ProjectDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/project-detail" element={<ProjectDetail />} />
          <Route path="/project-detail-md" element={<ProjectDetailContent />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
