import rectangle from "/Rectangle 6[1].png";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
export default function Card({ image, title, price, desc }) {
    return(
<div className=" 
   p-6 w-[340px] h-[440px] hover:scale-105 transition-all cursor-pointer   bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${rectangle})` }}>
      <img src={image} alt={title} className="w-60 h-60 mx-auto" />

      <h3 className="text-xl text-gray-300 font-semibold mt-4">{title}</h3>
      <p className="text-gray-300 text-sm mt-2">{desc}</p>
       <div className="flex gap-40 items-center">
      <p className="text-lg text-gray-300 font-semibold mt-4">Rs. {price}/-</p>
                  <button className="mt-4 px-3 py-3 border-1 border-gray-300 text-gray-300 font-regular rounded-xl">
                     <FiShoppingBag className="cursor-pointer" />
                  </button>
                  </div>
    </div>
    );

}
