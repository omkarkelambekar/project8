const express=require('express');
const app=express();
const port=3200;
require('./db');
const cors=require('cors');
app.use(cors());
app.use(express.json());

app.use('/api/auth',require('./routes/auth'))
app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>')
})

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`);
})