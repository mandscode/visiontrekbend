const { poolUser } = require("../../../database");

module.exports = {
    fetchedServices: function(req, result) {

        poolUser.query(`${process.env.servicesQuery}`, [], (err, res) => {
            if (err) return result.send(err);
            return result.json(res)
        })
    }
}