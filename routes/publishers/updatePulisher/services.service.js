const { poolUser } = require("../../../database");

module.exports = {
    controlPublisher: function(req, result) {
        const {publisherName, publisherId } = req.body;
        console.log(publisherName, publisherId)
        
        poolUser.query(`${process.env.updatePublisherQuery}`, [publisherName, publisherId], (err, res) => {
            if (err) return result.send(err);
            return result.json(res)
        })
    }
}