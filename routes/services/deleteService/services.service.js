const { poolUser } = require("../../../database");

module.exports = {
    deletedService: function(req, result) {

        const userId = req.params.id;

        poolUser.query(`${process.env.deleteServiceQuery}`, [userId], (err, res) => {
            if (err) return result.send(err);
            return result.json(res)
        })
    }
}