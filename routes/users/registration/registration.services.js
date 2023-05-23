const { poolUser } = require("../../../database");
const bcrypt = require('bcryptjs');
const saltRounds = 10;

module.exports = {
    insertNewUser:async function(req, result) {

        const password = req.body.password;    
        const encryptedPassword = await bcrypt.hash(password, saltRounds)

        const values=[
            req.body.companyName,
            req.body.email,
            encryptedPassword,
            req.files.photo_path[0].path
        ]

        poolUser.query('SELECT * FROM users WHERE email = ?', [req.body.email], async (error, results) => {
            if (error) throw error;
            console.log(results);
            
            if (results.length > 0) {
              result.status(409).send('User already registered');
            } else {

                poolUser.query(`${process.env.insertUserQuery}`, [values], (err, data) => {
                    if (err) return result.send(err);
                    return result.json({values});
                })
            }
        });
    }
}