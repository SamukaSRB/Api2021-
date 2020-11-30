const express = require('express');
const cors= require('cors');
const bodyParser=require('body-parser');
const models = require('../models');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));

let produto = models.Produto;


//Rotas teste
app.get('/',(req, res)=>{
    res.send('Sistema de rotas funcionando')
});
//Rota cadastrar categoria
app.get('/create',async(req,res)=>{
    let create=await categoria.create({
   catNome:req.body.catNome,
   createdAt:new Date(),
   createAt:new Date(),
    });
    res.send('CATEGORIA CRIADA COM SUCESSO');
});


//Rota listar produtos  status funcionando nao mexer
app.index("/read",async (req, res) => {
let read = await produto.findAll()
   .then((produto) => {
    return res.json(produto);
   });   
     
   
});
app.get("/head",async (req, res) => {
    let read = await categoria.findAll()
       .then((categoria) => {
        return res.json(categoria);
       }); 
       res.send('Detalhes das categorias');
    });




