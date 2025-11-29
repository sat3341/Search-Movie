let urls = {
  aa: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOdDFJVjVMMWtTMDVVTjJuOGFWanY3aVFZMjlOZjh4YW9FSG9Sam04SW8zTVBGcVFlZHEtNzJWZEhFR25rTTlRP2tleT1kekZZV1ZsM05YcEliMlp6VjI4elFsTnNWa3hPTkVaSFZXcGpSVzlC&token=MjkxMTI1",
  ab: "XYZ",
  ac: "XYZ",
  ad: "XYZ",
  ae: "XYZ",
  af: "XYZ",
  ag: "XYZ",
  ah: "XYZ",
  ai: "XYZ",
  aj: "XYZ",
  ak: "XYZ",
  al: "XYZ",
  am: "XYZ",
  an: "XYZ",
  ao: "XYZ",
  ap: "XYZ",
  aq: "XYZ",
  ar: "XYZ",
  as: "XYZ",
  at: "XYZ",
  au: "XYZ",
  av: "XYZ",
  aw: "XYZ",
  ax: "XYZ",
  ay: "XYZ",
  az: "XYZ"
};

Object.keys(urls).forEach(id => {
  let el = document.getElementById(id);
  if(el){
    el.onclick = () => {
      window.location.href = urls[id];
    };
  }
});

let movieNames = {
  aa: "Avengers",
  ab: "Batman",
  ac: "Spider-Man",
  ad: "Superman",
  ae: "Iron Man",
  af: "Thor",
  ag: "Black Panther",
  ah: "Wonder Woman",
  ai: "Doctor Strange",
  aj: "Hulk",
  ak: "Ant-Man",
  al: "Captain America",
  am: "Guardians of the Galaxy",
  an: "Deadpool",
  ao: "Joker",
  ap: "Shazam",
  aq: "Aquaman",
  ar: "Flash",
  as: "Green Lantern",
  at: "Venom",
  au: "X-Men",
  av: "Fantastic Four",
  aw: "Transformers",
  ax: "Mission Impossible",
  ay: "Fast & Furious",
  az: "Avatar"
};

Object.keys(movieNames).forEach(id => {
  let el = document.getElementById(id); // download div
  if(el){
    el.previousElementSibling.innerText = movieNames[id]; 
    // previousElementSibling = movie_name div
  }
});

//===search===

let searchBox = document.getElementById("search");
let movies = document.querySelectorAll(".movie");
let mainBox = document.querySelector("main");

// Save original text for all movie_name
movies.forEach(movie => {
  let nameEl = movie.querySelector(".movie_name");
  if (!nameEl.getAttribute("data-original")) {
    nameEl.setAttribute("data-original", nameEl.innerText);
  }
});

searchBox.addEventListener("input", function() {
  let val = searchBox.value.trim().toLowerCase();

  // Convert NodeList to array
  let movieArray = Array.from(movies);

  // Sort: matching ones on top
  movieArray.sort((a, b) => {
    let aText = a.querySelector(".movie_name").getAttribute("data-original").toLowerCase();
    let bText = b.querySelector(".movie_name").getAttribute("data-original").toLowerCase();

    let aMatch = aText.includes(val) ? 1 : 0;
    let bMatch = bText.includes(val) ? 1 : 0;

    return bMatch - aMatch;
  });

  // Clear mainBox
  mainBox.innerHTML = "";

  // Loop through movies
  movieArray.forEach(item => {
    let nameEl = item.querySelector(".movie_name");
    let original = nameEl.getAttribute("data-original");

    if (val !== "" && original.toLowerCase().includes(val)) {
      // Highlight all occurrences
      let regex = new RegExp(`(${val})`, "gi");
      nameEl.innerHTML = original.replace(regex, `<mark>$1</mark>`);
    } else {
      nameEl.innerHTML = original;
    }

    mainBox.appendChild(item);
  });
});



//== copy off ==


  // Right-click disable
  document.addEventListener("contextmenu", function(e){
    e.preventDefault();
  });

  // Drag/drop disable
  document.addEventListener("dragstart", function(e){
    e.preventDefault();
  });

  document.addEventListener("selectstart", function(e){
    e.preventDefault();
  });

