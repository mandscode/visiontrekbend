const { fetchedPublishers } = require("./publisher.services");

module.exports = {
    fetchPublishers: (req, result) => {
        fetchedPublishers(req, result);
    }
};