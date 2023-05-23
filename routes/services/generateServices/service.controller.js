const { insertNewService } = require("./service.service");

module.exports = {
    insertedNewService: (req, result) => {
        console.log(req.body)
        insertNewService(req, result);
    }
};