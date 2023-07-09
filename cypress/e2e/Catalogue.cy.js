import { MainPage } from "../page-object/main";

describe('Pasos formulario catalogo', () => {
    const mainPage = new MainPage();
    beforeEach(()=>{
      mainPage.navegarPaginaPrincipal()
    })
    
    it('Paso 1',()=>{
        mainPage.catalogoPaso1()
    })
  })