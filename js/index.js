var header = document.querySelector('header');
var footer = document.querySelector('footer');
var container = document.querySelector('.container');

header.style.backgroundColor = "#3b743b";
footer.style.backgroundColor = "#3b743b";
container.style.backgroundColor = "#3b743b";

var section = document.querySelector('section');
section.style.backgroundColor = "#5f32a2"; 

var imagenes = ["imagen/arnica.jpeg", 'imagen/aromaBlends.jpeg', 'imagen/calendulaPromo.jpeg', "imagen/enebro.jpeg", 'imagen/eucalipto.jpeg', 'imagen/eucasol.jpeg', "imagen/arnica.jpeg", 'imagen/gelParaManos.jpeg', 'imagen/jengibre.jpeg', 'imagen/neroli.jpg'];

function changeImage() {
    var seccion = document.querySelector('section');
    var currentIndex = imagenes.findIndex(image => seccion.style.backgroundImage.includes(image));
    var nextIndex = (currentIndex + 1) % imagenes.length;
    seccion.style.backgroundImage = 'url(' + imagenes[nextIndex] + ')';
    seccion.style.backgroundSize = 'contain';
    seccion.style.backgroundPosition = 'center';
}

setInterval(changeImage, 3000);

var currentImageIndex = 0;

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imagenes.length;
    updateGalleryImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imagenes.length) % imagenes.length;
    updateGalleryImage();
}
var imageDescriptions = [
    "Esta es una descripción para el producto Arnica.",
    "Esta es una descripción para el producto Aroma Blends.",
    "Esta es una descripción para el producto Calendula Promo.",
    "Esta es una descripción para el producto Enebro.",
    "Esta es una descripción para el producto Eucalipto.",
    "Esta es una descripción para el producto Eucasol.",
    "Esta es una descripción para el producto Arnica.",
    "Esta es una descripción para el producto Gel para manos.",
    "Esta es una descripción para el producto Jengibre.",
    "Esta es una descripción para el producto Neroli."
];
function updateGalleryImage() {
    var seccion = document.querySelector('section');
    var imageUrl = imagenes[currentImageIndex];
    var expandedImg = document.getElementById("expandedImg");
    expandedImg.src = imageUrl;

    var imageDescription = document.getElementById("imageDescription");
    imageDescription.textContent = imageDescriptions[currentImageIndex];
}
function openGallery() {
    var seccion = document.querySelector('section');
    var imageUrl = seccion.style.backgroundImage.match(/url\("(.+)"\)/)[1];

    var gallery = document.getElementById("gallery");
    var expandedImg = document.getElementById("expandedImg");
    expandedImg.src = imageUrl;
    gallery.style.display = "block";

    updateGalleryImage();
}
function closeGallery() {
    var gallery = document.getElementById("gallery");

    if ('ontouchstart' in window || navigator.msMaxTouchPoints) {
        // touch
        gallery.style.display = "none";
    } else {
        // click
        gallery.style.display = "none";
        var expandedImg = document.getElementById("expandedImg");
        expandedImg.src = ""; 
    }
}



function changeAllColors() {
    var allColorInput = document.getElementById("allColor");
    var header = document.querySelector('header');
    var body = document.body;
    var footer = document.querySelector('footer');

    var allColor = allColorInput.value;

    header.style.backgroundColor = allColor;
    body.style.backgroundColor = allColor;
    footer.style.backgroundColor = allColor;
}
function changeSectionColor() {
    var sectionColorInput = document.getElementById("sectionColor");
    var section = document.querySelector('section');
    section.style.backgroundColor = sectionColorInput.value;
}
