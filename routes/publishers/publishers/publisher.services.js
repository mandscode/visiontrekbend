const { poolUser } = require("../../../database");

module.exports = {
    fetchedPublishers: function(req, result){

        poolUser.query(`${process.env.publishersQuery}`, [], (err, res) => {
            if (err) return result.send("Something went wrong");
            return result.json(res)
        })
    }
}