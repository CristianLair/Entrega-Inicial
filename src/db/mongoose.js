const mongoose = require('mongoose');
const uri = "mongodb+srv://cristianlair:daemla1113@cluster0.7wajw.mongodb.net/registro-usuarios?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});