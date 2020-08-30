const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "jialigou";



function connect(){
    return new Promise(function(resolve,reject){
        MongoClient.connect(url,function(err,client){
            // console.log(db);
            if (err) reject (err);
            const db = client.db(dbName);

            resolve({db,client})
        
        
            // client.close();
        })
    })

}



async function insert(collectionName,data){
    const {db,client} = await connect();
    const collection = db.collection(collectionName);
    collection[Array.isArray(data)?"insetMany":"insertOne"](data);
    client.close();


}

async function remove(collectionName,options){
    const {db,client} = await connect();
    const collection = db.collection(collectionName);
    let result = collection.deleteMany(options);
    result = await result;
    client.close();
    return result;


}
async function update(collectionName,query,newData){
    const {db,client} = await connect();
    const collection = db.collection(collectionName);
    const result = await collection.updateMany(query,newData);
    client.close();
    return result;

}




async function find(collectionName,query={},options={}){
    const {db,client} = await connect();
    const collection = db.collection(collectionName);
    let result = collection.find(query);
    if(options.skip){
        result = result.skip(options.skip);

    }
    if(options.limit){
        result = result.limit(options.limit);

    }
    if (options.sort){
        let kind,order;
        kind = options.sort[0];
        order = options.sort[1];
        if(options.sort.length>1){
            kind = options.sort[0];
            order = options.sort[1]*1;
        }else{
            kind = options.sort[0];
            order = 1;

        }
        result = result.sort({
            [kind]:order,
        })

    }
    result = await result.toArray();

    client.close();
    return result;

}

module.exports = {
    insert,
    remove,
    update,
    find 
}