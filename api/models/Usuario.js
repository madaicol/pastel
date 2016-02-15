/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        nombre: {
            type: 'string',
            required: true
        },
        apellido: {
            type: "string"
        },
        edad: {
            type: 'integer'
        },
        correo: {
            type: 'string'
        },
        ciudad: {
            type: 'string'
        },
        foto: {
            type: 'string'
        },
        pasteles: {
            collection: 'pastel',
            via: 'idUsuario'
        }
    }
};