//Todos los requires
const express = require('express');
const app = express();
const path = require('path'); // Este modulo me va a permitir escribir rutas de manera correcta sin la necesidad de concatenar...
const productsRouter = require('./src/routes/products');
const usersRouter = require('./src/routes/users')
const methodOverride = require('method-override');
const mainRouter = require('./src/routes/index')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const remembermeController = require('./src/controllers/remembermeController')

// Esta linea aclara que vamos a disponibilizar una carpeta para que sea pública para que el navegador pueda acceder...
app.use(express.static( path.join(__dirname, './public') ) )
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Method-Override para metodos PUT Y DELETE
app.use(methodOverride('_method'));

/*---------------------------------------------------------------------------------- */
/* SESSION */
app.use(session({secret: "Esta es la clave secreta"}))
app.use(remembermeController.session)

//COOKIES
app.use(cookieParser())
app.use(remembermeController.cookie)
 

/* HOME */
app.get('/', mainRouter)

/* USUARIOS */

app.use('/users', usersRouter);

/* PRODUCTS */
app.use('/products',productsRouter);


/* Esto se agrega para cuando trabajamos con metodos http*/

app.use(express.urlencoded({extended: false}));
app.use(express.json())
/*---------------------------------------------------------------------------------- */



/*Inicializar puerto de escucha del servidor*/
app.listen(process.env.PORT || 5000, function() {
  console.log(`Servidor corriendo en el puerto 5000`);
  console.log(`http://localhost:5000`);
})

/*EJS*/
app.set('view engine', 'ejs');
/*---------------------------------------------------------------------------------- */
