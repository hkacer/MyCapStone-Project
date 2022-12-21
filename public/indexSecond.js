
const form = document.querySelector('form')
const seAll=document.getElementById('see-all')
const nameInput = document.querySelector('#presidents-name')
const presidentComment=document.getElementById('president-comment')
const seePres=document.getElementById('all-pres')
const presContainer = document.querySelector('#pres-container')
const userName= document.getElementById('user-name')





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
function handleSubmit(e) {
  e.preventDefault()

  if (nameInput.value < 1) {
      alert ('You must enter your reasoning')
      return
  }
  if(userName.value.length<=0){
    alert('Please enter your name!!!')
  }

  let userRating = document.querySelector('input[name="rating"]:checked').value
  let body = {
      presidentsId : nameInput.value, 
      userName: userName.value,
      
      rating: +userRating, 
      comment: presidentComment.value
      
  }

  axios.post(`http://localhost:4004/presidents/${nameInput.value}/comments`, body)
      .then((res) => {
          nameInput.value = ''
          document.querySelector('#rating-one').checked = true
          getPresidentsSecond()
          if(res.status==200){
            alert('Your comment is saved!')
          }else{
            alert('There was a problem try again later!!!')
          }
          
      })
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
form.addEventListener('submit', handleSubmit)