import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { Link } from "react-router-dom";
import Header from '../Header';
import './Infantil.css'

function Infantil({ calcados }){
    return(
        <div>
            <Header/>
            <ul>
                {calcados.filter((calcado)=>calcado.modelo === 'Infantil') 
                    .map((calcado,index)=>(
                        <li key = {index}>
                            <div className="item">
                                <img src={calcado.imagemUrl} className={calcado.class} alt={calcado.nome}/>
                                <div className='botoes'>
                                    <Button variant="contained" color="primary">
                                    Comprar
                                    </Button>
                                <div className="acoes">
                                    <Link to="/cadastro"> <button className='botaoIcon'><BorderColorIcon className='icon' id='edit' /></button> </Link>
                                    <button className='botaoIcon' ><DeleteIcon className='icon' id='delete' /></button>
                                </div>
                                </div>
                            </div>

                            <div className='info'>
                                <h3>{calcado.nome}</h3>
                                <span>R${calcado.preco}</span>
                            </div>
                        </li>
                    ))}
            </ul>
            
        </div>

    );
};

export default Infantil;