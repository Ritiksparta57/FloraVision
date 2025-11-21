import { useState } from "react";
import bg from "./assets/fa0765984e44f85e1a04562f820f1492949a1257.jpg";
import Footer from "./components/footer";
import Card from "./components/card";
import Customer from "./components/Customer";
import Heroplant from "./components/Heroplant";
import Navbar from "./components/navbar";
import Oxygen from "./components/Oxygen";
import Trending from "./components/trending";
import TopSell from "./components/topsell";
export default function Home() {
  return (
       <div className="w-full min-h-screen bg-[#0f1b12] text-white">
     <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
     style={{ backgroundImage: `url(${bg})` }}>
       <Navbar />
    <Heroplant />
    <Trending />
</div>
<TopSell />
      <Customer />
      <Oxygen />
      <Footer />
    </div>
  );}

