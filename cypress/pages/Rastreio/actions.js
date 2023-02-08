const el = require ('./elements').ELEMENTS;
const login = require('../../data/login.data.json');

class Rastreio {

    

    realizarRastreio (tipoRastreio) {
        
        var dados = login.filter(a=>a.scenario == tipoRastreio);
        var dado = dados[0];


    
        if(tipoRastreio.includes("INVALIDO")){


            cy.xpath(el.blank).invoke('removeAttr', 'target');
            cy.get(el.buscaRastreio).type(dado.data.rastreioInvalido).type('{enter}');
           // cy.xpath(el.txtErro).should('have.text',dado.data.msgErro);
            
        
        }else{
            
        
            
        }


        


    }


    


}

export default new Rastreio();