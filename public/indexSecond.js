
const form = document.querySelector('form')
const seAll=document.getElementById('see-all')
const nameInput = document.querySelector('#presidents-name')
const presidentComment=document.getElementById('president-comment')
const seePres=document.getElementById('all-pres')
const presContainer = document.querySelector('#pres-container')
const userName= document.getElementById('user-name')




// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



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

  if (presidentComment.value.length <=0 || userName.value.length<=0) {
    
      alert ('Please fill out the required field')
    
  }else {
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
          //getPresidentsSecond()
          if(res.status==200){
            alert('Your comment is saved!')
          }else{
            alert('There was a problem try again later!!!')
          }
          window.location.href='Rating.html';
          
      })

  }
 
  
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