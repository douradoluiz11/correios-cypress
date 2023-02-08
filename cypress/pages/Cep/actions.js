
const el = require ('./elements').ELEMENTS;
const login = require('../../data/login.data.json');

class Login {

    

    realizarLogin (tipoLogin) {
        
        var dados = login.filter(a=>a.scenario == tipoLogin);
        var dado = dados[0];


    
        if(tipoLogin.includes("INVALIDO")){


            cy.xpath(el.blank).invoke('removeAttr', 'target');
            cy.get(el.buscaCep).type(dado.data.cepInvalido).type('{enter}');
            cy.xpath(el.txtErro).should('have.text',dado.data.msgErro);
            
        
        }else{
            

            cy.xpath(el.blank).invoke('removeAttr', 'target');
            cy.get(el.buscaCep).type(dado.data.cepValido).type('{enter}');
            cy.xpath(el.txtSucesso).should('contains.text',dado.data.msgSucesso);
        
            
        }


    }


}

export default new Login();