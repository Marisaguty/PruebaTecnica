export class MainPage{
    navegarPaginaPrincipal(){
        cy.visit('https://www.safeguru.com')
    }
    clickarCampoBusqueda(){
        cy.get('.sc-eVZGIO > button').click()
    }
    escribirBusqueda(text){
        cy.get('.sc-gBInCZ > .sc-bTTELM > .sc-jTjUTQ').type(text + {enter})
        
    }
    comprobarResultado(text){
        cy.get('.text-wrapper').contains(text)
    }
    
}