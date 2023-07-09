export class MainPage{
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
    comprobarResultadoBusqueda(text){
        cy.wait(10000)  /* no me sale */
        cy.get('[data-projection-id="120"] > a > .link-wrapper > .text-wrapper').contains(text)
    }
    seleccionarProducto(){
        cy.get('article[id="calzado-de-seguridad-toworkfor-brake"]').click();
    }
    abrirDesplegableTallaZapato(number){
        cy.get('.sc-kLKKgF').click()
        cy.get('.sc-eYGnOm > :nth-child(5)').contains(number).click()
        cy.get('button[name="Add unit"]').click() /* no funciona */
        
    }
    tramitarPedido(email, pass){
        cy.get('button.btn--add-to-bag').click()
        cy.get('.bag-Holder > button').click() /* ir a la cesta */
        cy.get('.sc-fLcnxK').click()    /* boton tramitar compra */
        cy.get('.sc-jNVCqq > .sc-bTTELM > .sc-jTjUTQ').type(email)
        cy.get('.sc-jNVCqq > .sc-bTTELM > .sc-jTjUTQ').type(pass)
        cy.get('.sc-jNVCqq > .sc-bTTELM > .input-pws-btn').click() /* ver contraseña oculta */
          cy.get('#step-1-login-button').click() /* iniciar sesion */
          cy.get('.user-header > p').click()   /* cerrar sesion */
    }
    
    /* Login */
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
    /* Catalogo */

   /*  catalogoPaso1(){
        cy.get(':nth-child(1) > .sc-29e58602-2 > .arrow-open').click();
        //cy.get('.active > [data-projection-id="2"]').click() 
        
    } */
}