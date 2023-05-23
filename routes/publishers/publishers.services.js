const { poolUser } = require("../../database");

module.exports = {
    publisherServices: (pt) => {
        poolUser.query(`${process.env.publisherQuery}`, [], (err, result) => {
            if (err) return pt(err);
            return pt("", result);
        });
    },
};
