const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const dbName = 'database';

let mongo_conn = function (){
    MongoClient.connect(url, (err, client)=>{
        if(err)throw err;
        console.log("Server Connected");
        global.monn = client.db(dbName);
        
    });
} 

module.exports = mongo_conn;