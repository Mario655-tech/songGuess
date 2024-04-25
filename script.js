const container = document.querySelector("#container")
const text = document.createElement("h1")
const button1 = document.createElement("button")
const button2 = document.createElement("button")
const button3 = document.createElement("button")
const button4 = document.createElement("button")

let lyrics_excerpt, song, randomButtonIndex;
let wrongSongs = [];

fetch('https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=281172')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    lyrics_excerpt = data.lyrics_excerpt;
    song = data.song;
    console.log(song);
    text.textContent = lyrics_excerpt
 
    guess();
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


function guess() {
    randomButtonIndex = Math.floor(Math.random() * 4) + 1;
    console.log(randomButtonIndex)

    switch (randomButtonIndex) {
        case 1:
            button1.textContent = song
            break;
        case 2:
            button2.textContent = song
            break;
        case 3:
            button3.textContent = song
            break;
        case 4:
            button4.textContent = song
            break;
        default:
            song = "Fatal ERR.";
            break;
    }
    generateWrong()
    
}

function generateWrong() {

    const fetchPromises = [];

    for (let i = 0; i < 3; i++) {

    const fetchPromise = fetch('https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=281172')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            wrongSongs.push(data.song);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

        fetchPromises.push(fetchPromise);
        
    }

    Promise.all(fetchPromises)
    .then(() => {
        for (let i = 1; i <= 4; i++) {
            if (i !== randomButtonIndex) {
                const randomIndex = Math.floor(Math.random() * wrongSongs.length);
                switch (i) {
                    case 1:
                        button1.textContent = wrongSongs[randomIndex];
                        break;
                    case 2:
                        button2.textContent = wrongSongs[randomIndex];
                        break;
                    case 3:
                        button3.textContent = wrongSongs[randomIndex];
                        break;
                    case 4:
                        button4.textContent = wrongSongs[randomIndex];
                        break;
                    default:
                        console.error("Fatal error: No button found");
                        break;
                }
                wrongSongs.splice(randomIndex, 1); // Remove used song name from the array
            }
        }
    });
}

container.appendChild(text)
container.appendChild(button1)
container.appendChild(button2)
container.appendChild(button3)
container.appendChild(button4)
