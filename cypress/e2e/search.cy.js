import { MainPage } from "../page-object/main";
import { SearchPage } from "../page-object/search";

describe('Test Busqueda', () => {
    const mainPage = new MainPage();
    const searchPage = new SearchPage();
    beforeEach(()=>{
      mainPage.navegarPaginaPrincipal()
      mainPage.aceptarCookies()
    })
   
    it('Busqueda Simple', ()=>{
        mainPage.clickarCampoBusqueda()
        mainPage.escribirBusqueda('calzado')
        searchPage.comprobarResultadoBusqueda('calzado')
  

    })

    
    
  })