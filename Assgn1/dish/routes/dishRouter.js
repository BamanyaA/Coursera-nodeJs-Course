const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());
dishRouter.route('/')
.all((req,res,next)=>{
    console.log(req.header);
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end("will display dish " + req.params.dishId + "to you");
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end("post operation does not support at /dishes/"+ req.params.dishId);
})
.put((req,res,next)=>{
    res.write("updating dish " + req.params.dishId );
    res.end("will update" + req.body.name + "with detail" + req.body.description);
})
.delete((req,res,next)=>{
    res.end("deleting dishes/ " + req.params.dishId );
});
module.exports=dishRouter;