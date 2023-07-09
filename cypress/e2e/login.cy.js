import { MainPage } from "../page-object/main"
import { LoginPage } from "../page-object/login";
import {AccountPage} from "../page-object/account"

describe('Test login', () => {
  const mainPage = new MainPage();
  const loginPage = new LoginPage();
  const accountPage = new AccountPage();
  beforeEach(()=>{
    mainPage.navegarPaginaPrincipal()
    mainPage.aceptarCookies()
    mainPage.clickCuenta()
  })
  
  it('Login correcto', () =>{
   
    loginPage.rellenarLoginEmail('mgutyper@gmail.com')
    loginPage.rellenarLoginContraseña('12345678mg')
    loginPage.clickIniciarSesion()
    mainPage.clickCuentaLogado()
    accountPage.comprobarMiCuenta('Mis datos')

 
  })

  it('Login contraseña incorrecta', ()=>{
  
    loginPage.rellenarLoginEmail('mgutyper@gmail.com')
    loginPage.rellenarLoginContraseña('jdahdadiahd')
    loginPage.clickIniciarSesion()
    loginPage.comprobarMensajeError("Ha introducido una contraseña o dirección de correo incorrecta")

  })

  it('Login email incorrecto', ()=>{
   
    loginPage.rellenarLoginEmail('mgutgfper@gmail.com')
    loginPage.rellenarLoginContraseña('12345678mg')
    loginPage.clickIniciarSesion()
    loginPage.comprobarMensajeError("Ha introducido una contraseña o dirección de correo incorrecta")
   
  })

  it('Cambiar contraseña', ()=>{
    loginPage.clickOlvidarContraseña()
    loginPage.rellenarRecuperarContraseña('mgutyper@gmail.com')
    loginPage.clickEnviarEmail()
  })
  
})