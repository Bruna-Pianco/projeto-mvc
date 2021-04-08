//npm install express sequelize mysql2 body-parser cors --save 
//npm init -y


const express = require('express');
const db= require("./models")
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

db.sequelize.sync();



app.get('/',(req, res) => {
    res.json ({message: 'Say Hello To My little friend'})
});


const PORT = process.env.PORT || 8080;  // varial de ambiente
app.listen(PORT,() => {
    console.log(`Server funcionando na porta ${PORT}`)
});
