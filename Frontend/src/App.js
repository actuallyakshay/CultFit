
import React from "react";
import AllRoutes from "./AllRoutes/AllRoutes";
import CultStoreNavbar from "./Components/CultStoreNavbar/CultStoreNavbar";
import Footer from "./utils/Footer";

function App() {

  return (
    <div>
      <CultStoreNavbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
