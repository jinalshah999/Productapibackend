var express=require('express');
var router=express.Router();
var prod=require('../model/product_model');

router.get('',function(req,res,next){

    prod.getAllProducts(function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
    });

});
router.post('',function(req,res,next){

        prod.deleteAll(req.body,function(err,rows){

                if(err){
                    res.json(err);
                }
                else{
                    res.json(rows);
                }
        });
});
module.exports=router;