// BaseUrl = 'https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg';

import displayData from './dataDisplayFunctions.js';

async function resiveData(data) {

    let photos = await data.photos.photo;
    photos.map(photo => processData(photo))
}

function processData(photo) {

    let id = photo.id;
    let farm = photo.farm;
    let server = photo.server;
    let secret = photo.secret;
    let description = photo.title;

    let imgUrl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_c.jpg`;

    displayData(imgUrl, description);

}

export default resiveData;