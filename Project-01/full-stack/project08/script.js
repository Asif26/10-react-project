// Dom Elements 
const search = document.getElementById('search');
const submit = document.getElementById('submit');
const generate = document.getElementById('generate');
const meals = document.getElementById('meals');
const resultsHeading = document.getElementById('results-heading');
const selectedMeal = document.getElementById('selected-meal');


// const new1 =[search, submit,generate, meals, resultsHeading, selectedMeal];

function searchMeal(e){

    e.preventDefault()

    const searchText = search.value;
   if(searchText.trim()){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        resultsHeading.innerHTML = `<h2>Search results for ${searchText}</h2>`;

        if(data.meals === null){
            resultsHeading.innerHTML = `<h2>no result found for ${searchText}</h2>`;
        }else{
            meals.innerHTML = data.meals.map(meal =>
                `<div class="meal">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                    <div class="meal-info" data-mealID="${meal.idMeal}">
                    <h3> ${meal.strMeal} </h3></div>
                </div>`
            ).join('')
        }

    });
    search.value= ""
   }else{
    alert('Please enter search keyword');
   }



};


submit.addEventListener('submit', searchMeal)

