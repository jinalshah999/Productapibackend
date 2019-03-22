var db=require('../dbconnection');
var products={
    getAllProducts:function(callback){
        return db.query("select * from products",callback);
    },
    deleteAll:function(item,callback){
 
        var delarr=[];
        for(i=0;i<item.length;i++){
         
        delarr[i]=item[i].pro_id;
        }
        return db.query("delete from products where pro_id in (?)",[delarr],callback);
        }
};
module.exports=products;