require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  getPresidentsSecond: (req, res) => {
    //
    sequelize
      .query(
        `
    SELECT * FROM presidents
    `
      )
      .then((dbRes) => {
        sequelize
          .query(
            `
    SELECT * FROM comments

    `
          )
          .then((ratings) => {
            //console.log(dbRes[0])
            dbRes[0].forEach((president, ind, arr) => {
              let rating = ratings[0].filter(
                (rating) => rating.presidentsid === president.id
              );
              if (rating.length === 0) {
                return (arr[ind].rating = "NA");
              } else {
                let sum = rating.reduce((acc, curr) => acc + curr.rating, 0);
                console.log("sums", sum);
                return (arr[ind].rating = Math.floor(sum / rating.length));
              }
            });
            res.status(200).send(dbRes[0]);
          });
      })
      .catch((err) => console.log("error seeding DB", err));
  },

  getAllComments: (req, res) => {
    sequelize
      .query(
        `
  SELECT presidents.name, comments.firstName, comments.commentsid, comments.comment, comments.rating
FROM presidents
JOIN comments ON presidents.id = comments.presidentsId;
  `
      )
      .then((dbRes) => {
        console.log(dbRes[0]);
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => console.log("error in commnets", err));
  },

  createPresidentDropDown: (req, res) => {
    sequelize
      .query(
        `
    SELECT * FROM presidents
    `
      )
      .then((dbRes) => {
        console.log(dbRes[0]);
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => console.log("error seeding DB", err));
  },

  deleteComments: (req, res) => {
    const { id } = req.params;
    console.log(id);
    sequelize
      .query(
        `
  DELETE FROM comments 
  WHERE commentsid=${id}
  
  `
      )
      .then(() => this.getAllComments())
      .catch((err) => console.log("Err is here delete"));
  },

  getUserComments: (req, res) => {
    const voteUserId = req.params.id;
    sequelize
      .query(
        `
        SELECT presidents.name, comments.vote_user_id,comments.firstName, comments.commentsid, comments.comment, comments.rating
        FROM presidents
        JOIN comments ON presidents.id = comments.presidentsId 
        where vote_user_id=${voteUserId}`
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })

      .catch((err) => console.log("Err is here usercomments", err));
  },

  createPresidentComment: (req, res) => {
    
    const presidentsId = req.params.id;
   
    const { userName, rating, comment,vote_user_id } = req.body;
    sequelize
      .query(
        `
  INSERT INTO comments (firstName,rating,comment,presidentsid,vote_user_id)
  VALUES('${userName}', ${rating}, '${comment}', ${presidentsId},${vote_user_id})
  `
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log("Err is here third", err));
    //console.log(presidentId,userName,rating,comment)
  },
};

// createPresidents:(req,res)=>{
//   const {name,rating,id}=req.body
//   sequelize.query(`
//   INSERT INTO presidents (name, rating, id)
//   VALUES ('${name}', ${rating}, ${id})
//   `).then(dbRes=>res.status(200).send(dbRes[0]))
//   .catch(err=>console.log('Err is here second'))
// }
