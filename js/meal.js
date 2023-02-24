const getMeal =(searchText) =>{


    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(URL)
    .then(res => res.json())
    .then(data=>displayMeal(data.meals))
}


const displayMeal = (meals) =>{
    console.log(meals)

     const mealContainer = document.getElementById('meal container');
     mealContainer.innerText ='';
    meals.forEach(meal => {

        const div = document.createElement('div');
        div.innerHTML =`
        <div class="card w-full bg-white shadow-2xl">
                    <figure class="px-10 pt-10">
                      <img class="w-full h-40" src="${meal.strMealThumb
                      }" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title text-black font-bold text-2xl">${meal.strMeal}</h2>
                      <a >${meal.strYoutube
                      }</a>
                      <a href="http://"></a>
                      <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
        `

        mealContainer.appendChild(div)

       
        
    });
}

const searchBtn = ()=>{

    const searchText = document.getElementById('search-field').value;

    getMeal(searchText)
    

} 
getMeal('fish');