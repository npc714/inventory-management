const {MongoClient, ObjectId}=require('mongodb');

const uri=process.env.DATABASE_URI;
const dbName=process.env.DATABASE_NAME;
const client=new MongoClient(uri);

let db;

async function connect(){
    if(!db){

        await client.connect();
        db = client.db(dbName);
        console.log(`MongoDB connected to ${dbName}`);

    }

    return db;
}


/**
 * Adds a new record or multiple records to the specified MongoDB collection.
 *
 * If `record` is an array, it uses `insertMany`, otherwise `insertOne`.
 *
 * @async
 * @param {string} collectionName - The name of the collection to insert into.
 * @param {Object|Object[]} record - A single object or an array of objects to insert.
 * @returns {Promise<void>} - Resolves when insertion is complete.
 */

async function addRecord(collectionName, record){

    try{

        const dataBase=await connect();

        if(Array.isArray(record)){   
            await dataBase.collection(collectionName).insertMany(record);
        } else {
            await dataBase.collection(collectionName).insertOne(record);
        }

        console.log(`${record} added to ${collectionName}`);

    } catch(err) {

        console.log(err);

    }

}


/**
 * Fetches all documents from the specified MongoDB collection.
 *
 * @async
 * @param {string} collectionName - The name of the collection to query.
 * @returns {Promise<Array<Object>>} - An array of documents from the collection.
 */
async function listRecords(collectionName) {

    try{

        const dataBase=await connect();
        return await dataBase.collection(collectionName).find({}).toArray();

    } catch(err){
        console.log(err);
    }
    
}

module.exports={
    addRecord,
    listRecords,
}

