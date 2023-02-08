
Feature: BuscaCep
   Como desenvolvedor quero testar a busca do CEP no site dos correios

    Scenario Outline: Busca cep valido <Fluxo>

        Given Eu acesso o site
        And busco o cep "<Fluxo>"
       

    Examples:
    |  Fluxo         |
    | CEP_VALIDO     |



    Scenario Outline: Busca cep invalido <Fluxo>

        Given Eu acesso o site
        And busco o cep "<Fluxo>"
    

    Examples:
    |  Fluxo         | 
    | CEP_INVALIDO   | 


    
    


    
