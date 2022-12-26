import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Page1 from "../pages/Page1";

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Page1 />} />
        </Routes>
    </BrowserRouter>
  );
}
export default MainRouter;
