
function generateStory(event) {
    event.preventDefault();

    new Typewriter("#story", {
        strings: "The story goes here",
        autoStart: true,
        delay: 1,
        cursor:"",
    })
}


let storyFormElement = document.querySelector("#story-generator");
storyFormElement.addEventListener("submit", generateStory);