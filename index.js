const express = require('express');
const cors = require('cors');

// Router de la api, se trae desde router/index.js ; alli se define de esta manera para trabajar mejor con las rutas
const routerApi = require('./routes');

// MIDDLEWARES: aca los definimos por ahora los comentamos ya que no los vamos a usar

//const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');
//const { checkApiKey } = require('./middlewares/auth.handler')


// Instancio mi app de express + defino puerto 3000 o el predeterminado por el servidor de deploy
const app = express();
const port = process.env.PORT || 9999;

// Allow json
app.use(express.json());

// Defino la whitelist externa (investigar funcionamiento)
/* const whitelist = ['http://localhost:8080', 'https://myapp.co','http://localhost:5500'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options)); */

app.use(cors());

//require('./utils/auth');


// Rutas de prueba
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

/* app.get('/nueva-ruta', 
  checkApiKey, 
  (req, res) => {
  res.send('Hola, soy una nueva ruta');
}); */

// Necesito pasarle mi instancia de aplicacion express (esto para poder ir jugando con versiones de endpoints de la app etc)
routerApi(app);

// Creo que son middlewares
//app.use(logErrors);
//app.use(ormErrorHandler);
//app.use(boomErrorHandler);
//app.use(errorHandler);


app.listen(port, () => {
  console.log(`MI EXPRESS CORRIENDO EN PUERTO ${port}`);
});