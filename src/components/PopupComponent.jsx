import React from "react";
import "../styles/componets/PopupComponent.css";

const PopupComponent = ({ x, y, titulo, src, alt }) => {
  return (
    <div className="popup">
      <div className="popup-coordenates">
        <p>Latitude: {x}</p>
        <p>Longitude: {y}</p>
      </div>
      <div className="popup-image">
        <img src={src} alt={alt} />
      </div>
      {/* criar imagens em assests e referenciar aqui*/}

      <div className="popup-information">
        <h1>{titulo}</h1>
      </div>
    </div>
  );
};

export default PopupComponent;
