export class RegisterPage {
  rellenarNombre(name) {
    cy.get(".sc-dDPqvT > :nth-child(1) > .sc-jTjUTQ").type(name);
  }
  rellenarApellido(lastName) {
    cy.get(".sc-dDPqvT > :nth-child(2) > .sc-jTjUTQ").type(lastName);
  }
  rellenarEmail(email) {
    cy.get(":nth-child(3) > .sc-jTjUTQ").type(email);
  }
  rellenarContraseña(pass) {
    cy.get(".sc-dDPqvT > .ehrPVE > .sc-jTjUTQ").type(pass);
  }
  clickPoliticaPrivacidad() {
    cy.get(".sc-cbfGDZ > .sc-GKYbw > .sc-eGugkK > .sc-csDkEv").click();
  }
  clickContinuar() {
    cy.get(".sc-dDPqvT > .sc-lllmON").click();
  }
  comprobarMensajeBienvenida(text) {
    cy.get(".sc-jlYURC").contains(text);
  }
}
