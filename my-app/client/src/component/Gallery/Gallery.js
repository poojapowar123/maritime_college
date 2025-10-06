import React, { useEffect, useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/photos")
      .then(res => res.json())
      .then(data => setPhotos(data))
      .catch(err => console.error("Error fetching photos:", err));
  }, []);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">📸 Photo Gallery</h1>
      <div className="gallery-grid">
        {photos.map(photo => (
          <div key={photo._id} className="gallery-card">
            <img src={photo.url} alt={photo.title} className="gallery-img" />
            <p className="gallery-caption">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
