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
                       
                        <label  onclick="getModal(${meal.idMeal})" for="modal" class="btn btn-primary">More Details</label>
                      </div>
                    </div>
                  </div>
        `

        mealContainer.appendChild(div)

       
        
    });
}

const getModal = (idMeal)=>{
    
    console.log('clicked')
    console.log(idMeal)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayModal(data.meals[0]))
}

const displayModal = (meal)=>{


 document.getElementById('modal-header').innerText= meal.strMeal;
 const mealBody = document.getElementById('modalBody');
 mealBody.innerHTML = `
 <img class="w-40 h-40" src="${meal.strMealThumb
 }" alt="Shoes" class="rounded-xl" />
 <h3 class="card-title text-white font-bold text-xl">Catagory: ${meal.strCategory} </h3>
 <h3 class="card-title text-white font-bold text-xl">Orgin: ${meal.strArea} </h3>

 `

}
const searchBtn = ()=>{

    const searchText = document.getElementById('search-field').value;
   

    getMeal(searchText)
    

} 
getMeal('fish');