export class MainPage{
    navegarPaginaPrincipal(){
        cy.visit('https://www.safeguru.com')
    }
    clickarCampoBusqueda(){
        cy.get('.sc-eVZGIO > button').click()
    }
}