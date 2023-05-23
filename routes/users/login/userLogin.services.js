const { poolUser } = require("../../../database");
const bcrypt = require('bcryptjs');

module.exports = {
    validUser: function(req, result) {
        let user_id = req.email
        let user_password = req.password
        if(user_id && user_password) {
            poolUser.query(`${process.env.validUserQuery}`, [req.email],async (err, res) => {
            // =====================================
            const comparison = await bcrypt.compare(user_password, res[0].password)      
            if(res.length > 0)
                {
                    for(var count = 0; count < 1; count++)
                    {   
                        if(comparison)
                        {
                            user_id = res[count].email;
                            result.json({res, token: "gdcjdsv"});
                        }
                        else
                        {
                            result.status(401).send('Incorrect Password');
                        }
                    }
                }
                else
                {
                    result.status(401).send('Incorrect Email Address');
                }
                result.end();
            });
        }
        else {
            result.send('Please Enter Email Address and Password Details');
            result.end();
        }
    },
};