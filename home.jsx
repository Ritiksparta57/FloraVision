import { useState } from "react";
import bg from "/fa0765984e44f85e1a04562f820f1492949a1257.jpg";
import Footer from "/footer";
import Card from "/card";
import Customer from "/Customer";
import Heroplant from "/Heroplant";
import Navbar from "/navbar";
import Oxygen from "/Oxygen";
import Trending from "/trending";
import TopSell from "/topsell";
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


