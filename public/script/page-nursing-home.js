const options = {
    draggings: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
};

// create map
const map = L.map('mapid', options).setView([-20.1413335,-44.8761516], 16);

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
.marker([-20.1413335,-44.8761516], {icon})
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