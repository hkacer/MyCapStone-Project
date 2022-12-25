console.log("connected");

//const searchForm= document.getElementById('search-form');
const searchInput=document.getElementById('search-input');
const displaySection=document.getElementById('display-section');
const baseURL=`http://localhost:4004`;

const addTolist= (voteObj)=>{
    console.log(voteObj);
    axios
    .post(`${baseURL}/api/list`,{voteObj})
    .then((res)=> alert(res.data))
    .catch((err)=>console.log('first error'))

};

const handleSearch=(e)=>{
e.preventDefault();
const userInput=searchInput.value;
displaySection.innerHTML= "";
searchInput.value=``;
axios
.get(`${baseURL}/api/query/?search=${userInput}`)
.then((res)=>{
    res.data.result.map((result)=>{
        let displayDiv=document.createElement("div");
        displayDiv.classList.add("card")
        displayDiv.style.width="18rem";
        let resultObj=JSON.stringify({...result}).replace(/[\/\(\)\']/g,
        "&apos;");
        displayDiv.innerHTML=`
        <img src='https://image.tmdb.org/t/p/w500/${result.poster_path}'/>
        <div class="card-body bg-light">
        <h5 class="card-title">${result.title}</h5>
        <p class="card-text overflow-hidden">${result.overview}</p>
        <a href="#" onclick='addToList(${resultObj})' class="btn btn-primary">Add to list</a>
        </div>
        
        `;
        displaySection.appendChild(displayDiv)
    });
})
.catch(err=>console.log(err))

};

const getTrending= ()=>{
axios.get(`${baseURL}/api/trending`).then().catch();

};

const getPopular=()=>{
    axios.get(`${baseURL}/api/popular`).then().catch()
};
const login =(body)=>
    axios
    .post(`${baseURL}/api/login`,body)
    .then((res)=>{
        console.log('hit login');
        sessionStorage.setItem("user",JSON.stringify(res.data));
        window.location.href='Rating.html';
    
    })
    .catch((err)=>console.log("second err"));


    const signUp = (body)=>
        axios
        .post(`${baseURL}/api/signUp`,body)
        .then((res)=>{
            sessionStorage.setItem("user",JSON.stringify(res.data));
            window.location.href='Rating.html';
        })
        .catch((err)=>console.log('third err'));

    const handleAuth= (authType,body)=>{
        authType==="SignUp" ? signUp(body) : login(body);
    }
    
    //searchForm.addEventListener("submit",handleSearch)
    var authModal=document.getElementById("signin")
    authModal.addEventListener("show.bs.modal",function(event){
        var button= event.relatedTarget;
        var recipient = button.getAttribute("data-bs-whatever");
    var modalTitle = authModal.querySelector(".modal-title");
  // var submitBtn = authModal.querySelector("#formSubmit");
    var optionalMsg = document.querySelector("#optionalMsg");
    var authSubmit = document.querySelector("#authSubmit");
    const email = document.querySelector("#floatingInput");
    const password = document.querySelector("#floatingPassword");

    modalTitle.textContent=button.textContent;
    modalTitle.textContent.trim()==="Login"?(optionalMsg.style.display="Please wait!") : (optionalMsg.style.display="Thank you for being part of our growing family");
    authSubmit.textContent=button.textContent;
    authSubmit.addEventListener("click",(e)=>{
        e.preventDefault();
        const body={email: email.value, password: password.value};
        console.log(authSubmit.textContent);
        authSubmit.textContent.trim()==="Login" ? handleAuth("Login",body) : handleAuth("SignUp", body);
    })

    })