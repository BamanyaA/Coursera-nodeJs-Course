const express = require("express");
const morgan= require('morgan');
const bodyParser= require('body-Parser');
const http=require('http');
const hostname='localhost';
const port=3000;
const app=express();

app.use(bodyParser.json());
app.use(morgan('dev'));
const dishRouter=require('/routes/dishRouter');

app.use('/dishes:dishId',dishRouter);

app.use(express.static(__dirname+'/public'));
app.use((req,res,next)=>{
    console.log(req.header);
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is express with rest Api implemntation </h1></body></html>');

})
const server=http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`The Server is running at https:// ${hostname}:${port}`);
})