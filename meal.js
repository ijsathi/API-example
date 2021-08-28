const searchFood = ()=>{
    const searchFeild = document.getElementById('search-feild')
    const searchText = searchFeild.value;
    console.log(searchText);
    searchFeild.value = '';
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
}
const displaySearchResult = meals =>{
    const searchResult = document.getElementById('search-result')
    searchResult.innerHTML = '';
    
    meals.forEach(meal =>{
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML =`
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
        </div>
        `
        searchResult.appendChild(div)
    })
}

const loadMealDetail =async mealId =>{
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0])
    // fetch(url)
    // .then(res => res.json())
    // .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal =>{
    // console.log(meal);
    const mealDetails = document.getElementById('meal-details')
    mealDetails.textContent =''
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML =` 
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title"${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `
    mealDetails.appendChild(div)
}