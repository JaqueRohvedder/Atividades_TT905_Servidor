const express = require("express");
const app = express();
app.use(express.json());

var cors = require('cors');
app.use(cors());


app.listen(process.env.PORT || 3000);

app.get('/', 
    function (req, res){    
        res.send("Hello World");
    }
);

app.get('/hello',
function (req, res){    
    res.send("Hello de Novo");
    }
)

/*const gameslib = [
    "Elziele da Rocha", "Lucas Canova dos Santos", 0 
];*/

gameslib = {"Nome":"Fallout","Gênero":"RPG","Produtora":"Bethesda"},
{"Nome":"Minecraft","Gênero":"Survival","Produtora":"Mojang"};

app.get('/gameslib',
    function(req, res){
        // res.send(gameslib);
        res.send(gameslib.filter(Boolean));
    }
);

/*app.get('/gameslib/:id',
    function(req, res){
        const id = req.params.id - 1;
        const mensagem = gameslib[id];

        if (!mensagem){
            res.send("Mensagem não encontrada");
        } else {
            res.send(mensagem);
        }
    }
)

app.post('/gameslib', 
    (req, res) => {
        console.log(req.body.mensagem);
        const mensagem = req.body.mensagem;
        gameslib.push(mensagem);
        res.send("criar uma mensagem.")
    }
);

app.put('/gameslib/:id',
    (req, res) => {
        const id = req.params.id - 1;
        const mensagem = req.body.mensagem;
        gameslib[id] = mensagem;        
        res.send("Mensagem atualizada com sucesso.")
    }
)

app.delete('/gameslib/:id', 
    (req, res) => {
        const id = req.params.id - 1;
        delete gameslib[id];

        res.send("Mensagem removida com sucesso");
    }
);*/