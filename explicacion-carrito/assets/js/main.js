
const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'sweatshirts',
      quantity: 20
    }
  ];


const botonTheme = document.getElementById("theme-btn");
const body = document.body;

const abrirCarrito = document.getElementById('cart-btn');

const cerrarCarrito = document.getElementById('close-cart');

const contenedorCarrito = document.getElementById('cart-container');

const contenedorMenu = document.getElementById('menu-container');

const abrirMenu = document.getElementById('menu-btn');

const cerrarMenu = document.getElementById('close-menu');

const contadorCompras = document.getElementById('cart-counter')


/*Para agregar o quitar la clase modoOscuro */

const elegirModo = () => {
    body.classList.toggle( "modoOscuro" );

   if( botonTheme.classList.contains('bx-sun') ){
        botonTheme.classList.replace('bx-sun', 'bx-moon');
   }else{
    botonTheme.classList.replace('bx-moon', 'bx-sun'); 
   }
}

/*Disparo el evento para cambiar el modo del tema */

botonTheme.addEventListener( "click", event => {
    elegirModo();
     
});

abrirCarrito.addEventListener('click', e => {
    contenedorCarrito.classList.remove('oculto');
});

cerrarCarrito.addEventListener('click', e => {
    contenedorCarrito.classList.add('oculto');
});

abrirMenu.addEventListener('click', e => {
    contenedorMenu.classList.remove('oculto');
    
});

cerrarMenu.addEventListener('click', e => {
    contenedorMenu.classList.add('oculto');
});

const cartProducts = [];

function addProduct( itemId ){
    
    let selectProduct = cartProducts.find(product => product.id === itemId);

    if (selectProduct){
        let index = cartProducts.indexOf(selectProduct);

        cartProducts[index].quantitySelected++;

    }else{

        const item = items.find( item => item.id === itemId)
        item.quantitySelected = 1;
        cartProducts.push( item );
    }
    console.log(cartProducts);     
}

function mostrarProductos (){
    let content = document.getElementById('contenido-carro');

    cartProducts.forEach(items => {
        content.innerHTML += `${items.price}`
    })
}

mostrarProductos();


