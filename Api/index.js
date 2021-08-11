//import do Express
const express = require("express");
const cors = require("cors");
const shoesRoutes = require('./routes/shoes.routes')


//import do Mongoose
const mongoose = require("mongoose");

//import do Model
const Calcado = require('./models/calcado')

//conexão com o Mongoose
mongoose.connect("mongodb://localhost:27017/calcados",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
}

const app = express()
const port = 3001

app.use(express.json());
app.use(cors(corsOptions));

// [GET] / - Home
app.get("/", (req, res) => {
    res.send("Hello, Bluemer!");
});

app.use(shoesRoutes);




app.listen(port,()=>{
    console.info(`App rodando em: http://localhost:${port}`)
})