const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const button = document.querySelector("#start");
let links = new Set();

checkboxes.forEach(function(checkbox) {
  checkbox.checked = false;
});

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
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
      links.delete("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=" + this.value);
    }
  });
});

button.addEventListener('click', function() {
  if (links.size > 0) {
    const linksArray = Array.from(links);
    console.log(linksArray);
    localStorage.setItem('links', JSON.stringify(linksArray));
    window.location.href = 'game.html';
  } else {
    console.log("Please select at least one checkbox.");
  }
});
