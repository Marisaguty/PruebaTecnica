export class Products {
  seleccionarProducto() {
    cy.get('[data-projection-id="124"] > a > .link-wrapper').click();
  }
  clickAñadir() {
    cy.get("button.btn--add-to-bag").click();
  }
  clickAñadir2() {
    cy.get('figure[class="desktop-only"]').click({
      multiple: true,
      force: true,
    });
  }
  añadirCantidad() {
    cy.get('[name="Add unit"]').click();
  }
  clickCesta() {
    cy.get(".bag-Holder > button").click();
  }
}
