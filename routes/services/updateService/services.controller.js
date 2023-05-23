const { controlService } = require("./services.service");

module.exports = {
    controlledService: (req, result) => {
        controlService(req, result);
    }
}