const { publisherTraffic } = require("./Conversion.services");

module.exports = {
    showPublicTraffic: ((req, result) => {
        publisherTraffic((err, res) => {
            result.send(res);
        })
    })
}