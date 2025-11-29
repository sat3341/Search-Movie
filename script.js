let urls = {
  aa: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOYUZ6QlIxVXF2SnVOTFZxNmZxRXU4R0RfU184SVZ3UzBXX19GSnJpakhkaExaa18tcl94TzlDZkNmRmc5eFV3P2tleT1iRGg1ZFRGd09VNUhlazVRZWxrd1dXUlNWVEV4VGxCdFVFc3dMVGhS&token=MjkxMTI1",
  ab: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOdkNFM3Zua1NoUWlUX19qSGl5RmhjRUlIb0JSODdhTTllXzQ5THZBQXlrNVllenRaeGFoR210SlR1VjdoNnlBP2tleT1NWFZ1UzAwMVIyVTFYM04zVVhKWVZVSnlla05vWDNKWGQyWlpkbFJS&token=MjkxMTI1",
  ac: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQVGFpdTFUbEo1ZUtFdzctclY1SVp1eW1MeTUtTktUNEMzWHlTOHFhWndDb3pZbnNmbFNPUnFFT2tYSXYtdE9BP2tleT1hazFRWWpWaE9VZzRXVzlGUW1walJtZEdOVWcwYVVnNVRUQktlWE4z&token=MjkxMTI1",
  ad: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNenY3RXl0b1lPT2xzYXJUNHlyVXpOaDhGTnhmMkphRldQZUFZdDNBWUFXcFRBM2JVS1JrTVIzUldvM0hLWVJ3P2tleT1XRlptZDJGc1gxa3RNekoxYTB4TE0zUk9ZWFJNYWxneWFHRktZbTFu&token=MjkxMTI1",
  ae: "https://awsss.awsstorage12.space/jf97ch/Shang-Chi%20and%20the%20Legend%20of%20the%20Ten%20Rings%20%282021%29%20%28Hindi%20%2B%20English%29%20Dual%20Audio%20MCU%20Hollywood%20Movie%20BluRay%20HD%20720p%20ESub.mkv?expired=H6929cd100512a9.61764228581061b258cdd314&userid=2690237563391&vaid=6929cd10051404.74668043&token=2239176419",
  af: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQRTlZcVN0UTFwNWhzTVZJWFdLQXFiZUhVRjQ4bFhycmVJVmdzS2s4LXA1WnkzMHNKUGZ1QWNhOUhvcGFRNlRBP2tleT1NbUpOZFVZNGVIcHJhbTEzUVRkcU1FSjBhMGR3ZVVGNmNuVk5Va1JS&token=MjkxMTI1",
  ag: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNM2VJbU5YZ1RuVzllUUl5TF8zU2pQXzBOaWlxbmNqMEZBTURlckRQRXNFWjFabDl0YjRDbFNEQjNYdEZNX3hBP2tleT1lRVZLZDBOdVEzTXhWM2szYVhwR1VHUmFTVzFXY3pCVlkxOUJaamxS&token=MjkxMTI1",
  ah: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQcGlVaGxFc083ZGtGTWRQYlpUWFdPQjNiNlhDcmotYzNTZnBzbU1qeU9HYXAwNVo4bDRubWgtRDBrVm9ubXBRP2tleT1VM2x1ZFdSdk1sVkVhbXRDVERnMlQybFNSMjB0UlY5bVZETktXbk5u&token=MjkxMTI1",
  ai: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOSVRKek55TWNSVUZBS0RkakNQdkFHVEJtTHBhQnlfTkRRQTJTeXFMc0pYeVlXVWU2WjZ5bkRRRDRUT0h3QzlBP2tleT1OSFl5Y0MxM2VFOUJRM2xWV2pOUk1ISlpSbUkxU0ZabVpGbGZkVlZS&token=MjkxMTI1",
  aj: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQYWl1eFgzbUU2R3JhRzFCaDZKR2htQ0ZLUkRQT0QyUzZYQ2JZd1VXYW5KUGtrMFpsc09KRWJNdUkwOGlBc0tBP2tleT1aMjloUTJjdFVHUTNaVlp1VW1vd1pFaHpRMUF6YzFaQlRHVnVWa3BS&token=MjkxMTI1",
  ak: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQQVdDaFlsLWxQTHc5WWFSaGVKUGxZSG1vOVNKem10VkJjbVBvNnc2dUdpeVB2VWlnV0JYSzcwYnlNX0p1dmFnP2tleT1iSFo2V0dNeFdFMXRTR05aWlRKdldIVnhPSEZxTlVac1VVRndjRzlu&token=MjkxMTI1",
  al: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQWEhubTlJY0tSUnFkaXhSM3phMmFrR3l4UG5SV3BZTkx2T0dOMUxVWnVZMTl4VkxYelNfREh4QjBvT2JLRVhRP2tleT1kV2M1ZWxaVGEzVTNjRnBwUVRSbGJuSkxOakJpTFdONlQxWklSVEJS&token=MjkxMTI1",
  am: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNLU1SRHU3bTh2aWFXUjlZSy15TEtzNFdyM1hPYTlzY2dxRG43c0VFWXl2UGlIaXljUTJIekw1VUVRRENaWXZnP2tleT1aREo2ZVdOcmNFeFpjbFJ2TTBKWFJVWkphWFJuUlVaU1FUUnFjMGQz&token=MjkxMTI1",
  an: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPdkFSamtMSFh0LVYxZGRIU0VBNGtHeUNiSE5zRTFwNkpMNm1ZMm1hMmFfSGlZMENUeDBaTE15b2ZhX2xBWlJRP2tleT1aR293V2poNVFXZGhNV0ZSZVZKUVJtdFRhMDlVVGt4dUxWQkZZV1JS&token=MjkxMTI1",
  ao: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPcjFubFY2bm9LZ3l5YTNqZUZ5VGlfeV9rVmpibU1wQkVZWDU0S0w5UmUya0o5MXRhR3B3c1dXYVhiSVE0di13P2tleT1lR0V3UVVkZmNIWkRWSE5TY214dFZIRkdTMUJWUkdrNWFsVTJaVGwz&token=MjkxMTI1",
  ap: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOaDBfMDRwT1R6RjNTWlBubDg4WVdmckFFblNoWlBLLTVmSER5Mno2cTNybnNOQ3JxdVVyTDA5UGJBNmVkaHl3P2tleT1NWFpwYW5odlgzcDVWVkF0TVdvNVpWSk1NVmQ0UzFsYWNqTXlOM2Qz&token=MjkxMTI1",
  aq: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBONUlNT3k0T3ppZUlLMzRIcElHWk5MUVItZ2NpMlQyOHJGUHlIVmUtTEc0RVFrWG5GUjlVSG91aEVhRllZcUVBP2tleT1YMWxsT1c1ZlFWSXlkbGhDTTFsQlFteFFlRE5oVTFFdFVFdHFXVE5C&token=MjkxMTI1",
  ar: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBORWxPa05CLUFCRUN0YVo1X0ZlUXBidVl3X0FZTEdRQTcxZTNpRkNuMnBZWkhiUi1sSUtVUFRULWowSHhPMnFBP2tleT1XSE56WDJKQ2IxbEhibkpXWXpkYVNsWXdTamRyYVVGbFZEUnZaMXBu&token=MjkxMTI1",
  as: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPVWZWR1YzUEttYXJFelFfYWZZRHZLZ1FMaGk2YzZ2T1FWU3ZrU05uS0dZUDM1TzJfQ29qUHgwLThaOTJyNW9RP2tleT1iR3g2WkROZmVITnBSbHBCYjFkVU1uSlhkVU5CUzI5clZFcFdNM2xu&token=MjkxMTI1",
  at: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOeWhpUm1lcGhfbjczdXFXdUxoNWdhVmRiTElRQWIwUGJQTHRfMnJ0Uk80b00yUHdrSUVVWjF0TWpjcUlnMjh3P2tleT1hMlJWVkVoUVluUnlXVFpyVUdwYU0yTlZiWE5SUmxGWFVTMTZUSE4z&token=MjkxMTI1",
  au: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNbWZCX3J6QzNnSHo4NFdiclBjYVZ4SWEyeUFDOUt4TGFPLW9FOEJEcmNXT0EwOVNQUkFnU2RWZEMtV3FWdmJnP2tleT1RbkJyYUZSWVNtZGlXbTlyYmpoalVrRkJTamRuTVZCblVHWm9Ta2xS&token=MjkxMTI1",
  av: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNMDR5THJRcFNZXzBZcWRtYmthZVgzdW9uT3lxc2pDb3d6bHROX1lkZU9XaW5jcW1EU29Ec2dsQTRFSS1YN0RRP2tleT1RbVp6YTJ4VGVrOHpTemhWWXpaNmNUTnNVWGswYUVKM1IyTmxPRkJu&token=MjkxMTI1",
  aw: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOZUhOTl9QeklxaHYwaG5oQTBUcFpOcnEwMXRCVUpaZWI2S1lVYlhIMjZFSWZlUmp2eHBPSkU2YW5GMTJFTHRRP2tleT1NV2N4TFZOaVdHUmZNRXBuWXpoVmVsaHZkVGRNTVZoT2RHRjZWMTkz&token=MjkxMTI1",
  ax: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQdmw0cXRLZ3Bud1J4VC1aejNSaEV3YjZUSXhfNk5OelFTcmg3bEI5a016WV9KdHZHOTdsdzZhN2c2VF9TTEh3P2tleT1ZbTVJUzFoVWQxUnRMV1pQV1VKVFprZ3lNSEJvVFdGRWFWaGpSMFJS&token=MjkxMTI1",
  ay: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOZ1k1NjU0d2hpdDh1dGlxQS1oYmpodWYxRzRBc1hYLVhRZ1VDRGQzaHNUbEpYdXZmalRQZ2RPT3ZWWkxXZ2N3P2tleT1iMU5yZUc1TVMwbE5aRTB3VWpSSWRrNHdVR00yUWxwNVVIbFNkVlZC&token=MjkxMTI1",
  az: "https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPby1ReV9OZmIwQzZXQVg0bGh5WGV1ME1RSEdGTWlNQ2xrbDRrakVEZVhYaHE4YmZ6Zk13cmp2a09VR0pDVXh3P2tleT1jSFoxY21WbWRXc3dheloxZGpaR1dHMHpUek5YYUVGQ1kwVnJUek4z&token=MjkxMTI1"
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
  aa: "Iron Man 2 (2010)",
  ab: "Iron Man 3 (2013)",
  ac: "Venom - The Last Dance (2024)",
  ad: "Moon Knight S01 (2022)",
  ae: "Shang-Chi and the Legend of the Ten Rings (2021)",
  af: "Captain America - Brave New World (2025)",
  ag: "Alien - Earth S01 (2025)",
  ah: "Alien Vs Predator (2004)",
  ai: "Aliens Vs Predator - Requiem (2007)",
  aj: "Alien Romulus (2024)",
  ak: "Iron Man (2008)",
  al: "The Fantastic Four - First Steps (2025)",
  am: "Guardians of the Galaxy Vol. 3 (2023)",
  an: "Deadpool (2016)",
  ao: "Deadpool 2 (2018)",
  ap: "Deadpool And Wolverine (2024)",
  aq: "Aquaman (2018)",
  ar: "Aquaman and the Lost Kingdom (2023)",
  as: "The Flash (2023)",
  at: "Venom (2018)",
  au: "Venom 2 (2021)",
  av: "Mission Impossible - The Final Reckoning (2025)",
  aw: "Mahavatar Narsimha (2025)",
  ax: "Independence Day Resurgence (2016)",
  ay: "Fast Man (2018)",
  az: "Guardians of the Galaxy (2014)"
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

