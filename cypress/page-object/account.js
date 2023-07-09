export class AccountPage {
  comprobarMiCuenta(text) {
    cy.get(
      ".sc-a65312e0-2 > .sc-a65312e0-0 > .sidebar > .options-menu > :nth-child(1) > a > .option-menu"
    ).contains(text);
  }
}
