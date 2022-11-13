import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import AllRoutes from "./AllRoutes/AllRoutes";
import Carousel from "./Components/CarosoulCompo";
import CultStoreNavbar from "./Components/CultStoreNavbar/CultStoreNavbar";
import HomePage from "./Components/HomePage";
import Cart from "./Organism/WishList&Cart/Cart";
import Wishlist from "./Organism/WishList&Cart/Wishlist";
import Accessories from "./Pages/All10Pages/Accessories";
import Mens from "./Pages/All10Pages/Mens";
import Footer from "./utils/Footer";
import SliderCompo from "./utils/Slider";

function App() {
  const { wish } = useParams();

  return (
    <div>
      <AllRoutes />
    </div>
  );
}

export default App;
