import { MainPage } from "../page-object/main";
import { Products } from "../page-object/products";
import { CartPage } from "../page-object/cart";


describe('Añadir productos al carrito', () => {
    const mainPage = new MainPage();
    const products = new Products();
    const cartPage = new CartPage();
    
    beforeEach(()=>{
      mainPage.navegarPaginaPrincipal()
      mainPage.aceptarCookies()
    })
   
    it('Comprobar añadir al carrito', ()=>{
       mainPage.clickarCampoBusqueda()
       mainPage.escribirBusqueda("P3 Par")
       products.seleccionarProducto()
       products.clickAñadir()
       products.añadirCantidad()
       products.clickAñadir2()
       products.clickCesta()
       cartPage.comprobarProductos('Carro (1 producto)')
  
       
    })

    
    
  })