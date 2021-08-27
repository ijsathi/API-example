const loadCountry = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountris(data))
}
loadCountry();

const displayCountris = countries =>{
    // for(const country of countries){
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById('countries')
    countries.forEach(country =>{
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>Capital name: ${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        `
        countriesDiv.appendChild(div)
    })
}

const loadCountryByName= name =>{
    const url =`https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
   .then(res => res.json())
   .then(data => displayCountrisDetails(data[0]))
}
const displayCountrisDetails = country =>{
    const countryDiv = document.getElementById('country-details')
    countryDiv.innerHTML =`
    <h4>Name:${country.name}</h4>
    <p>Population:${country.population}</p>
    <img width="200px" src="${country.flag}">
    `
}

