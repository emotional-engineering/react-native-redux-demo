const express = require('express');
const app = express();
const port = process.env.PORT || 5070;
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
const fs = require('fs');

const Database = require('./database.js');
let database = false;

app.get('/api/v1/campaigns', async (req, res) => {
    res.status(200).send({
        success: 'true',
        campaigns: await database.getCampaigns()
    })
});

app.get('/api/v1/campaign/:id', async (req, res) => {
    res.status(200).send({
        success: 'true',
        campaign: await database.getCampaign(req.params.id)
    })
});

app.use(express.static('images'))

const init = async () => {

    database = await new Database();

    if (!database) {
        console.log("No database - exit");
        process.exit(1);
    }

    await database.populateData(path.resolve("data", "data.json"));
    app.listen(port, () => console.log(`Listening on port ${port}`));
}

init();
