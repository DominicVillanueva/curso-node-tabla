const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let result = "";
        let consola = "";
        for (let index = 1; index <= hasta; index++) {
            result += `${base} x ${index} = ${ base * index }\n`;
            consola += `${ base } ${ 'x'.green } ${ index } ${ '='.green } ${ base * index }\n`;
        }

        if(listar) {
            console.log(colors.green('===================='));
            console.log(colors.green('  Tabla del: '), colors.blue(base));
            console.log(colors.green('===================='));
            console.log(consola);
        };

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, result);

        return `Archivo tabla-${ base }.txt creado!!`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}