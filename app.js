const inputText = document.getElementsByClassName("input-text")[0];
const inputButton = document.getElementsByClassName("input-button")[0];
const showOutputs = document.getElementsByClassName("show-outputs")[0];
const inputForm = document.getElementsByClassName("input-form")[0];

console.log(showOutputs);

let searchOutputList = [];

function AddEventListenerFunction() {

    inputForm.addEventListener("submit",function (e) {
        fetchImages(inputText.value);
        e.preventDefault();
    })
 
}

function clearImages() {
  showOutputs.innerHTML = ""; // Clear the existing images
}

function fetchImages(term) {
  clearImages();

  // Fetch new images using the API
  const accessKey = "jQY2lqbTtNUdGkLMRTHTfzkqUT3787BWtBMl-itj8DI";
  fetch(`https://api.unsplash.com/search/photos?query=${term}`, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const newImages = data.results;
      newImages.forEach((image) => {
        const imgElement = document.createElement("img");
        imgElement.src = image.urls.regular;
        imgElement.alt = image.description;
        imgElement.width = 300;
        imgElement.height = 300;

        showOutputs.appendChild(imgElement);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

AddEventListenerFunction();
