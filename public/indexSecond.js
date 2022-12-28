
const form = document.querySelector('form')
const seAll=document.getElementById('see-all')
const nameInput = document.querySelector('#presidents-name')
const presidentComment=document.getElementById('president-comment')
const seePres=document.getElementById('all-pres')
const presContainer = document.querySelector('#pres-container')
const userName= document.getElementById('user-name')
const seeAllComments=document.getElementById('see-all-comments')



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

function getAllComments(){
  axios.get('http://localhost:4004/allComments')
  .then(res => {
      res.data.forEach(comments => {
          const allComments = document.createElement('option')
          allComments.setAttribute('value', comments['id'])
          //console.log(presidents)
          
          const info=`<h1></h1>
          <div class="comments-card">
         <h3>Your comment is here...</h3>
         <p>Name: ${comments.firstname}</p>
        <p>President's Id: ${comments.presidentsid}</p>
        <p>Comment: ${comments.comment}</p>
        <p>Rating: ${comments.rating}</p>
       </div>
       <button onclick="deleteComments(${comments.commentsid})">Delete</button>
      `
      seeAllComments.innerHTML+=info

          
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

function deleteComments(id) {
  axios.delete(`http://localhost:4004/allComments/${id}`)
      .then(() => getAllComments())
      
      .catch(err => console.log('err here delete'))

      window.location.href = 'Rating.html'
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

          const commentElement = document.createElement('div');
        commentElement.innerText = presidentComment.value;
        document.body.appendChild(commentElement);
          presidentComment.innerHTML+= commentElement
          console.log(commentElement)
        window.location.href = 'Rating.html';
      });
          
      

  }
 
  
}

getAllComments()
createPresidentDropDown()
getPresidentsSecond()

form.addEventListener('submit', handleSubmit)