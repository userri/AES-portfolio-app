import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.module.css";
import Home from "../pages/home/Home";
import ProjectDetail from "../pages/projectDetails/ProjectDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/project-detail" element={<ProjectDetail />} />
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
