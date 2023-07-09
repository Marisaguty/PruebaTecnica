import { MainPage } from "../page-object/main";

describe('Test Busqueda', () => {
    const mainPage = new MainPage();
    beforeEach(()=>{
      mainPage.navegarPaginaPrincipal()
      mainPage.aceptarCookies()
    })
   
    it('Busqueda Simple', ()=>{
        mainPage.clickarCampoBusqueda()
        mainPage.escribirBusqueda('calzado')
        mainPage.comprobarResultadoBusqueda('calzado')
       /*  mainPage.seleccionarProducto()
        mainPage.abrirDesplegableTallaZapato()
        mainPage.tramitarPedido("mgutyper@gmail.com", "12345678mg") */

    })

    
    
  })