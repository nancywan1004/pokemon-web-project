/* Code for fetching data from https://pokeapi.co/ */
var spriteImgElem = document.createElement('img');
// The pokeData variable is an asynchronous process called Promise
var pokeData = fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(data => data.json());
pokeData.then((data) => {
    console.log(data);
    spriteImgElem.src = data.sprites["front_shiny"];
    document.body.appendChild(spriteImgElem);
});

// TASK #1: Fetch 10 pokemon's resources and display their sprite images
// TASK #2: Attaching each pokemon sprite image with the popup

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

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
