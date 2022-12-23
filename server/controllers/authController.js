require('dotenv').config()
const bcrypt = require('bcryptjs');
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})
module.exports = {
    userLogin:(req,res) => {
        const { email,password} = req.body
        sequelize.query(`select * from vote_users where email = '${email}'`)
        .then(dbRes => {
            if(!dbRes[0][0]){
              console.log('user not found')
                res.status(400).send('Account not found, try signing up')
            }
            // const {passhash} = dbRes[0][0]
            else{
              const authenticated = bcrypt.compareSync(password,dbRes[0][0].passhash)
              !authenticated ? res.status(403).send('incorrect password') : delete dbRes[0][0].passhash
              res.status(200).send(dbRes[0])
            }
          
        })
        .catch(err => console.log(err))

    },
    userSignup:(req,res) => {
        const { email,password} = req.body
        console.log(email,password)
        sequelize.query(`select * from vote_users where email = '${email}'`)
        .then(dbRes => {
            console.log(dbRes[0])
            if(dbRes[0][0]){
                return res.status(400).send('Email is already in use, try login')
            } else {
                let salt = bcrypt.genSaltSync(10)
                const passhash = bcrypt.hashSync(password,salt)
                sequelize.query(`
                    insert into vote_users(email,passhash) values('${email}','${passhash}');
                    select * from vote_users where email = '${email}';
                `).then(dbResponse => {
                    // console.log(dbRes[0])
                    const userToSend = [...dbResponse[0]]
                    console.log(userToSend)
                    res.status(200).send(userToSend)
                }).catch(err => console.log(err))
            }
        }).catch(err => console.log(err))


        
    },
}