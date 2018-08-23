// const fs = require('fs');
const argv = require('yargs').
    command("listar", "tabla de multiplicar", {
        base: { demand: true, alias: 'b' }

    }).
    // help().
    argv;
const { crearArchivo, listarTabla } = require('./funcion/multiplicar');
// let numero=4;
// let data='';

// for(let x=0;x<11;x++){

//     console.log(`${numero} * ${x} = ${numero*x}`);
//     data+=`${numero} * ${x} = ${numero*x} \n`
// }

// fs.writeFile(`tablas/tabla-${numero}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${numero}.txt se guardo correctamente`);
//   });

// crearArchivo("8").then(archivo=>
//     console.log(`El archivo ${archivo} se guardo correctamente`)
// ).catch(err=>console.log(err))

console.log(argv);
// console.log(process.argv);

switch (argv._[0]) {
    case 'listar':
        // console.log(argv.base,argv.limite);
        //  listarTabla(argv.base,argv.limite);
        console.log('listar');
        break;
    case 'crear':
        // console.log(argv.base,argv.limite);
        // crearArchivo(argv.base,argv.limite);
        console.log('crear');
        break;
    default:
        console.log("comando no conocido", argv._[0]);

}