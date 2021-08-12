import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./Masculino.css";

const BASE_URL = "http://localhost:3001";

function Masculino() {
  const [shoes, setShoes] = useState([]);

  const loadShoes = () => {
    axios.get(`${BASE_URL}/shoes`).then((response) => {
      setShoes(response.data);
    });
  };

  useEffect(() => loadShoes(), []);

  const exclude = (id) => {
    axios.delete(`${BASE_URL}/shoes/${id}`);
    loadShoes();
  };

  return (
    <div>
      <Header />

      <ul>
        {shoes
          .filter(
            (calcado) =>
              calcado.model.toLowerCase() === "Masculino".toLowerCase() ||
              calcado.model.toLowerCase() === "Unissex".toLowerCase()
          )
          .map((calcado, index) => (
            <li key={index}>
              <div className="item">
                <img
                  src={calcado.imageUrl}
                  className={calcado.class}
                  alt={calcado.name}
                />
                <div className="botoes">
                  <Button variant="contained" color="primary">
                    Comprar
                  </Button>
                  <div className="acoes">
                    <Link to={`/edit/${calcado._id}`} className="botaoIcon">
                      <BorderColorIcon className="icon" id="edit" />
                    </Link>
                    <button
                      className="botaoIcon"
                      onClick={() => exclude(calcado._id)}
                    >
                      <DeleteIcon className="icon" id="delete" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="info">
                <h3>{calcado.name}</h3>
                <span>R$ {calcado.price}</span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Masculino;
