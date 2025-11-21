import bg1 from "/b48312dbddc890f7f35ef3964ae1e7900b89782c.png";
import bg2 from "/95e728282f4fb901ee2edc80783c2fbd7df490c2.png";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
export default function Trending() {
    return(
 <section className="relative px-14 py-20">
        <h2 className="text-center text-3xl font-semibold text-white mb-10">
          Our Trendy plants
        </h2>

        <div className="mb-12 h-80 bg-white/5 backdrop-blur-xl p-10 rounded-tl-4xl rounded-tr-4xl rounded-bl-4xl rounded-br-4xl flex items-center justify-between">
          <img
            src={bg1}
            alt="trendy-plant"
            className="w-90 h-90 top-[500px] left-0"
          />

          <div className="max-w-md">
            <h3 className="text-xl font-semibold text-white">
              For Your Desks Decorations
            </h3>
            <p className="text-gray-300 mt-2">
            I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
            </p>

            <p className="text-xl font-semibold mt-5">Rs. 599/-</p>
            <div className="flex gap-6">
            <button className="mt-4 px-6 py-3 border-2 border-gray-300 text-white font-medium rounded-xl">
              Explore
            </button>
            <button className="mt-4 px-4 py-3 border-2 border-gray-300 text-white font-medium rounded-xl">
               <FiShoppingBag className="cursor-pointer" />
            </button>
            </div>
          </div>
        </div>
         <div className="h-80 bg-white/5 mb-12 backdrop-blur-xl p-10 rounded-tl-4xl rounded-tr-4xl rounded-bl-4xl rounded-br-4xl flex items-center justify-between">
          <div className="max-w-md">
            <h3 className="text-xl font-semibold text-white">
              For Your Desks Decorations
            </h3>
            <p className="text-gray-300 mt-2">
              This greenery adds a touch of nature and serenity to my desk,
              making it feel more inviting and calming.
            </p>

            <p className="text-xl font-semibold mt-5">Rs. 399/-</p>
 <div className="flex gap-6">
            <button className="mt-4 px-6 py-3 border-2 border-gray-300 text-white font-regular rounded-xl">
              Explore
            </button>
            <button className="mt-4 px-4 py-3 border-2 border-gray-300 text-white font-regular rounded-xl">
               <FiShoppingBag className="cursor-pointer" />
            </button>
            </div>
          </div>
           <img
            src={bg2}
            alt="trendy-plant"
            className="w-90 h-90  "
          />
        </div>
      </section>
    );

}
