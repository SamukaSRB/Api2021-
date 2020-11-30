const express = require('express');
const router = express.Router();
const ProdController = require('../controllers/prodController');


router.get('/',(req,res)=>{
    return res.send("Bem vindo primeira rota teste")
});

router.get('/read', UserController.index);









module.exports=router;