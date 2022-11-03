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




let prenom_m = document.getElementById("prenom_manquant");
let prenom_v = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?/;
let prenom = document.getElementById("first");

let valider = document.getElementsByClassName("btn-submit");
valider[0].addEventListener('click', prenom_validation);


function prenom_validation(e) {
  if (prenom.validity.valueMissing) {
    e.preventDefault();
    prenom_m.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    prenom_m.style.color = "red";
    prenom_m.style.fontSize = "16px";
    prenom.style.border = "red 3px solid";
  }
  else if (prenom_v.test(prenom.value) == false) {
    e.preventDefault();
    prenom_m.textContent = "Prénom incorrect";
    prenom_m.style.color = "orange";
    prenom_m.style.fontSize = "16px";
    prenom.style.border = "orange 3px solid";
  }
  else {
  }
}


let nom_m = document.getElementById ("nom_manquant");
let nom_v = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?/;
let nom = document.getElementById("last");

valider[0].addEventListener('click', nom_validation);

function nom_validation(e) {
  if (nom.validity.valueMissing) {
    e.preventDefault();
    nom_m.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    nom_m.style.color = "red";
    nom_m.style.fontSize = "16px";
    nom.style.border = "red 3px solid";
  }
  else if (nom_v.test(nom.value) == false) {
    e.preventDefault();
    nom_m.textContent = "Nom incorrect";
    nom_m.style.color = "orange";
    nom_m.style.fontSize = "16px";
    nom.style.border = "orange 3px solid";
  }
  else {
  }
}


let mail_m = document.getElementById("mail_manquant");
let mail_v = /[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})/;
let mail = document.getElementById("email");

valider[0].addEventListener('click', mail_validation);

function mail_validation(e) {
  if (mail.validity.valueMissing) {
    e.preventDefault();
    mail_m.textContent = "Veuillez entrer votre e-mail";
    mail_m.style.color = "red";
    mail_m.style.fontSize = "16px";
    mail.style.border = "red 3px solid";
  }
  else if (mail_v.test(mail.value) == false) {
    e.preventDefault();
    mail_m.textContent = "E-mail incorrect";
    mail_m.style.color = "orange";
    mail_m.style.fontSize = "16px";
    mail.style.border = "orange 3px solid";
  }
  else {
  }
}


let date_m = document.getElementById ("date_manquant");
let date_v = /[0-9]/;
let date = document.getElementById("birthdate");

valider[0].addEventListener('click', date_validation);

function date_validation(e) {
  if (date.validity.valueMissing) {
    e.preventDefault();
    date_m.textContent = "Vous devez entrer votre date de naissance";
    date_m.style.color = "red";
    date_m.style.fontSize = "16px";
    date.style.border = "red 3px solid";
  }
  else if (date_v.test(date.value) == false) {
    e.preventDefault();
    date_m.textContent = "Format incorrect";
    date_m.style.color = "orange";
    date_m.style.fontSize = "16px";
    date.style.border = "orange 3px solid";
  }
  else {
  }
}


let reponse_m = document.getElementById ("reponse_manquant");
let reponse_v = /[0-9]/;
let reponse = document.getElementById("quantity");

valider[0].addEventListener('click', reponse_validation);

function reponse_validation(e) {
  if (reponse.validity.valueMissing) {
    e.preventDefault();
    reponse_m.textContent = "Veuillez entrer un nombre";
    reponse_m.style.color = "red";
    reponse_m.style.fontSize = "16px";
    reponse.style.border = "red 3px solid";
  }
  else if (reponse_v.test(reponse.value) == false) {
    e.preventDefault();
    reponse_m.textContent = "Format incorrect";
    reponse_m.style.color = "orange";
    reponse_m.style.fontSize = "16px";
    reponse.style.border = "orange 3px solid";
  }
  else {
  }
}




let choice_m = document.getElementById("choice_manquant");

valider[0].addEventListener('click', choice);


let choice1 = document.getElementById("location1").checked;
let choice2 = document.getElementById("location2").checked;
let choice3 = document.getElementById("location3").checked;
let choice4 = document.getElementById("location4").checked;
let choice5 = document.getElementById("location5").checked;
let choice6 = document.getElementById("location6").checked;


  function choice() {

    let valid = false;

    if((choice1 == false) && (choice2 == false) && 
    (choice3 == false) && (choice4 == false)
    && (choice5 == false) && (choice6 == false)) {
      choice_m.textContent = "Vous devez choisir une option";
      choice_m.style.color = "red";
      choice_m.style.fontSize = "16px";
    }

    else
    {
      valid = true;
    }

    return valid;
  }



let checkbox_m = document.getElementById("checkbox_manquant");
let checkbox_input = document.getElementById("checkbox1").checked;

valider[0].addEventListener('click', checkbox);

function checkbox () {
  let valid = false;

  if (checkbox_input == false) {
    
    checkbox_m.textContent = "Vous devez vérifier que vous acceptez les termes et conditions";
    checkbox_m.style.color = "red";
    checkbox_m.style.fontSize = "16px";

  }
    else
    {
      valid = true;
    }

    return valid;
  }



let validation_totale = document.getElementsByClassName("formu_close");

validation_totale.addEventListener('click', validation_full);

function validation_full() {
  if (valider[0] == true) {
    validation_totale.textContent = "Merci pour votre inscription";
  }
}


function validate(stop) {
  stop.preventdefault();
}

