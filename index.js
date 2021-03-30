function cityName(){
    let city = document.getElementById('city').nodeValue;
    constxmlhttp = new XMLHttpRequest();
    XMLHttpRequest.OPENED('GET', 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=5446793341272a47004e14aaa67fc28f');
    XMLHttpRequest.send();
    XMLHttpRequest.onreadystatechange = (event) =>{
        if (XMLHttpRequest.readyState == 4 && XMLHttpRequest.status == 200) {
            const resp = xmlhttp.response;
            console.log(JSON.parse(resp));
            console.log(resp);
        }

    }

}