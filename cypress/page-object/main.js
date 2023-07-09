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
    comprobarResultadoBusqueda(text){
        cy.get('article[id="calzado-de-seguridad-toworkfor-urban-s3-src-esd"]').contains(text)
    }
    seleccionarProducto(){
        cy.get('article[id="calzado-de-seguridad-toworkfor-brake"]').click();
    }
    abrirDesplegableTallaZapato(number){
        cy.get('.sc-kLKKgF').click()
        cy.get('input-product-id-unit-42')
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
    clickCuentaLogado(){
        cy.get('.nav-links > :nth-child(3) > button').click()
    }
   
   /*  cerrarSesion(text){
        cy.get('.nav-links > :nth-child(3) > button').click()
        cy.get('.sc-a65312e0-2 > .sc-a65312e0-0 > .sidebar > .options-menu > :nth-child(5) > .option-menu').contains(text).click()
    } */ /* no me funciona */
    /* añadirTelefono(number){
        cy.get('.nav-links > :nth-child(3) > button').click()
        cy.get(':nth-child(3) > .sc-jTjUTQ').type(number)
    } */ /* no me  funciona */
    

    /* Catalogo */

   /*  catalogoPaso1(){
        cy.get(':nth-child(1) > .sc-29e58602-2 > .arrow-open').click();
        //cy.get('.active > [data-projection-id="2"]').click() 
        
    } */
}