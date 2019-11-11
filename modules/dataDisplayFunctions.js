const imgDiv = document.querySelector('#imagesContainer');
const lightbox = document.querySelector('#lightboxContainer');
const lightboxImg = document.querySelector('#lightboxImg');
const lightboxDesc = document.querySelector('#lightboxDesc');

function displayData(url, desc) {

    let imgElement = `<img class="gridImg" src="${url}" alt="${desc}"/>`;
    imgDiv.innerHTML += imgElement;
    let imgTags = document.querySelectorAll('img');
    imgTags.forEach(img => img.addEventListener('click', e => lightboxView(e)));

}

/*
    Open lightbox function
 */

function lightboxView(e) {

    let target = e.target;

    lightbox.classList.add('shown');
    lightboxDesc.innerHTML = target.alt;
    lightboxImg.src = target.src;
}

/*
    Close lightbox function
 */

lightbox.addEventListener('click', function (e) {
    let target = e.target;
    if (target == this) {
        lightbox.classList.remove('shown');
    }
})

export default displayData;