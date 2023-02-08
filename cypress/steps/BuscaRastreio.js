/* global Given, Then, When */
import Rastreio from '../pages/Rastreio/actions';
import Home from '../pages/Home/actions';



Given(/^Eu acesso o site$/, () => {


   Home.acessarUrl();

   Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

});


And(/^busco o cod de rastreio "([^"]*)"$/, (tipoRastreio) => {
	
   Rastreio.realizarRastreio(tipoRastreio);

});