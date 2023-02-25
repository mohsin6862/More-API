const getCountry = (searchText)=>{
    const url = `https://restcountries.com/v2/name/${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountry(data.slice(0,6)))
}

const displayCountry = (countries)=> {
     const countryContainer = document.getElementById('country-container');
     countryContainer.innerText = '';
    countries.forEach(country => {
      
        console.log(country)
       const div = document.createElement('div');
       div.innerHTML = `
       <div class="card w-full bg-white shadow-2xl">
       <figure class="px-10 pt-10">
         <img class="w-full h-40" src="${country.flags.png}" alt="Shoes" class="rounded-xl" />
       </figure>
       <div class="card-body items-center text-center">
         <h2 class="card-title text-black font-bold text-2xl">${country.name}</h2>
         <h3 class="card-title text-black font-bold text-xl">Capital: ${country.capital}</h3>
         <h4 class="card-title text-black font-bold text-lg">Region: ${country.region}</h4>
         <h4 class="card-title text-black font-bold text-lg">Area: ${country.area}</h4>
         
      
         <div class="card-actions">
          
         <button class="btn btn-primary">details</button>
         </div>
       
       `
       countryContainer.appendChild(div);
        
    });

}

const searchBtn = ()=>{

    const searchText = document.getElementById('search-field').value;
    getCountry(searchText)
}


getCountry('bangladesh');