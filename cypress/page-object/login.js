export class LoginPage {
  clickRegistrar() {
    cy.get(".sc-erijoS").click();
  }

  comprobarMensajeError(text) {
    cy.get(".dQMWCA > :nth-child(2)").contains(text);
  }

  rellenarLoginEmail(email) {
    cy.get(".sc-hixjlP > .iAqfve > .sc-jTjUTQ").type(email);
  }
  rellenarLoginContraseña(pass) {
    cy.get(".sc-hixjlP > .ehrPVE > .sc-jTjUTQ").type(pass);
  }
  clickIniciarSesion() {
    cy.get(".sc-hixjlP > .sc-lllmON > div").click();
  }
  clickOlvidarContraseña() {
    cy.get(".sc-eZceyY").click();
  }
  rellenarRecuperarContraseña(email) {
    cy.get(".inputContainer > .sc-bTTELM > .sc-jTjUTQ").type(email);
  }
  clickEnviarEmail() {
    cy.get(".sc-ddKZzx > .buttons > :nth-child(1)").click();
    cy.get(".sc-dYBPgv > .sc-lllmON").click();
  }
}
