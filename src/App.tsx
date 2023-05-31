import Header from "./components/Header";
import InfoForm from "./components/InfoForm";
import EducationForm from "./components/EducationForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import CV from "./components/CV";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<CV />} />
        <Route path="/Personal" element={<InfoForm />} />
        <Route path="/Education" element={<EducationForm />} />
        <Route path="/Work" element={<WorkExperienceForm />} />
      </Routes>
    </div>
  );
}

export default App;
