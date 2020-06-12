const idInput = document.getElementById('idInput');
const styleInput = document.getElementById('styleInput');

function setCard() {
  const card = document.getElementById(idInput.value);
  card.style.color = styleInput.value;
} 

function resetCard() {
  document.getElementById("reset").onclick = function() {
    document.getElementById("numbers").innerHTML = "";
 };
}

