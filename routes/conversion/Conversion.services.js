const { pool } = require("../../database");

module.exports = {
    publisherTraffic: (pt) => {
        console.log(process.env.conversion)
        pool.query(`${process.env.conversion}`, [], (err, res) => {
            if(err) return pt(err);
            return pt("", res)
        })
    }
}