import React from "react";
import heroPlant from "/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6.png";
import rectangle from "/Rectangle 6[1].png";
import ronnie from "/72419c36cae7ef6f9c25b97e39a231fc9059935c.png";
import img from "/image.png";
import ra from "/65c9b2e2178b53eba63dace1c4f1d8c96673ade2.png";
export default function Heroplant() {
    return(
          <section className="relative px-14 pt-10 pb-28">
                 <h1 className="text-6xl text-gray-300 font-semibold leading-tight">
                   Earth’s Exhale
                 </h1>
                 <p className="text-gray-300 mt-4 max-w-lg">
                   “Earth Exhale” symbolizes the purity and vitality of the Earth’s
                   natural environment and its essential role in sustaining life.
                 </p>
         
                 <div className="mt-8 flex gap-5">
                   <button className="px-6 py-3  text-gray-300 border-1 border-white font-regular rounded-xl">
                     Buy Now
                   </button>
                   <div className="flex items-center gap-2">
                   <button className="px-6 py-3 border-2 border-gray-300 rounded-full font-light">
                      <img
                      src={img}
                        alt="play-button"
                        className="w-3 h-3" />
                   </button>
                   <p className=" text-gray-300 font-light"> Live Demo..</p>
                   </div>
                 </div>
                         <div className="relative w-[350px] mt-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-[35px] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                           <div className="flex justify-content items-center">
                           <img
                             src={ronnie}
                             alt="avatar"
                             className="w-14 h-14 rounded-full absolute -top--1 left-6"
                           />
                           <div className="ml-20">
                           <h3 className="text-xl font-regular mt-6">Ronnie Hamil</h3>
                 
                           <p className="text-yellow-400 mt-1">★★★★★</p>
                           </div>
                           </div>
                           <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                            I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
                           </p>
                         </div>
         <div
           className="
             absolute top-[80px] left-[850px]
             w-[340px] h-[400px]
             bg-cover bg-center bg-no-repeat
           " style={{ backgroundImage: `url(${rectangle})` }}
         >
         
             <img
                 className="absolute -top-16 left-1/2 -translate-x-1/2 w-[260px] h-[260px]"
                 src={heroPlant}
                 alt="plant"
             />
             <div className="absolute bottom-10 left-8">
                 <p className="text-gray-300 text-sm">Indoor Plant</p>
                  <div className="flex items-center gap-24">
                 <h2 className="text-2xl text-gray-300 font-inter mt-1">
                     Aglaonema <span className="font-regular">plant</span>
                 </h2>
                 <img src={ra} alt="rating" className="w-3 h-3 mt-2" />
               </div>
                 <button className="mt-5 px-6 py-2 text-gray-300 border border-white rounded-xl">
                     Buy Now
                 </button>
             </div>
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-white/40"></div>
                 <div className="w-5 h-2 rounded-full bg-white"></div>
                 <div className="w-2 h-2 rounded-full bg-white/40"></div>
             </div>
         </div>
         </section>
    );

}
