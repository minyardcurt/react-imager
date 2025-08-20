import { useState } from "react";
import Display from "./Display";
import Thumbnail from "./Thumbnail";
import "../App.css"; 

function Imager() {
  const images = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg",
    "images/photo7.jpg",
    "images/photo8.jpg",
    "images/photo9.jpg",
    "images/photo10.jpg",
    "images/photo11.jpg",
    "images/photo12.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const showRandom = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentIndex(randomIndex);
  };

  const goBack = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goForward = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleSelect = (img) => {
    const index = images.indexOf(img);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="imager-container">
      <div className="image-display">
        <Display img={images[currentIndex]} />
      </div>

      <div className="controls">
        <div className="left">
          <button onClick={showRandom}>Random</button>
        </div>
        <div className="right">
          <button onClick={goBack}>{"<"}</button>
          <button onClick={goForward}>{">"}</button>
        </div>
      </div>

      <div className="thumbnails">
        {images.map((img, idx) => (
          <Thumbnail
            key={idx}
            src={img}
            onSelect={handleSelect}
            isSelected={idx === currentIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default Imager;

