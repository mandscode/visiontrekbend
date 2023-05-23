const { publisherServices } = require("./publishers.services")
module.exports = {
    showPublishers: ((req, result) => {
        publisherServices((err, res) => {
            result.send(res)
        })
        // result.send(req.query)
    })
}