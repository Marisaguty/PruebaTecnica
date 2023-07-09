import { MainPage } from "../page-object/main";
import { RegisterPage } from "../page-object/register";
import { LoginPage } from "../page-object/login";

describe("Test register", () => {
  const mainPage = new MainPage();
  const registerPage = new RegisterPage();
  const loginPage = new LoginPage();
  beforeEach(() => {
    mainPage.navegarPaginaPrincipal();
    mainPage.aceptarCookies();
  });
  it("Crear cuenta", () => {
    mainPage.clickCuenta();
    loginPage.clickRegistrar();
    registerPage.rellenarNombre("Marisa");
    registerPage.rellenarApellido("Gutierrez");
    registerPage.rellenarEmail("example@gmail.com");
    registerPage.rellenarContraseña("12345678mg");
    registerPage.clickPoliticaPrivacidad();
    registerPage.clickContinuar();
    registerPage.comprobarMensajeBienvenida(
      "Muchas gracias, . Tu cuenta en Safeguru ha sido activada."
    );
  });
});
