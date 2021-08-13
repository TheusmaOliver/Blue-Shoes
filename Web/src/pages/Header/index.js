import React from 'react';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import './Header.css'
import Logo from '../../assets/img/logo-blue.gif'


function Header(){
    
    return(
        <div>
            <header className="header">
                <div className="header-title">
                    <Link to="/" id='titulo'>
                        <div className="header-logo">
                                <img src={Logo} alt="logo blue" id="logo"/>
                                <h1>Calçados</h1>
                        </div>
                    </Link>
                    <Link to="/cadastro" className="btn" >
                        <Button variant="contained" color="primary">
                            Cadastrar calçado
                        </Button>
                    </Link>
                </div>
                <hr/>
                    <ul>
                    <li><Link to="/feminino" className="btn">Feminino</Link></li>
                    <li><Link to="/masculino" className="btn"> Masculino</Link></li>
                    <li><Link to="/infantil" className="btn"> Infantil</Link></li>
                    </ul>
                <hr/>
          </header>
        </div>

    )
}

export default Header;