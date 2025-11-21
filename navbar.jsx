import React from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import logo from "../assets/5e88b52117aa40baa6a96e43b5c4e57858edaa47.png";
export default function Navbar() {
    return(
         <nav className="w-full flex items-center justify-between px-14 py-4">
                 <div className="flex items-center gap-2">
                   <img
                     src={logo}
                     alt="logo"
                     className="w-8 h-8"
                   />
                   <h1 className="font-indie text-gray-300 font-medium text-[25px] leading-[100%] tracking-[0]"
         >FloraVision.</h1>
                 </div>
         
                 <ul className="font-light text-[15px] text-gray-300 leading-[35px] 
                   hidden md:flex items-center gap-12">
                   <li>Home</li>
                   <li>Plants Type</li>
                   <li>Shop</li>
                   <li>Contact</li>
                 </ul>
         
                 <div className="hidden md:flex items-center gap-6 text-lg">
                   <FiSearch className="cursor-pointer" />
                   <FiShoppingBag className="cursor-pointer" />
                 </div>
         
                 <HiMenu className="md:hidden text-3xl cursor-pointer" />
               </nav>
    );
}  


