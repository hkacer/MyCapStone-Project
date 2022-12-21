
const form = document.querySelector('form')
const seAll=document.getElementById('see-all')
const nameInput = document.querySelector('#name-input')
const countrySelect = document.querySelector('#president-select')
const countryList = document.querySelector('#presidents-list')
const seePres=document.getElementById('all-pres')
const presContainer = document.querySelector('#pres-container')





function getPresidentsSecond() {
  

  axios.get('http://localhost:4004/presidentsSecond')
      .then(res => {
          res.data.forEach(presidents => {
              const secondPres = document.createElement('option')
              secondPres.setAttribute('value', presidents['id'])
              //console.log(presidents)
              
              const info=`<h1></h1>
              <div class="president-card">
             <h3>${presidents.name}</h3>
             <img src="${presidents.image_url}" alt="president's picture">
            <p>Term: ${presidents.term_start} - ${presidents.term_end}</p>
            <p>Party: ${presidents.party}</p>
            <p>Rating: ${presidents.rating}</p>
           
           </div>
          `
              seePres.innerHTML+=info
              
          })
      })
}

function createPresidentDropDown(){

  const selectTag=document.getElementById('presidents-name')
  axios.get('http://localhost:4004/presidentsSecond')
      .then(res => {
        res.data.forEach(presidents => {
          const secondPres = document.createElement('option')
          secondPres.setAttribute('value', presidents['id'])
          secondPres.textContent =presidents.name
          selectTag.appendChild(secondPres)
          

        })
      })
}

function deletePresident(id) {
  axios.delete(`http://localhost:4004/presidentsSecond/${id}`)
      .then(() => getPresidentsSecond())
      .catch(err => console.log(err))
}

// function createDesiredPresident(pres){
//   const presCard = document.createElement('div')
//     presCard.classList.add('pres-card')

//     presCard.innerHTML = `<img alt='pres cover' src=${pres.imageURL} class="pres-cover"/>
//     <p class="pres-title">${pres.title}</p>
//     <div class="btns-container">
//         <button onclick="updatePresident(${pres.id}, 'minus')">-</button>
//         <p class="movie-rating">${pres.rating} stars</p>
//         <button onclick="updatePresident(${pres.id}, 'plus')">+</button>
//     </div>
//     <button onclick="deleteMovie(${pres.id})">delete</button>
//     `


//     presContainer.appendChild(presCard)
// }
// function displayPresidents(arr) {
//   presContainer.innerHTML = ``
//   for (let i = 0; i < arr.length; i++) {
//       createDesiredPresident(arr[i])
//   }
// }
createPresidentDropDown()
getPresidentsSecond()