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
    clickCuenta(){
        cy.get('.nav-links > :nth-child(3) > a').click()
        
    }
    clickRegistrar(){
        cy.get('.sc-erijoS').click()
    }
    rellenarNombre(name){
        cy.get('.sc-dDPqvT > :nth-child(1) > .sc-jTjUTQ').type(name)
    }
    rellenarApellido(lastName){
        cy.get('.sc-dDPqvT > :nth-child(2) > .sc-jTjUTQ').type(lastName)
    }
    rellenarEmail(email){
        cy.get(':nth-child(3) > .sc-jTjUTQ').type(email)
    }
    rellenarContraseña(pass){
        cy.get('.sc-hixjlP > .ehrPVE > .sc-jTjUTQ').type(pass)
    }
    clickPoliticaPrivacidad(){
        cy.get('.sc-cbfGDZ > .sc-GKYbw > .sc-eGugkK > .sc-csDkEv').click()
    }
    clickContinuar(){
        cy.get('.sc-dDPqvT > .sc-lllmON').click()
    }
    rellenarLoginEmail(email){
        cy.get('.sc-hixjlP > .iAqfve > .sc-jTjUTQ').type(email)
    }
    rellenarLoginContraseña(pass){
        cy.get('.sc-hixjlP > .ehrPVE > .sc-jTjUTQ').type(pass)
    }
    clickIniciarSesion(){
        cy.get('.sc-hixjlP > .sc-lllmON > div').click();
    }
   /*  cerrarSesion(text){
        cy.get('.nav-links > :nth-child(3) > button').click()
        cy.get('.sc-a65312e0-2 > .sc-a65312e0-0 > .sidebar > .options-menu > :nth-child(5) > .option-menu').contains(text).click()
    } */ /* no me funciona */
    /* añadirTelefono(number){
        cy.get('.nav-links > :nth-child(3) > button').click()
        cy.get(':nth-child(3) > .sc-jTjUTQ').type(number)
    } */ /* no me  funciona */

    rellenarLoginContraseñaIncorrecta(pass){
        cy.get('.sc-hixjlP > .ehrPVE > .sc-jTjUTQ').type(pass)
    }
    clickOlvidarContraseña(){
        cy.get(':nth-child(4) > .sc-eZceyY').click()
    }
    rellenarRecuperarContraseña(email){
        cy.get('.inputContainer > .sc-bTTELM > .sc-jTjUTQ').type(email)
    }
    clickEnviarEmail(){
        cy.get('.sc-ddKZzx > .buttons > :nth-child(1)').click()
        cy.get('.sc-dYBPgv > .sc-lllmON').click()
    }
}