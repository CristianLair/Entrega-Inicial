const mongoose = require('mongoose');

const Usuario = mongoose.model('Usuario', {
    name: {
        type: String,
        required: true        
        },

    
    password: {
        type: String,
        required: true
    },
    
});

module.exports = Usuario;