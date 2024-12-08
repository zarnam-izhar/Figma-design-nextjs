

import PropTypes from "prop-types";

const FurnitureGallery = ({  }) => {
  return (
    <section className="py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-lg font-bold text-gray-500 uppercase tracking-wide">
          Share your setup with
        </h2>
        <h3 className="text-3xl font-extrabold text-gray-800">
          #FuniroFurniture
        </h3>
      </div>

      {/* Image Section */}
      <div
        id="furniture"
        className="relative h-96 sm:h-[500px] md:h-[600px] rounded-lg overflow-hidden  bg-white bg-cover bg-center"
        style={{
            backgroundImage: "url('/tough.jpg')",
        }}
        
        aria-label="Furniture Showcase"
      >
       
      </div>
    </section>
  );
};


FurnitureGallery.propTypes = {
  backgroundImage: PropTypes.string, 
};


FurnitureGallery.defaultProps = {
  backgroundImage: "/tough.jpg", 
};

export default FurnitureGallery;