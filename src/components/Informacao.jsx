import React from "react";
import "../styles/componets/Informacao.css";
import MaisSobre from "./MaisSobre.jsx";

const Informacao = ({ titulo, descricao, autor, contato }) => {
  return (
    <section>
      <div>
        <h1>{titulo}</h1>
        <p>
          {autor} |{" "}
          <a href="" type="email">
            {contato}
          </a>
        </p>
        <p>{descricao}</p>
      </div>
      <MaisSobre autor={autor} />
    </section>
  );
};

export default Informacao;
