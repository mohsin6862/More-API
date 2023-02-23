const getRandomUsers =()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then( res => res.json())
    .then(data => displayRandomUsers(data))
}

const displayRandomUsers = (users)=>{

    const gender = document.getElementById('gender');
    gender.innerHTML = users.results[0].gender;

    const name =users.results[0].name.title + " " + users.results[0].name.first + " " + users.results[0].name.last;
    document.getElementById('name').innerText = name;

    const image = users.results[0].picture.large;
    document.getElementById('image').innerText = image;

    const location = users.results[0].location.city + ','+ users.results[0].location.country
    ;
    document.getElementById('location').innerHTML = location;

    console.log(users);
}

getRandomUsers();