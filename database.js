
const MongoClient = require('mongodb').MongoClient;

const nconf = require('nconf');

const Promise = require('bluebird');

const fs = require('fs');

nconf.argv()
    .env()
    .file({ file: __dirname + '/config.json' });

module.exports = class Database {

    constructor() {
        return (async () => {
            try {
                this.connected = await this.dbConnection();
                return this;
            } catch (e) {
                console.error("Database connection error")
                return false;
            }
        })();
    }

    dbConnection() {

        let self = this;

        return new Promise(function(resolve, reject) {

            let url = 'mongodb://' + nconf.get('database:host') + ':' + nconf.get('database:port');

            MongoClient.connect(url, function(err, client) {

                if (err) return reject("Can't connect to database");

                var db = client.db(nconf.get('database:name'));

                self.campaigns = db.collection("campaigns");

                resolve(true);

            });
        })
    }

    async populateData(filePath) {
        await this.campaigns.deleteMany({});
        const fileContents = JSON.parse(fs.readFileSync(filePath));
        await this.campaigns.insertMany(fileContents);
        console.log("data populated...");
        return true;
    }

    async getCampaigns() {
        let campaigns = await this.campaigns.find({}, { fields : { platforms: 0 } } ).toArray();
        return campaigns;
    }

    async getCampaign(id) {
        let campaign = await this.campaigns.find({id: +id}).toArray();
        return campaign[0];
    }

}