var ime = document.getElementById("ime");
var prezime = document.getElementById("prezime");
var email = document.getElementById("email");
var sifra = document.getElementById("sifra");
var label = document.getElementById("label");
var label2 = document.getElementById("label2");
var label3 = document.getElementById("label3");
var label4 = document.getElementById("label4");
var format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function provjera() {
  if (ime.value.length == 0) {
    ime.style.borderColor = "hsl(0, 100%, 74%)";
    label.style.visibility = "visible";
  } else {
    ime.style.borderColor = "hsl(246, 25%, 77%)";
    label.style.visibility = "hidden";
  }
  if (prezime.value.length == 0) {
    label2.style.visibility = "visible";
    prezime.style.borderColor = "hsl(0, 100%, 74%)";
  } else {
    prezime.style.borderColor = "hsl(246, 25%, 77%)";
    label2.style.visibility = "hidden";
  }
  if (email.value.match(format)) {
    email.style.borderColor = "hsl(246, 25%, 77%)";
    label3.style.visibility = "hidden";
  } else {
    label3.style.visibility = "visible";
    email.style.borderColor = "hsl(0, 100%, 74%)";
  }
  if (sifra.value.length == 0) {
    label4.style.visibility = "visible";
    sifra.style.borderColor = "hsl(0, 100%, 74%)";
  } else {
    sifra.style.borderColor = "hsl(246, 25%, 77%)";
    label4.style.visibility = "hidden";
  }
}
