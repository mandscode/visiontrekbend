const { insertNewUser } = require("./registration.services");

module.exports = {
    insertedNewUser: ((req, result) => {
        console.log(req.body, req.files, req.file);
        const servicesFun = insertNewUser;
        servicesFun(req, result);
    })
}