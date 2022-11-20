// console.log('worked');
const loadTemp = city => {
    const api_key = `33d985bc488db86e77e7bcaa73afa692`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayData(data));
    // console.log(url);

}

const setInnerTextById = (id, text) => {
    const desiredField = document.getElementById(id);
    desiredField.innerText = text;
}

const displayData = data => {
    setInnerTextById('city', data.name);
    setInnerTextById('temp', data.main.temp);
    setInnerTextById('atmosphere', data.weather[0].main);
    // const city = document.getElementById('city').innerText = data.name;
    console.log(data.weather[0].main, data);
}

const searchField = document.getElementById('searchField').addEventListener('click', function () {
    const indputFiled = document.getElementById('indputFiled').value;
    loadTemp(indputFiled);
    console.log(indputFiled);
})