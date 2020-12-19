
console.log('%c HI', 'color: firebrick')
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded", () => {
    fetchDogs()
    fetchBreeds()
    filterBreeds()
  });

  function filterBreeds() {
    let ass = document.getElementById("breed-dropdown")
     ass.addEventListener("change", function() {
      let list = document.getElementsByTagName('button')
      let value = ass.value
      for (const element of list) {
        element.style.visibility = "visible"
        if (!element.innerText.startsWith(value, 0)) {
          element.style.visibility = "hidden";
        } 
       }
     })
  }
function fetchDogs() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(json => createImages(json))
  
   
  
}
 
function createImages(images) {
    
    let gallery = document.getElementById("dog-image-container")
   
    images.message.forEach(image => {
        let x = document.createElement("IMG");
         x.src = image
        gallery.appendChild(x)
    })
     
}

function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(json => createBreeds(json))
}

function createBreeds(json) {
    let breedList = document.getElementById("dog-breeds")
    let breedArray = json.message
    let list = []

    Object.entries(breedArray).forEach(breed => {
      let key = breed[0];
      let value = breed[1]

      let newLine = document.createElement("LI");
        breedList.appendChild(newLine)
        let breedName = document.createElement("button") 
        breedName.innerText = key
        newLine.appendChild(breedName)
        breedName.addEventListener("click", function() {
           if (breedName.style.color == "red") {
            breedName.style.color = "black";
           } else {
            breedName.style.color = "red";
           }
         })

       if (value.length != 0) {
        let subCat = document.createElement('UL')
        breedName.appendChild(subCat)
          for (const element of value) {
            let subBreed = document.createElement("LI");
            subBreed.innerText = element 
            subCat.appendChild(subBreed)
          } 
       }
      
    });
  }