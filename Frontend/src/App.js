import React from "react";
import AllRoutes from "./AllRoutes/AllRoutes";
import AllProducts from "./Components/AllProduct/AllProducts";
import CultStoreNavbar from "./Components/CultStoreNavbar/CultStoreNavbar";
import InputSearchSingleData from "./Organism/InputSearchSingleData";
import OneProductPage from "./Pages/SingleProductPage";

function App() {
  return (
    <div>
      <CultStoreNavbar />
      <AllRoutes />
    </div>
  );
}

export default App;
