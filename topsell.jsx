 import heroPlant from "/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6.png";
import bg1 from "/b48312dbddc890f7f35ef3964ae1e7900b89782c.png";
import bg2 from "/95e728282f4fb901ee2edc80783c2fbd7df490c2.png";
import bg4 from "/5196aba58f7006d90ec0712ac1d01688cde1a537.png";
import sansa from "/eb0351a5771ed55c7f3454bcce697dfe63237769.png";
import cactus from "/6d90916507b2b3030961c99c6af0ebac97b86c78.png";
import Card from "/card.jsx";
export default function TopSell() {
    return( 
 <section className="px-14 py-20">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Our Top Selling Plants
            </h2>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              <Card
                image={heroPlant}
                title="Aglaonema plant"
                price="300"
                desc="Commonly known as Chinese Evergreen; loved for its decorative foliage and ease of care."
              />
    
              <Card
                image={bg1}
                title="Plantain Lilies"
                price="380"
                desc="Hostas are perennials grown for their lush ornamental leaves."
              />
              <Card
                image={cactus}
                title="Cactus"
                price="259"
                desc="Known for their ability to thrive in arid environments."
              />
               <Card
                image={bg4}
                title="Swiss Cheese Plant"
                price="400"
                desc="Known for their ability to thrive in arid environments."
              />
               <Card
                image={sansa}
                title="Sanseviria Plant"
                price="450"
                desc="Known for their ability to thrive in arid environments."
              />
               <Card
                image={bg2}
                title="Agave Plant"
                price="359"
                desc="Known for their ability to thrive in arid environments."
              />
            </div>
          </section>
    );

}
