import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/home";
import Details from "../pages/details";

const switchRoutes = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </BrowserRouter>
);

const Structure = () => {

  return (
    <div className="relative top-0 min-h-screen bg-gray-300">
      <div className="px-4 py-12">
        {switchRoutes}
      </div>
    </div>
  );
}

export default Structure;
