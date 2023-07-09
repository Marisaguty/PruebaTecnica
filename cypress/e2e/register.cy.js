import { MainPage } from "../page-object/main"

describe('Test login', () => {
  const mainPage = new MainPage();
  beforeEach(()=>{
    mainPage.navegarPaginaPrincipal()
    mainPage.aceptarCookies()
  })
  it('Crear cuenta', () => {
    mainPage.clickCuenta()
    mainPage.clickRegistrar()
    mainPage.rellenarNombre('Marisa')
    mainPage.rellenarApellido('Gutierrez')
    mainPage.rellenarEmail('mgutyper@gmail.com')
    mainPage.rellenarContraseña('12345678mg')
    mainPage.clickPoliticaPrivacidad()
    mainPage.clickContinuar()
  })
  
  
})