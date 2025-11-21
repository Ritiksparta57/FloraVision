import logo from "../assets/5e88b52117aa40baa6a96e43b5c4e57858edaa47.png";
export  default function Footer() {
    return(
<footer className="px-14 py-16 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
           <div className="flex items-center gap-2">
                              <img
                                src={logo}
                                alt="logo"
                                className="w-8 h-8"
                              />
                              <h1 className="font-indie text-gray-300 font-medium text-[25px] leading-[100%] tracking-[0]"
                    >FloraVision.</h1>
                            </div>
            <p className="text-gray-300 mt-3 max-w-xs text-sm">
              From lush indoor greens to vibrant outdoor blooms, our plants are
              crafted to elevate your space.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="text-gray-300 space-y-2 text-sm underline">
              <li>Home</li>
              <li>Types of plants</li>
              <li>Contact</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">For Every Update</h3>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter Email"
                className="bg-transparent border border-white/20 px-4 py-2 rounded-lg text-sm"
              />
              <button className="px-4 py-2 bg-white text-black rounded-lg text-sm">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
  <div className="flex justify-between items-center px-14 py-4 w-full">
  <div className="flex gap-8">
    <span className="font-semibold">FB</span>
    <span className="font-semibold">TW</span>
    <span className="font-semibold">LI</span>
  </div>
  <p className="text-gray-500 text-xs">
    FloraVision © all rights reserved
  </p>

</div>
      </footer>
    );
}