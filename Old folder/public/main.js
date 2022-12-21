const baseURL=`https://api.ap.org/v2`


//Do not erase this!!!
// AIzaSyAtAJlSgdCQXTrluX_C4ZpnajOSoeXh_u4


const drawBtn = document.querySelector('#draw')
const choicesDiv = document.querySelector('#choices')
const seeAllBtn = document.querySelector('#see-all')
const allPresDiv = document.querySelector('#all-pres')
const chooseHeader = document.querySelector('#choose-header')
const allReps = document.querySelector('#allReps')


let choices = []
chooseHeader.classList.add('hide')


const makeRepsChoiceCard = (rep) => {
  return `
      <div class="pres-card outline">
      <img src='${rep.imgAddress}' alt='${rep.name}'/>
      <h3>${rep.name}</h3>
      <h4>Division: ${rep.divisionId}</h4>
      <p>Level: ${rep.levels}</p>
      <p>Roles: ${rep.roles} /p>
      <p>Official Indices: ${rep.officialIndices}</p>
      <button class="pres-btn" onclick="chooseBot(${rep.id})">VOTE</button>
      </div>
  `
}
const makeRepsDisplayCard = (reps) => {
  return `
      <div class="reps-card outline">
      <img src='${reps.imgAddress}' alt='${reps.name}'/>
      <h3>${reps.name}</h3>
      <h4>Division: ${reps.divisionId}</h4>
      <p>Level: ${reps.levels}</p>
      <p>Roles: ${reps.roles} /p>
      <p>Official Indices: ${reps.officialIndices}</p>
      </div>
  `
}

const getAllBots = () => {
  axios.get('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyAtAJlSgdCQXTrluX_C4ZpnajOSoeXh_u4&address=77388&roles=governmentOfficer&roles=judge')
      .then(({data}) => {
          allReps.innerHTML = ''
      
          data.forEach(bot => {
              let botHtml = makeRepsDisplayCard(bot)
              allReps.innerHTML += botHtml
          })
      })
}



const getElections=()=>{
  axios.get(`${baseURL}`)
  .then(dbRes=>{
    res.status(200).send(dbRes[0])
  })
  .catch(err=>console.log('first get'))

}