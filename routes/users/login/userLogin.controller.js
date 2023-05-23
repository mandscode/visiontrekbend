const { validUser } = require("./userLogin.services");

module.exports = {
    validatedUser: (req, result) => {
        validUser(req.body, result)
    }
}