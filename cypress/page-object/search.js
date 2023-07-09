export class SearchPage{
    comprobarResultadoBusqueda(text){
        cy.get('h1').contains(text)
    }
}