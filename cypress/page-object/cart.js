export class CartPage{
    comprobarProductos(text){
        cy.get('h1').contains(text)
    }
}