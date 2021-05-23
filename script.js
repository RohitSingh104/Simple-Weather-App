const inputBox = document.getElementById('inputBox');
const submit = document.getElementById('btn');
const API_key = "0b13903c1cdda2cf75e06a22c8bf9533 ";
submit.addEventListener('click', function () {
    const location = document.getElementById('location');
    const cloud = document.getElementById('cloud-status');
    const temp = document.getElementById('temp');
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}&units=metric&appid=${API_key}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
                console.log(data)
                cloud.innerText = data.weather[0].description
                location.innerText = data.name
                temp.innerText = data.main.temp

            }


        )
    inputBox.value = '';

})