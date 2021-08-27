const searchFood = ()=>{
    const searchFeild = document.getElementById('search-feild')
    const searchText = searchFeild.value;
    // console.log(searchText);
    searchFeild.value = '';
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
}
const displaySearchResult = meals =>{
    const searchResult = document.getElementById('search-result')
    meals.forEach(meal =>{
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML =`
        <div class="card h-100">
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