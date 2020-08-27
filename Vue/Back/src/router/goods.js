const express = require("express");
const router = express.Router();
const mongo = require("../utils/mongo");
// const { find } = require("../utils/mongo");
// const {MongoClient} = require("mongodb");
// // console.log(MongoClient);
// const url = "mongodb://localhost:27017";
// const dbName = "jialigou"
// MongoClient.connect(url,function(err,client){
//     // console.log(err);
//     // console.log(client);
//     const db = client.db(dbName);
//     console.log(db);

// })


router.get("/",async(req,res)=>{
    let{page=1,size,sort="id"} = req.query;
    page = page *1;
    size = size *1;
    let limit = size;
    let skip = (page - 1) * size;
    sort = sort.split(",")

    

    let result = await mongo.find("goods",{},{skip,limit,sort})
    res.send(result);
})

router.delete("/:id",async (req,res)=>{
    let {id} = req.params;
    id = id*1;
    // console.log(req.params);
    // console.log(id);

  
   try{
    let result = await mongo.remove("goods",{id:id})
    res.send({
        code:11,
        msg:"删除成功"
    });
   }
   catch(err){
res.send({
    code:404,
        msg:"删除失败"
})
   }
})

module.exports = router;