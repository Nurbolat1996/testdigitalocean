var express = require('express');

const app =  express();

app.get('/', (req,res)=>{
    res.send("Hello this is test");
});

app.get('/maksat', (req,res)=>{
    res.send('fuck Maksat');
});

app.listen(3000,"104.248.252.237");
