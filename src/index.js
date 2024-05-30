function displayStory(response) {
    new Typewriter("#story", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor:"",
    })  
}




function generateStory(event) {
    event.preventDefault();

//build the API URL

let instructionsInput = document.querySelector("#user-instructions");

let apiKey="tee233ebaaa4783bff41331b36o08895";
let prompt=`Generate short Spanish bedtime story for kids about ${instructionsInput.value}`;
let context=`You are a bedstory expert. Please provide short bedtime story in Spanish for small kids and use emoticons to replace a few words in the story.Make sure to follow the user instructions. Use the ${instructionsInput.value} inside a <strong> element every time it appears in the story`;
let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

let storyElement = document.querySelector("#story");
storyElement.classList.remove("hidden");
storyElement.innerHTML = `<div class="generating"> ⏳ Generating Spanish bedtime story about "${instructionsInput.value}"</div>`

axios.get(apiUrl).then(displayStory);    
}


let storyFormElement = document.querySelector("#story-generator");
storyFormElement.addEventListener("submit", generateStory);