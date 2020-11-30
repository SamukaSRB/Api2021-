const express =require('express');
const routes =require('./rotas/routes');
const bodyParser=require('body-parser');
const cors= require('cors');



const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());  

app.use(express.json());

app.use(routes);

app.listen(4000);