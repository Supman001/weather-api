
button = document.getElementById('btnApi');
button.addEventListener('click', cityName)

function cityName(e){
    let city = document.getElementById('city').value;
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=5446793341272a47004e14aaa67fc28f');
    xmlhttp.send();

    xmlhttp.onreadystatechange = (event) =>{
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            const resp = xmlhttp.response;
            const result = JSON.parse(resp);
            console.log(result);

            let cityvalue = result.name;
            document.querySelector('.city').innerHTML = cityvalue;
            let timevalue = result.timezone;
            document.querySelector('.timezone').innerHTML = timevalue;
            let weatherdescription = result.weather[0].main;
            document.querySelector('.description').innerHTML = weatherdescription;
            document.querySelector('.main').innerHTML = result.weather[0].description;
        }
        

    }


}