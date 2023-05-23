const { poolUser } = require("../../../database");

module.exports = {
    insertNewService: function(req, result) {

        const values = [
            req.body.serviceName,
            req.body.serviceUrl,
            req.body.serviceStatus
        ]

        // console.log(req.body)
        poolUser.query(`${process.env.generateServiceQuery}`, [values], (err, res) => {
            if(err) return result.send(err);
            return result.json({res})
        })
    }
}