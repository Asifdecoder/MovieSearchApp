let input = document.querySelector("input");
let button = document.querySelector("button");
let movieData = document.querySelector(".movieData");

button.addEventListener("click", function () {
  let searchText = input.value;
  clearScreen()

  fetchapi(searchText);

  

  searchText = "";


});



function fetchapi(searchText) {
  fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // for( item of data){

      //     console.log(item.show.image.original)

      // }

      ManipulateDom(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function ManipulateDom(data) {
  var movieData = document.querySelector(".movieData");

  for (items of data) {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movieElement");

    movieElement.innerHTML = `

            

            <img src= "${items.show.image.original}">
                

            <h1>${items.show.name}</h1>
            ${items.show.summary}
            
        
        `;
        movieData.appendChild(movieElement);
    console.log(items.show.name);

    //  

    // console.log("inside")
  }
}

function clearScreen() {
  while (movieData.firstChild) {
    
    movieData.removeChild(movieData.firstChild);
  }
}
