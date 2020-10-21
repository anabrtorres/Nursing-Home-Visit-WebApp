// create map
const map = L.map('mapid').setView([-20.1413335, -44.8761516], 16);

// create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

// create and add marker
let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photos input
function addPhotoField() {
  // catch photo container #images
  const container = document.querySelector("#images");

  // duplicate container .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // clone last image container
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // verify empty field
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }

  // clean field
  input.value = "";

  // add clone to container #images
  container.appendChild(newFieldContainer);
}

// delet field
function deleteField(event) {
  const span = event.currentTarget;

  const fieldContainer = document.querySelectorAll(".new-upload");

  if (fieldContainer.length < 2) {
    //clean field value
    span.parentNode.children[0].value = "";
    return;
  }

  // deleting field
  span.parentNode.remove();
}

// select yes or no button
function toggleSelect(event) {
  // remove .active
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  }); // same as === .forEach(button => button.classList.remove('active'))

  // add .active
  const button = event.currentTarget;
  button.classList.add("active");

  // atualize input hidden with choosen value
  const input = document.querySelector('[name="open-on-weekends"]');

  input.value = button.dataset.value;
}

function validate(event) {
  // validar preenchimento de lat e lng
  const verification = document.querySelector('.map-container input');

  if(verification.value == "") {
    event.preventDefault();
    alert("Selecione um local no mapa!");
  }
  
}