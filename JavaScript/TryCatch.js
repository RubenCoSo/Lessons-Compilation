function powerOf3(num) {
  //Provoca un error cambiando el nombre esta variable
  //Asi se ejecutara el catch!
  return num ** 3;
}

try {
  //Tambien puedes provocar el error aqui
  powerOf3(9);
} catch (error) {
  //El catch recibe automaticamente un parametro que es el error que ha provocado que se le llame
  // console.log("Gets executed if there's an error.");
  // console.log(error);
} finally {
  // console.log('Gets executed at the end no matter what.');
}

//LANZAMIENTO PERSONALIZADO DE ERRORES
function getUserName(user) {
  if (!user.name) {
    //''  === false  Y 'xxx' === true
    //Creamos un error nuevo (SALE de la funcion)
    throw new SyntaxError("Incomplete data: no name");
  }
  return user.name;
}

try {
  //Si ponemos un name = '' O no ponemos nombre, va a saltar el catch
  getUserName({ name: "", lastName: "Lopez" });
} catch (error) {
  console.log("Gets executed if there's an error.");
  console.log(error);
} finally {
  console.log("Gets executed at the end no matter what.");
}
