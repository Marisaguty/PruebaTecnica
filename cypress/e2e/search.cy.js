import { MainPage } from "../page-object/main";

describe('Test login', () => {
    const mainPage = new MainPage();
    beforeEach(()=>{
      mainPage.navegarPaginaPrincipal()
    })
   
    it('Busqueda Simple', ()=>{
        mainPage.clickarCampoBusqueda()
        mainPage.escribirBusqueda('calzado')
        /* mainPage.comprobarResultadoBusqueda('calzado') */

    })

    it('Añadir producto al carrito', ()=>{
        mainPage.seleccionarProducto()
        mainPage.abrirDesplegableTallaZapato(42)
        mainPage.tramitarPedido("mgutyper@gmail.com", "12345678mg")
    })
    
  })