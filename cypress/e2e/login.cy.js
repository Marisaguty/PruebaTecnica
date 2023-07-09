import { MainPage } from "../page-object/main"

describe('Test login', () => {
  const mainPage = new MainPage();
  beforeEach(()=>{
    mainPage.navegarPaginaPrincipal()
  })
  /* it('Crear cuenta', () => {
    mainPage.clickCuenta()
    mainPage.clickRegistrar()
    mainPage.rellenarNombre('Marisa')
    mainPage.rellenarApellido('Gutierrez')
    mainPage.rellenarEmail('mgutyper@gmail.com')
    mainPage.rellenarContraseña('12345678mg')
    mainPage.clickPoliticaPrivacidad()
    mainPage.clickContinuar()
  }) */
  /* it('Login correcto y añadir telefono', () =>{
    mainPage.clickCuenta()
    mainPage.rellenarLoginEmail('mgutyper@gmail.com')
    mainPage.rellenarContraseña('12345678mg')
    mainPage.clickIniciarSesion()
    // mainPage.cerrarSesion('Cerrar sesión') 
    // mainPage.añadirTelefono('666666666') 
  }) */

  it('Login contraseña incorrecta y cambiar contraseña', ()=>{
    mainPage.clickCuenta()
    mainPage.rellenarLoginEmail('mgutyper@gmail.com')
    mainPage.rellenarLoginContraseñaIncorrecta('jdahdadiahd')
    mainPage.clickIniciarSesion()
    mainPage.clickOlvidarContraseña()
    mainPage.rellenarRecuperarContraseña('mgutyper@gmail.com')
    mainPage.clickEnviarEmail()
  })

  
  
})