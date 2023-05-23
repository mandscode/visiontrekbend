const { poolUser } = require("../../../database");

module.exports = {
    insertNewPublisher: function(req, result){
        
        const values = [
            req.body.publisherName,
            req.body.postbackUrl
        ]

        poolUser.query(`${process.env.generatePublisherQuery}`, [values], (err, res) => {
            if (err) return result.send("Something went wrong");
            return result.json({res})
        })
    }
}