const container = document.querySelector("#container")
const containerText = document.querySelector("#text")
const containerButtons = document.querySelector("#buttons")
const row1 = document.querySelector("#row1")
const row2 = document.querySelector("#row2")
const text = document.createElement("h1")
const button1 = document.createElement("button")
const button2 = document.createElement("button")
const button3 = document.createElement("button")
const button4 = document.createElement("button")

const url = "https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=124218"
let lyrics_excerpt, song, randomButtonIndex;
let wrongSongs = [];
start()

function start() {
    fetch(url)
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
}

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

    const fetchPromise = fetch(url)
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

button1.addEventListener("click", () => {
    check(1)
})

button2.addEventListener("click", () => {   
    check(2)
})

button3.addEventListener("click", () => {
    check(3)
})

button4.addEventListener("click", () => {
    check(4)
})

function check(buttonID) {
    switch (buttonID) {
        case 1:
            if (button1.textContent === song) {
                console.log("Tocno!")
                start()
                correctEvent()
            } else {
                console.log("Nije Tocno.")
                start()
                falseEvent()
            }
            break;
        case 2:
            if (button2.textContent === song) {
                console.log("Tocno!")
                start()
                correctEvent()
            } else {
                console.log("Nije Tocno.")
                start()
                falseEvent()
            }
            break;
        case 3:
            if (button3.textContent === song) {
                console.log("Tocno!")
                start()
                correctEvent()
            } else {
                console.log("Nije Tocno.")
                start()
                falseEvent()
            }
            break;
        case 4:
            if (button4.textContent === song) {
                console.log("Tocno!")
                start()
                correctEvent()
            } else {
                console.log("Nije Tocno.")
                start()
                falseEvent()
            }
            break;
    }
}

function correctEvent() {
    container.style.backgroundColor = "rgb(115, 158, 130)";
    setTimeout(function() {
        container.style.backgroundColor = "rgb(70, 83, 98)";
    }, 500);

}

function falseEvent() {
    container.style.backgroundColor = "rgb(237, 37, 78)";
    setTimeout(function() {
        container.style.backgroundColor = "rgb(70, 83, 98)";
    }, 500);
}

containerText.appendChild(text)
row1.appendChild(button1)
row1.appendChild(button2)
row2.appendChild(button3)
row2.appendChild(button4)

container.appendChild(containerText)
container.appendChild(containerButtons)

