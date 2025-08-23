//this contains all the database functions and connection logic

//importing modules
const {MongoClient}=require('mongodb');

//Environmental variables and client initialization
const uri=process.env.DATABASE_URI;
const dbName=process.env.DATABASE_NAME;
const client=new MongoClient(uri);

let db;

//connects to the database
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


/**
 * Finds a single document in the specified collection based on a filter.
 *
 * @param {string} collectionName - The name of the MongoDB collection.
 * @param {Object} filter - The filter used to find the document.
 * @returns {Promise<Object|null>} - The matching document, or null if not found.
 */
async function findRecord(collectionName, filter) {
    
    try{

        const dataBase=await connect();
        return await db.collection(collectionName).findOne(filter);

    } catch(err){
        console.log(err);
    }

}


/**
 * Updates a single document in the specified MongoDB collection.
 *
 * This function connects to the database and applies an update to the first document
 * that matches the provided filter. The update is applied using the `$set` operator.
 *
 * @async
 * @function updateRecord
 * @param {string} collectionName - The name of the collection to update.
 * @param {Object} filter - The filter used to locate the document to update.
 * @param {Object} update - The fields and values to update in the matched document.
 * @returns {Promise<void>} - Resolves when the update operation completes.
 *
 * @example
 * await updateRecord("items", { name: "Wireless Mouse" }, { price: "2000" });
 */

async function updateRecord(collectionName, filter, update, operator = "$set") {
    try{

        const dataBase=await connect();
        await dataBase.collection(collectionName).updateOne(
            filter,
            {[operator]: update}
        )
        console.log(`${collectionName} updated with ${update}`)

    } catch(err){
        console.log(err);
    }
}

/**
 * Deletes a single document from the specified collection based on a filter.
 *
 * @param {string} collectionName - The name of the MongoDB collection.
 * @param {Object} filter - The filter used to find the document to delete.
 * @returns {Promise<void>}
 */

async function deleteRecord(collectionName, filter) {
    
    try{

        const dataBase=await connect();
        await dataBase.collection(collectionName).deleteOne(filter);
        console.log(`record with field ${field} removed from ${collectionName}`);

    } catch(err){
        console.log(err);
    }

}

module.exports={
    connect,
    addRecord,
    listRecords,
    findRecord,
    updateRecord,
    deleteRecord,
}

