import React from "react";
import "../styles/componets/PopupComponent.css";

const PopupComponent = () => {
  const x = -15.793889;
  const y = -47.882778;

  return (
    <div className="popup">
      <div className="popup-coordenates">
        <p>Latitude: {x}</p>
        <p>Longitude: {y}</p>
      </div>
      <div className="popup-image">
        <img src="src\assets\imagem1.jpg" alt="" />
      </div>
      {/* criar imagens em assests e referenciar aqui*/}

      <div className="popup-information">
        <h1>Titulo</h1>
        <p>Nome do autor</p>
      </div>
    </div>
  );
};

export default PopupComponent;
