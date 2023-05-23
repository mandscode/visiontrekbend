const { deletedService } = require("./services.service");

module.exports = {
    deleteService: (req, result) => {
        deletedService(req, result);
    }
}