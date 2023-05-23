const { controlPublisher } = require("./services.service");

module.exports = {
    controlledPublisher: (req, result) => {
        controlPublisher(req, result);
    }
}