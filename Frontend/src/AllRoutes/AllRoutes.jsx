import { Routes, Route } from "react-router-dom";

import React from "react";
import OneProductPage from "../Pages/SingleProductPage";
import HomePage from "../Components/HomePage";
import Mens from "../Pages/All10Pages/Mens";
import WoMens from "../Pages/All10Pages/women";
import BestSellers from "../Pages/All10Pages/BestSeller";
import NewArrivals from "../Pages/All10Pages/NewArrivals";
import Footwear from "../Pages/All10Pages/Footwear";
import Cardio from "../Pages/All10Pages/Cardio";
import Cycles from "../Pages/All10Pages/Cycles";
import Accessories from "../Pages/All10Pages/Accessories";
import Supplements from "../Pages/All10Pages/Supplements";
import Equipments from "../Pages/All10Pages/Equipments";
import Wishlist from "../Organism/WishList&Cart/Wishlist";
import Cart from "../Organism/WishList&Cart/Cart";
import SignupPage from "../Components/LoginPart/SignupPage";
import LoginPage from "../Components/LoginPart/LoginPage";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/mens" element={<Mens />}></Route>
        <Route path="/womens" element={<WoMens />}></Route>
        <Route path="/topSellings" element={<BestSellers />}></Route>
        <Route path="/topArrivals" element={<NewArrivals />}></Route>
        <Route path="/footwears" element={<Footwear />}></Route>
        <Route path="/cardio" element={<Cardio />}></Route>
        <Route path="/cycles" element={<Cycles />}></Route>
        <Route path="/accessories" element={<Accessories />}></Route>
        <Route path="/supplements" element={<Supplements />}></Route>
        <Route path="/equipments" element={<Equipments />}></Route>
        <Route path="/:router/:id" element={<OneProductPage />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
