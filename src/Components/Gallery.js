import React from "react";
import "./Gallery.css";

const Gallery = ({ images }) => {
  return (
    <section id="gallery" className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Dish ${index + 1}`} className="gallery-image" />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
