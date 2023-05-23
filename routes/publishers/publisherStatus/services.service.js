const { poolUser } = require("../../../database");

module.exports = {
    controlPublisher: function(req, result) {
        const publisherId = req.params.id
        const {publisherStatus} = req.body;
        console.log(publisherStatus, publisherId)
        poolUser.query(`${process.env.updatePublisherQuery}`, [publisherStatus, publisherId], (err, res) => {
            if (err) return result.send(err);
            return result.json(res)
        })
    }
}