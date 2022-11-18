function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName("close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn[0].addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}


//prénom conditions
let prenom_m = document.getElementById("prenom_manquant");
let prenom_v = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?/;

function test_prenom() {
  let prenom = document.getElementById("first");

  if (!prenom_v.test(prenom.value)) {
    prenom_m.classList.remove("hidden");
    prenom.style.border = "red 3px solid";
    return false;
  }
  else {
    prenom_m.classList.add("hidden");
    return true;
  }
}

//nom conditions
let nom_m = document.getElementById ("nom_manquant");
let nom_v = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?/;


function test_nom() {
  let nom = document.getElementById("last");

  if (!nom_v.test(nom.value)) {
    nom_m.classList.remove("hidden");
    nom.style.border = "red 3px solid";
    return false;
  }
  else {
    nom_m.classList.add("hidden");
    return true;
  }
}

//mail conditions
let mail_m = document.getElementById("mail_manquant");
let mail_v = /[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})/;

function test_mail() {
  let mail = document.getElementById("email");

  if (!mail_v.test(mail.value)) {
    mail_m.classList.remove("hidden");
    mail.style.border = "red 3px solid";
    return false;
  }
  else {
    mail_m.classList.add("hidden");
    return true;
  }
}

//date de naissance conditions
let date_m = document.getElementById ("date_manquant");
let date_v = /[0-9]/;

function test_date() {
  let date = document.getElementById("birthdate");

  if (!date_v.test(date.value)) {
    date_m.classList.remove("hidden");
    date.style.border = "red 3px solid";
    return false;
  }
  else {
    date_m.classList.add("hidden");
    return true;
  }
}

//reponse conditions
let reponse_m = document.getElementById ("reponse_manquant");
let reponse_v = /[0-9]/;

function test_reponse() {
  let reponse = document.getElementById("quantity");

  if (!reponse_v.test(reponse.value)) {
    reponse_m.classList.remove("hidden");
    reponse.style.border = "red 3px solid";
    return false;
  }
  else {
    reponse_m.classList.add("hidden");
    return true;
  }
}

//choice conditions
let choice_m = document.getElementById("choice_manquant");


  function test_choice() {
    let choice1 = document.getElementById("location1").checked;
    let choice2 = document.getElementById("location2").checked;
    let choice3 = document.getElementById("location3").checked;
    let choice4 = document.getElementById("location4").checked;
    let choice5 = document.getElementById("location5").checked;
    let choice6 = document.getElementById("location6").checked;
    let valid = false;

    if((choice1 == false) && (choice2 == false) && 
    (choice3 == false) && (choice4 == false)
    && (choice5 == false) && (choice6 == false)) {

      choice_m.classList.remove("hidden");
    }

    else
    {
      valid = true;
      choice_m.classList.add("hidden");
    }

    return valid;
  }


//checkbox conditions
let checkbox_m = document.getElementById("checkbox_manquant");


function test_checkbox () {
  let checkbox_input = document.getElementById("checkbox1").checked;
  let valid = false;

  if (checkbox_input == false) {
    
    checkbox_m.classList.remove("hidden");
  }
    else
    {
      valid = true;
      checkbox_m.classList.add("hidden");
    }

    return valid;
  }

  
// validation formulaire

const formulaire = document.getElementById("formulaire");
const body = document.getElementsByClassName("modal-body");
formulaire.addEventListener('submit', validation_full);
let modal_validé = document.getElementsByClassName("modal-validé")[0];

function validation_full(e) {
  e.preventDefault();
  const date_valid = test_date();
  const choice_valid = test_choice();
  const checkbox_valid = test_checkbox();
  const reponse_valid = test_reponse();
  const mail_valid = test_mail();
  const nom_valid = test_nom();
  const prenom_valid = test_prenom();

  if (date_valid == true && choice_valid == true && checkbox_valid == true && reponse_valid == true && mail_valid == true && nom_valid == true && prenom_valid == true) {

    formulaire.style.display = "none";
    modal_validé.classList.remove("hidden");
  }
}

const fermerBtn = document.getElementsByClassName("btn-submit-fermer");

// close modal event
fermerBtn[0].addEventListener("click", modalEnd);

function modalEnd() {
  modalbg.style.display = "none";
}