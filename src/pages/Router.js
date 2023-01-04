import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navlinks from "./Navlinks";

import Page1fulltime from "./Page1fulltime";
import Page3onsite from "./Page3onsite";
import Page6saved from "./Page6saved";
import Page5applied from "./Page5applied";

function MainRouter() {
  return (
    <BrowserRouter>
      <Navlinks />
      <Routes>
        <Route path="/" element={<Page1fulltime />} />
        <Route path="/Page3onsite" element={<Page3onsite />} />
        <Route path="/Page5applied" element={<Page5applied />} />
        <Route path="/Page6saved" element={<Page6saved />} />
      </Routes>
    </BrowserRouter>
  );
}
export default MainRouter;
