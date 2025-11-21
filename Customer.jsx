import carol from "/04f4a376d1869488dd43f1a5e57a36f5cdf73be4.png";
import lula from "/8af347a65acb49fcb29cfac2ba705f2b27151f3f.jpg";
import shelly from "/a5003c9c04bdc265d997eb88ecb49b2ed88c8428.png";

export default function Customer() {
    return(
     <section className="w-full py-20 bg-[#0f1b12] text-white">
     <h2 className="text-3xl font-semibold text-center mb-12">
          Customer Review
        </h2>
      <div className="flex justify-center gap-10 flex-wrap">
        <div className="relative w-[350px] bg-white/5 backdrop-blur-md border border-white/10 rounded-[35px] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <img
            src={shelly}
            alt="avatar"
            className="w-12 h-12 rounded-full absolute -top-6 left-6 border-2 border-white"
          />
          
          <h3 className="text-xl font-semibold mt-6">Shelly Russel</h3>

          <p className="text-yellow-400 mt-1">★★★★★</p>

          <p className="text-gray-300 mt-4 text-sm leading-relaxed">
            Just got my hands on some absolutely awesome plants, and I couldn’t
            be happier!
          </p>
        </div>
        <div className="relative w-[350px] bg-white/5 backdrop-blur-md border border-white/10 rounded-[35px] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          
          <img
            src={lula}
            alt="avatar"
            className="w-12 h-12 rounded-full absolute -top-6 left-6 border-2 border-white"
          />

          <h3 className="text-xl font-semibold mt-6">Lula Rolfson</h3>

          <p className="text-yellow-400 mt-1">★★★★★</p>

          <p className="text-gray-300 mt-4 text-sm leading-relaxed">
            Each one has its own unique charm and personality, and they’ve
            already started brightening my space. The vibrant colors and fresh
            greenery make such a huge difference in my home.
          </p>
        </div>

        <div className="relative w-[350px] bg-white/5 backdrop-blur-md border border-white/10 rounded-[35px] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          
          <img
            src={carol}
            alt="avatar"
            className="w-12 h-12 rounded-full absolute -top-6 left-6 border-2 border-white"
          />

          <h3 className="text-xl font-semibold mt-6">Carol Huels</h3>

          <p className="text-yellow-400 mt-1">★★★★★</p>

          <p className="text-gray-300 mt-4 text-sm leading-relaxed">
            It’s like bringing a little piece of nature indoors. Definitely
            worth the investment—my plant collection has never looked better!
          </p>
        </div>

      </div>
    </section>
    );

}
