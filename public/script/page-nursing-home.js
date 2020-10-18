const spanLat = document.querySelector('span[data-lat]')
const spanLng = document.querySelector('span[data-lng]')
const options = {
    draggings: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
};

// get values from html options
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// create map
const map = L.map('mapid', options).setView([lat, lng], 16);

// create and add tile layer
L
.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

// create icon
const icon = L.icon ({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create and add marker
L
.marker([lat, lng], {icon})
.addTo(map)


// image galery
function selectImage(event) {
    const button = event.currentTarget

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove("active")
    })

    const image = button.children[0]
    const imageContainer = document.querySelector(".asylum-details > img")

    imageContainer.src = image.src

    button.classList.add("active")
}

// delete confirmations
function confirmation(id) {
    var resposta = confirm("Deseja remover esse local?");
     if (resposta == true) {
        window.location.href='/delete-nursing-home/'+id;
     }
}