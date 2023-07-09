export class LoginPage{
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
    comprobarMensajeError(text){
        cy.get('.dQMWCA > :nth-child(2)').contains(text)
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
    clickOlvidarContraseña(){
        cy.get('.sc-eZceyY').click()
    }
    rellenarRecuperarContraseña(email){
        cy.get('.inputContainer > .sc-bTTELM > .sc-jTjUTQ').type(email)
    }
    clickEnviarEmail(){
        cy.get('.sc-ddKZzx > .buttons > :nth-child(1)').click()
        cy.get('.sc-dYBPgv > .sc-lllmON').click()
    }
}


