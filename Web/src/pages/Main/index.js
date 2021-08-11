import React, { useEffect, useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import Header from "../Header";
import "./Main.css";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:3001";

export default function Main() {
  const [shoes, setShoes] = useState([]);
  // const [nameShoes, setNameShoes] = useState("");
  // const [imageUrlShoes, setImageUrlShoes] = useState("");
  // const [editing, setEditing] = useState(false);
  // const [editingId, setEditingId] = useState(null);

  const loadShoes = async () => {
    const response = await fetch(`${BASE_URL}/shoes`);
    const data = await response.json();

    setShoes(data);
  };

  useEffect(() => {
    loadShoes();
  }, []);

  // useEffect(() => {
  //   if (editingId !== null && editing) {
  //     const shoe = shoes.find((s) => s._id === editingId);
  //     setNameShoes(shoe.name);
  //     setImageUrlShoes(shoe.imageUrl);
  //   }
  // }, [editingId,editing,shoes]);

  // const onSubmit = async (event)=>{
  //   event.preventDefault();

  //   if(editing){
  //     await fetch(`${BASE_URL}/shoes/${editingId}`,{
  //       method: "PUT",
  //       headers: {'Content-Type':'application/json'},
  //       body: JSON.stringify({
  //         name: nameShoes,
  //         imageUrl: imageUrlShoes
  //       })
  //     });
  //     setEditing(false);
  //     setEditingId(null);
  //   } else{
  //     await fetch(`${BASE_URL}/shoes`,{
  //       method: "POST",
  //       headers: {'Content-Type':'application/json'},
  //       body: JSON.stringify({
  //         name:nameShoes,
  //         imageUrl: imageUrlShoes
  //       })
  //     });
  //   }

  //   loadShoes();
  //   setNameShoes("");
  //   setImageUrlShoes("");
  // }

  const exclude = async (id) =>{
    await fetch(`${BASE_URL}/shoes/${id}`,{
      method: "DELETE",
    });
    loadShoes();
  };

  return (
    <div className="container">
      <Header />
      
      <main className="main">
        <ul>
          {shoes.map((calcado, index) => (
            <li key={index}>
              <div className="imagem">
                <img src={calcado.imageUrl} alt={calcado.name} />
                <div className="botoes">
                  <Button variant="contained" color="primary">
                    Comprar
                  </Button>
                  <div className="acoes">

                    <Link
                      to={`/edit/${calcado._id}`}
                      className="botaoIcon"
                    >
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
                <span>R${calcado.preco}</span>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
