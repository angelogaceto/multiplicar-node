const fs = require('fs');

// let numero = 4;

let listarTabla=(base,limite)=>{
     
    for (let index = 0; index <= limite; index++) {
      console.log(`${base} * ${index} = ${base*index}`);
        
    }

}

let crearArchivo = (numero,limite) => {
    return new Promise((resolve, reject) => {

        let data = '';
        if (!Number(numero)) {

            return reject("ingrese números");
        }
        for (let x = 0; x <= limite; x++) {

            // console.log(`${numero} * ${x} = ${numero * x}`);
            data += `${numero} * ${x} = ${numero * x} \n`
        }

        fs.writeFile(`tablas/tabla-${numero}.txt`, data, (err) => {
            if (err) throw reject(err);
            else
                resolve(`tabla-${numero}.txt`);
            // console.log(`El archivo tabla-${numero}.txt se guardo correctamente`);
        });

    })


}

module.exports = {
    crearArchivo,
    listarTabla

}

