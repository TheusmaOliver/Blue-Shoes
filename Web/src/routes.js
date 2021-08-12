import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importar as páginas
import PagesShoesForm from './pages/Cadastro';
import Main from './pages/Main';
import Feminino from './pages/Feminino';
import Masculino from './pages/Masculino';
import Infantil from './pages/Infantil';


//Criar o componentes com as rotas
function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/cadastro" component={PagesShoesForm} />
                <Route path="/edit/:id" component={PagesShoesForm} />
                <Route path="/feminino" component={Feminino} />
                <Route path="/masculino" component={Masculino} />
                <Route path="/infantil" component={Infantil} />
                
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;