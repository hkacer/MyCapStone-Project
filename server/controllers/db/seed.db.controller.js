require('dotenv').config()
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
    seed:(req,res) => {
        sequelize.query(`
            drop table if exists vote_users;
            drop table if exists user_voters;

            create table vote_users(
                vote_user_id serial primary key,
                email varchar not null,
                passhash varchar(500) not null 
            )
        `).then(dbRes => res.sendStatus(200))
        .catch(err => res.status(400).send(err))
    }
}