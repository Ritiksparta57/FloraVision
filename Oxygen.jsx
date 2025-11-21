import heroPlant from "../assets/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6.png";
export default function Oxygen() {  
    return(
  <section className="px-14 py-10">
        <h2 className="text-3xl font-semibold text-center mb-14">
          Our Best O₂
        </h2>
        <div className="mb-12 bg-white/5 backdrop-blur-xl p-10 rounded-3xl flex items-center justify-between">
        <div className="flex items-center gap-10">
          <img
            src={heroPlant}
            alt="o2-plant"
            className="w-[340px] rounded-3xl"
          />

          <div className="max-w-lg">
            <h3 className="text-2xl text-gray-300  font-semibold">We Have Small And Best O2 Plants Collection’s</h3>

            <p className="text-gray-300 mt-4">
              Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
            </p>
              <p className="text-gray-300 mt-4">
                         Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
            </p>

            <div className="flex gap-80 items-center">
                       <button className="mt-4 px-6 py-3 border-1 border-gray-300 text-gray-300 font-regular rounded-xl">
                         Explore
                       </button>
                       <p className="text-gray-300">&lt; 01 / 04 &gt;</p>
                       </div>
          </div>
        </div>
        </div>
      </section>
    );
}