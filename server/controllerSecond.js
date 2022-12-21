require('dotenv').config();
const {CONNECTION_STRING}= process.env;
const Sequelize=require('sequelize');




const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: 'postgres', 
  dialectOptions: {
      ssl: {
          rejectUnauthorized: false
      }
  }
});

module.exports = {

  getPresidentsSecond:(req,res)=>{
    // 
    sequelize.query(`
    SELECT * FROM presidents
    `)
    .then(dbRes=>{
      console.log(dbRes[0])  
      res.status(200).send(dbRes[0])

    })
    .catch(err => console.log('error seeding DB', err))
},
createPresidentDropDown:(req,res)=>{
  sequelize.query(`
    SELECT * FROM presidents
    `)
    .then(dbRes=>{
      console.log(dbRes[0])  
      res.status(200).send(dbRes[0])

    })
    .catch(err => console.log('error seeding DB', err))
},
deletePresident:(req,res)=>{
  const {id}=req.params
  sequelize.query(`
  DELETE FROM presidents 
  WHERE ${id}=presidents.id
  
  `).then(dbRes=>res.status(200).send(dbRes[0]))
  .catch(err=>console.log('Err is here forth'))
}

}