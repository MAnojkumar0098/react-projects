let express=require('express');
let app=express();
let cors=require('cors');
app.use(cors());
app.use(express.json());


let a=[{name:'manoj',password:'123'},{name:'xkh',password:'344'}]
app.listen(3001,()=>{console.log('listening')});
app.get('/form',(req,res)=>{
    res.send('m')
})
app.post('/form',(req,res)=>{
    a.map((i)=>{if(req.body.name===i.name){res.json('valid')}})
    res.json('invalid')
})