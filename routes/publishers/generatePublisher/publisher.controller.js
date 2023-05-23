const { insertNewPublisher } = require("./publisher.services");

module.exports = {
    insertedNewPublisher: (req, result) => {
        insertNewPublisher(req, result);
    }
};