const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

// const [ , ,arg3 = 'base=5' ] = process.argv;
// const [ , base = 5] = arg3.split('=');

// console.log(process.argv);
// console.log(argv);


// const base = 7;

crearArchivo(argv.b, argv.l, argv.h)
    .then((file) => console.log(colors.rainbow(file)))
    .catch((err) => console.log(err));
