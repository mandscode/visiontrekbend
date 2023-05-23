const { poolUser } = require("../../../database");

module.exports = {
    controlService: function(req, result) {
        const {serviceStatus, userId} = req.body;
        
        poolUser.query(`${process.env.updateServiceQuery}`, [serviceStatus, userId], (err, res) => {
            if (err) return result.send(err);
            return result.json(res)
        })
    }
}