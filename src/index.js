// Levantar el server con nodemon en el index, para asi poder usar la API !

require('./db/mongoose');
const express = require('express');
const app = express();
const port = 3001;
const Usuario = require('./model/registro');
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/registros', (req, res) => {
    Usuario.find()
        .then((result) => {
            res.send(result)
        })
        .catch(err => res.status(404).send(err));
})


app.post('/registrarse', (req, res) => {
    const usuario = new Usuario(req.body)
    usuario.save()
        .then(() => {
            res.status(201).send(usuario);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});


app.listen(port, () => {
    console.log(`Funcionando en http://localhost:${port}`);
});
