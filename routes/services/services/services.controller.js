const { fetchedServices } = require("./services.service");

module.exports = {
    fetchServices: (req, result) => {
        fetchedServices(req, result);
    }
}