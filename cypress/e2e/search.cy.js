/// <reference types="cypress" />
import { MainPage } from "../page-object/main"


describe('Test de busqueda', () => {
    const mainPage = new MainPage()
    beforeEach(() => {
        mainPage.navegarPaginaPrincipal()
     
    })     
    it('Busqueda simple'), () => {
        mainPage.clickarCampoBusqueda()
    }
    
  })