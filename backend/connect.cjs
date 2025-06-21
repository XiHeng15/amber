const { MongoClient} = require("mongodb")
const { Collection } = require("mongoose")
require("dotenv").config({path: "./config.env"})

async function main() {
    const Db = process.env.ATLAS_URI
    const client = new MongoClient(Db)
    try {
    await client.connect()

    const collections = await client.db("amber").collections()
    collections.forEach((collection) => console.log(collection.s.namespace.collection))
    } catch(e) {
        console.error(e)
    } finally {
        await client.close()
    }
}

main().catch(console.error);
