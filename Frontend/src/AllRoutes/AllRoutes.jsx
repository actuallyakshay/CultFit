import { Routes, Route } from "react-router-dom";

import React from "react";
import OneProductPage from "../Pages/SingleProductPage";
import AllProducts from "../Components/AllProduct/AllProducts";
import HomePage from "../Components/HomePage";
import Mens from "../Pages/pageCompo/Mens";

function AllRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />}></Route> */}
      <Route path="/" element={<AllProducts />}></Route>
      <Route path="/single" element={<OneProductPage />}></Route>
      <Route path="/men" element={<Mens />}></Route>
    </Routes>
  );
}

export default AllRoutes;
