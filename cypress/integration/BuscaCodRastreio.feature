Feature: BuscaCodrastreio
   Como desenvolvedor quero testar a busca do codigo de rastreio no site dos correios

    Scenario Outline: Busca codigo invalido <Fluxo>

        Given Eu acesso o site
        And busco o cod de rastreio "<Fluxo>"
       

    Examples:
    |  Fluxo         |
    | COD_INVALIDO   |