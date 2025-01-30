import React from "react";
import { Route, Routes } from "react-router-dom";
import Basic from "./Layout/Basic";
import LandingPage from "./pages/LandingPage";
import JobPage from "./pages/JobPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Basic />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/companies" element={<JobPage />} />
      </Route>
    </Routes>
  );
};

export default App;
