document.addEventListener("DOMContentLoaded", function(){
    let animals = ['�?','??','?�랑??','?�끼','??','�?','�?','??','?�숭??','??','�?','?��?'];
    let year = getParameter('year') == '' ? 1 : getParameter('year');
    let id = `rtan${year}`;
    let animal = animals[year-1];
    document.getElementById(id).style.display = 'block';
    document.getElementsByClassName('rtan')[0].innerHTML = animal;
    document.getElementsByClassName('rtan')[0].style.backgroundImage = `url('https://new-year.spartacodingclub.kr/images/yearS${year}.png')`;
    document.getElementsByTagName('h1')[0].innerHTML = `2021?? ${animal}?�의 ?�세??!`;
});
function getParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}