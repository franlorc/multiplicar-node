const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime por consola la tabla de multiplicar', opts)
    .command('crear', 'Crea archivo txt con tabla de multiplicar', opts)
    .argv;

module.exports = {
    argv
}