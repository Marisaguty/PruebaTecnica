export class MainPage{
    aceptarCookies(){
        cy.get('.cf3Tgk > .cf2L3T > .cf2Lf6 > .cf1y60').click()
    }
    navegarPaginaPrincipal(){
        cy.visit('https://www.safeguru.com')
    }

    /* Busquedas */
    clickarCampoBusqueda(){
        cy.get('.sc-eVZGIO > button').click()
    }
    escribirBusqueda(text){
        cy.get('.sc-gBInCZ > .sc-bTTELM > .sc-jTjUTQ').type(text).type("{enter}")
        
    }

    /* Login */
    clickCuenta(){
        cy.get('.nav-links > :nth-child(3) > a').click()
        
    }
    clickCuentaLogado(){
        cy.get('.nav-links > :nth-child(3) > button').click()
    }

 
   

}