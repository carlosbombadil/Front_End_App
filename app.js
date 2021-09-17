
//DOM Manipulation*************************************************************************************************
const catInfoEl = document.getElementById('catInfo');

const catParagraph = document.createElement('p');
catInfoEl.appendChild(catParagraph);

const catPic = document.createElement('img');
catInfoEl.appendChild(catPic);


//****************************************************************************************************************


//User Input | $.get  &  API  |*************************************************************************************************

function clickSearch() {

  const userInput = document.getElementById('textBox').value; //What user types in search box, stored as a string.

  $.get("https://api.thecatapi.com/v1/breeds", (data) => {
    const catBreedData = (data) // The data comes to us in JSON format, it must be parsed in to a object that we can use
    console.log(catBreedData, 'here are your cats');
    
    const catArray = [];

    for (var i = 0; i < catBreedData.length; i++) {
      catArray.push(catBreedData[i].name.toLowerCase());
    }
    if (catArray.includes(userInput.toLowerCase())) {
      //naming convention for all cats
      for (var i = 0; i < catBreedData.length; i++) {
        const catName = catBreedData[i].name;
        const catWeight = catBreedData[i].weight.imperial;
        const catImage = catBreedData[i].image.url;
        const catOrigin = catBreedData[i].origin;
        const catDescription = catBreedData[i].description;
        console.log(catName);

        if (userInput.toLowerCase() === catName.toLowerCase()) {
          catParagraph.innerHTML = catName + '!' + ' This feline originates from ' + catOrigin + '. ' + catDescription + '.';
          catPic.src = catImage;
        }
      }
    }else {
      alert("Make sure to insert a cat breed.");
    }     

  })

}
//********************************************************************************************************************

//Accessed @ cat_images_appn.surge.sh


/*
$.ajax("https://www.weather.com/api/location/search/?query=san", {
  success: (data) => {
    weatherStats = data;
  }
});

function clickSearch() {
  console.log(weatherStats);
}


$.ajax({
  url: "https://app.asana.com/-/api/0.1/workspaces/",
  type: 'GET',
  dataType: 'json', // added data type,
  contentType: "application/json; charset=utf-8",
  success: function(res) {
      console.log(res);
      alert(res);
  }
}); */


/*
$.get("https://api.thecatapi.com/v1/breeds", (data) => {
        const results = (data) // The data comes to us in JSON format, it must be parsed in to a object that we can use
        console.log(results, 'here are your cats');
        const resultZero = results[0];
        console.log(resultZero);
        const catWeight = resultZero.weight;
        console.log(catWeight);

})
*/

