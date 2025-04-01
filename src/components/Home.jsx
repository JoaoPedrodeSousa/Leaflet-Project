import React from "react";
import MapComponent from "./MapComponent.jsx";
import Informacao from "./Informacao.jsx";

import "../styles/global.css";
import "../styles/componets/Home.css";
import "leaflet/dist/leaflet.css";

const Home = () => {
  return (
    <div className="home">
      <MapComponent />
      <div>
        <Informacao
          titulo="teste"
          descricao="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem aspernatur dolore, voluptates laboriosam commodi, fuga voluptatibus hic est eos autem quae adipisci optio. Dolor, facilis soluta? Distinctio culpa ea quisquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem aspernatur dolore, voluptates laboriosam commodi, fuga voluptatibus hic est eos autem quae adipisci optio. Dolor, facilis soluta? Distinctio culpa ea quisquam."
          autor="Fulano de tal"
          contato="fulanodetal@gmail.com"
        />
      </div>
    </div>
  );
};

export default Home;
