/* global Given, Then, When */
import Login from '../pages/Cep/actions';
import Home from '../pages/Home/actions';



Given(/^Eu acesso o site$/, () => {


   Home.acessarUrl();

   Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

});


And(/^busco o cep "([^"]*)"$/, (tipoLogin) => {
	
   Login.realizarLogin(tipoLogin);
  
});


