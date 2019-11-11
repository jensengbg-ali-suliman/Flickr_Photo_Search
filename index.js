const userInput = document.querySelector('#userInput');
const pageCount = document.querySelector('#pageCount');
const imgDiv = document.querySelector('#imagesContainer');
const lightbox = document.querySelector('#lightboxContainer');
const pageCountMobile = document.querySelector('#pageCountMobile');
const key = '985e63297076c07e10ae790a86b5c7d3';
const baseUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search`;
let text;
let imgPerPage;
let pageIndex = 0;
let loaded = false;
import resiveData from './modules/dataProcessing.js';


pageCount.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        imgDiv.innerHTML = '';
        eventFunction()
    }
})

pageCountMobile.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        imgDiv.innerHTML = '';
        pageCount.value = pageCountMobile.value;
        eventFunction()
    }
})

function eventFunction() {
    pageIndex += 1;
    getData();
}

async function getData() {

    text = userInput.value;
    imgPerPage = pageCount.value;
    let url = `${baseUrl}&api_key=${key}&per_page=${imgPerPage}&page=${pageIndex}&tags=${text}&format=json&nojsoncallback=1`

    let response = await fetch(url, { method: 'GET' });
    let data = await response.json();


    await exportData(data);
}

async function exportData(data) {
    resiveData(data);
    loaded = true;
}


/*
    GET more data on scroll
*/

window.onscroll = e => {

    let length = window.scrollY + window.innerHeight + 10;
    let bodyLength = document.body.offsetHeight;

    if (length >= bodyLength) {
        if (loaded) {
            eventFunction();
            loaded = false;
        }
    }
}

