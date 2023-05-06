const express = require('express');
const cors = require('cors');
const app = express();

const Home = require('./models/Home');


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

app.get('/', async(req, res) => {
    return res.json({
        erro: false,
        datahome: {
            text_one: "Talvez temos solução",
            text_two: "que a sua empresa NAO precise de nós.",
            text_three: "Podemos ajudar UMA empresa que nao deve ser a sua",
            btn_title: "Entrar em Contato ou vai estudar",
            btn_link: "http://localhost:3000/contato"
        }
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});