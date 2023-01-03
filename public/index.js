console.log("connected");

//const searchForm= document.getElementById('search-form');
const searchInput = document.getElementById("search-input");
const displaySection = document.getElementById("display-section");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
const baseURL = `http://localhost:4004`;

const addToList = (pres) => {
  console.log(pres);
  let token = sessionStorage.getItem("token");
  let userId = sessionStorage.getItem("userId");
  token == null
    ? alert("Please login to add your comment")
    : axios
        .post(`${baseURL}/api/list/${userId}`, pres, {
          headers: {
            authorization: token,
          },
        })
        .then((res) => alert(res.data))
        .catch((err) => console.log(err));
};

const handleSearch = (e) => {
  e.preventDefault();
  const userInput = searchInput.value;
  displaySection.innerHTML = "";
  searchInput.value = ``;
  axios
    .get(`${baseURL}/api/query/?search=${userInput}`)
    .then((res) => {
      // console.log(res.data);
      createCard(res.data);
    })
    .catch((err) => console.log(err));
};

const login = (body) =>
  axios
    .post(`${baseURL}/api/login`, body)
    .then((res) => {
      console.log(res.data);
      let token = res.data.token;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("userId", res.data.vote_user_id);
      sessionStorage.setItem("firstname", res.data.firstname);
      window.location.href = "Rating.html";
    })
    .catch((err) => console.log("second err"));

const signUp = (body) =>
  axios
    .post(`${baseURL}/api/signUp`, body)
    .then(async (res) => {
      // console.log("hit signup");
      let token = await res.data.token;
      console.log(res.data);
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("userId", res.data.vote_user_id);
     window.location.href = "Rating.html";
    })
    .catch((err) => console.log("third err"));

const handleAuth = (authType, body) => {
  if (body.email && body.password) {
    authType === "SignUp" ? signUp(body) : login(body);
  } else {
    alert("Please fill required field");
  }
};

//searchForm.addEventListener("submit",handleSearch)
var authModal = document.getElementById("signin");
authModal.addEventListener("show.bs.modal", function (event) {
  var button = event.relatedTarget;
  var recipient = button.getAttribute("data-bs-whatever");
  var modalTitle = authModal.querySelector(".modal-title");
  // var submitBtn = authModal.querySelector("#formSubmit");
  var optionalMsg = document.querySelector("#optionalMsg");
  var authSubmit = document.querySelector("#authSubmit");
  const email = document.querySelector("#floatingInput");
  const password = document.querySelector
  ("#floatingPassword");
  const fname = document.getElementById('firstName');
  const lname = document.getElementById('lastName');

  modalTitle.textContent = button.textContent;
  if (modalTitle.textContent.trim() === "Login") {
    optionalMsg.style.display = "none";
    firstName.style.display = "none";
    lastName.style.display = "none";
  } else {
    optionalMsg.style.display = "block";
    firstName.style.display = "block";
    lastName.style.display = "block";
  }

  authSubmit.textContent = button.textContent;
  authSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const body = { email: email.value, password: password.value, fname:fname.value, lname:lname.value };
    console.log(authSubmit.textContent);
    authSubmit.textContent.trim() === "Login"
      ? handleAuth("Login", body)
      : handleAuth("SignUp", body);
  });
});
