const form = document.querySelector('form')
const seAll=document.getElementById('see-all')
const nameInput = document.querySelector('#name-input')
const countrySelect = document.querySelector('#president-select')
const countryList = document.querySelector('#presidents-list')
const seePres=document.getElementById('all-pres')
const presContainer = document.querySelector('#pres-container')




function getPresidents() {
  

  axios.get('http://localhost:4004/presidents')
      .then(res => {
          res.data.forEach(presidents => {
              const option = document.createElement('option')
              option.setAttribute('value', presidents['id'])
              //console.log(presidents)
              
              const info=`<h1>Presidents pic</h1>
              <div class="president-card">
             <h3>${presidents.name}</h3>
             <p>${presidents.description}</p>
             <a target="_blank" href="${presidents.wikipedia}">Wikipedia</a>
            <p>Term: ${presidents.term} - ${presidents.endYear}</p>
            <p>Party: ${presidents.party}</p>
           <p>Life: ${presidents.life.birthYear} - ${presidents.life.deathYear}</p>
           </div>
          `
              seePres.innerHTML+=info
              
          })
      })
}



getPresidents()




// // You can then use this function to generate the HTML for each president's card and append it to the page
const presidentCardsContainer = document.getElementById("president-cards-container");
// presidentCardsContainer.innerHTML = 
//   ${generatePresidentCard(president1)}

// `;
