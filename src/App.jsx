import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Expertise from "./pages/Expertise";
import PeoplePage from "./pages/PeoplePage";
import Impact from "./pages/Impact";
import Resource from "./pages/Resource";

import NotFound from "./pages/NotFound";
import ExpertiseDetailPage from "./pages/expertiseDesc/ExpertiseDetailPage";
import PeopleProfile from "./components/PeopleProfile";
import Terms from "./pages/Terms&policy/Terms";

export default function App() {
  return (
    <div>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/peoplepage" element={<PeoplePage />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/expertise/details" element={<ExpertiseDetailPage />} />
          <Route path="/advocate/:id" element={<PeopleProfile />} />
          <Route path="/info" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
