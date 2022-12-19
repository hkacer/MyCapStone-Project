const baseURL=`https://api.ap.org/v2`





const getElections=()=>{
  axios.get(`${baseURL}`)
  .then(dbRes=>{
    res.status(200).send(dbRes[0])
  })
  .catch(err=>console.log('first get'))

}