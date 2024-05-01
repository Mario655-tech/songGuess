const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const button = document.querySelector("#start");
let links = new Set(); // Using Set to store unique values

// Uncheck all checkboxes on page load
checkboxes.forEach(function(checkbox) {
  checkbox.checked = false;
});

// Adding event listener to each checkbox
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      // If the checkbox is checked, add its value to links set
      switch(this.value) {
        case "1":
          links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=124218");
          break;
        case "2":
          links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=74293");
          break;
        case "3":
            links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=168560");
            break;
        case "4":
            links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=281172");
            break;
        case "5":
            links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=117478");
            break;
        case "6":
            links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=122538");
            break;
        case "7":
            links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=140080");
            break;
        case "8":
            links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=51914");
            break;
        case "9":
            links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=90795");
            break;            
        case "10":
            links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=456144");
            break;           
        case "11":
            links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=116238");
            break;   
        case "12":
            links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=179570");
            break;   
        case "13":
            links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=9");
            break;   
        case "14":
            links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=70");
            break; 
        case "15":
            links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=2");
            break;  
        case "16":
            links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=21");
            break;  
        case "17":
            links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=94");
            break; 
        case "18":
            links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=148736");
            break;  
        case "19":
            links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=113873");
            break;
        case "20":
            links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=98818");
            break;
        case "21":
            links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=61557");
            break;
        case "22":
            links.add("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=118271");
            break;                      
      }
    } else {
      // If the checkbox is unchecked, remove its value from links set
      links.delete("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=" + this.value);
    }
  });
});

// Adding event listener to the button
button.addEventListener('click', function() {
  if (links.size > 0) {
    // Convert set to array
    const linksArray = Array.from(links);
    console.log(linksArray);
    localStorage.setItem('links', JSON.stringify(linksArray));
    // Redirect to the other page
    window.location.href = 'game.html';
  } else {
    console.log("Please select at least one checkbox.");
  }
});
