const bcrypt = require('bcrypt');

async function hashPassword() {
  const myPassword = 'admin 123 .202';
  // le aplica el hash 10 veces, es una funcion asincrona que devuelve una promesa asique por eso esta en un contexto asincrono
  const hash = await bcrypt.hash(myPassword, 10);
  console.log(hash);
}

hashPassword();