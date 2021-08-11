import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NikeZoom from './assets/img/tenis-nike-zoom-freak-3.png';
import NikeAirMax from './assets/img/tenis-nike-air-max-sphere.png';
import NikeMax from './assets/img/tenis-nike-max-90-se.png';
import NikeSpace from './assets/img/tenis-space-hippie.png';
import NikeRunner from './assets/img/tenis-nike-flex-runner.png';
import NikeMetcon from './assets/img/tenis-nike-metcon-7.png';
import NikeCourt from './assets/img/tenis-nikecourt-react-vapor-nxt.png';
import NikePico from './assets/img/tenis-nike-pico-5.png';
//Importar as páginas
import PagesShoesForm from './pages/Cadastro';
import Main from './pages/Main';
import Lancamentos from './pages/Lançamentos';
import Feminino from './pages/Feminino';
import Masculino from './pages/Masculino';
import Infantil from './pages/Infantil';


//Criar o componentes com as rotas
function Routes(){
    const calcados = [
        {
          id:1,
          nome:"Tênis Nike Zoom Freak 3 Unissex",
          imagemUrl: NikeZoom,
          modelo:'Unissex',
          preco:799.99
        },
        {
          id:2,
          nome:"Tênis Nike Air Max Sphere Masculino",
          imagemUrl: NikeAirMax,
          modelo:'Masculino',
          preco:999.99
        },
        {
          id:3,
          nome:"Tênis Nike Max 90 SE Infantil",
          imagemUrl: NikeMax,
          modelo:'Infantil',
          preco:299.99
        },
        {
          id:4,
          nome:"Tênis Nike Space Hippie 04 Feminino",
          imagemUrl: NikeSpace,
          modelo:'Feminino',
          preco:799.99
        },
        { 
          id:5,
          nome:"Tênis Nike Flex Runner Infantil",
          imagemUrl: NikeRunner,
          modelo:'Infantil',
          preco: 299.99
        },
        { 
          id:6,
          nome:"Tênis Nike Metcon 7 Feminino",
          imagemUrl: NikeMetcon,
          modelo:'Feminino',
          preco:749.99
        },
        { 
          id:7,
          nome:"Tênis NikeCourt React Vapor NXT Masculino",
          imagemUrl: NikeCourt,
          modelo:'Masculino',
          preco:"1.999.99"
        },
        { 
          id:8,
          nome:"Tênis Nike Pico 5 Infantil",
          imagemUrl: NikePico,
          modelo:'Infantil',
          preco:179.99
        }  
            
            
          
      ]
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={() => <Main calcados={calcados} />}/>
                <Route path="/cadastro" component={PagesShoesForm} />
                <Route path="/edit/:id" component={PagesShoesForm} />
                <Route path="/lancamentos" component={Lancamentos} />
                <Route path="/feminino" render={() => <Feminino calcados={calcados} />} />
                <Route path="/masculino" render={() => <Masculino calcados={calcados} />} />
                <Route path="/infantil" render={() => <Infantil calcados={calcados} />} />
                
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;