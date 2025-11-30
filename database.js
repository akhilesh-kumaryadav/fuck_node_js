const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://fucknode:Akhilesh%4024@fucknode.852knhd.mongodb.net/?appName=fucknode";
console.log({uri})
const client = new MongoClient(uri);

async function run(){
    try {
        await client.connect();

        await client.db('fucknode').command({ping: 1});

        console.log("Pinged your deployment.");

        const fucknodeDB = client.db('fucknode');
        const sampleCollection = fucknodeDB.collection('sample');
        
        const result = await sampleCollection.insertOne({name: 'hft', lastname: "hrt"});

        const samples = await sampleCollection.find({}).toArray();

        console.dir({samples}, {depth: null})

        console.log("total doc in the collection sample - ", await sampleCollection.estimatedDocumentCount())

        console.log("Inserted doc id - ", result)

    } finally {
        await client.close();
    }
}

run().catch(console.dir);