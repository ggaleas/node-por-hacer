const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como comnpletado o pendiente la tarea'
};


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estdo completado de uan tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tareaa', {
        descripcion
    })

.help()
    .argv;

module.exports = {
    argv
}