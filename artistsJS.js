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
