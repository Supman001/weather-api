function makeRequest() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'js/index.jsx');
    xmlhttp.send();
    xmlhttp.onreadystatechange = (event) => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById('loadContent').innerText = xmlhttp.response;
        } else {
            document.getElementById('loadContent').innerText = 'Request failed';
        }
    }
}
function loadComments() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xmlhttp.send();
    xmlhttp.onreadystatechange = (event) => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            const resp  = xmlhttp.response;
            console.log(JSON.parse(resp));
            console.log(resp);
        }
    }
}