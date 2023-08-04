var header = document.querySelector('header');
var footer = document.querySelector('footer');
var container = document.querySelector('.container');

header.style.backgroundColor = "#3b743b";
footer.style.backgroundColor = "#3b743b";
container.style.backgroundColor = "#3b743b";

var section = document.querySelector('section');
section.style.backgroundColor = "#3b743b"; 

var imagenes = ["imagen/arnica.jpeg", 'imagen/aromaBlends.jpeg', 'imagen/calendulaPromo.jpeg', "imagen/enebro.jpeg", 'imagen/eucalipto.jpeg', 'imagen/eucasol.jpeg', "imagen/gelParaManos.jpeg", 'imagen/jengibre.jpeg', 'imagen/neroli.jpg','imagen/teatree.jpg'];

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
    //ARNICA
    `ARNICA
    <del>Precio de lista: $10300.</del>
    Precio actual: $7725`,
    // AROMA BLENDS
    `PRODUCTO AGOTADO
    AROMA BLENDS
    <del>Precio de lista: $6385.</del>
    Precio actual: $4790`,
    //PROMO CREMA CORPORAL
    `EDICION ESPECIAL!!
    CALÉNDULA
    1 CREMA PARA CUERPO +
    1 CREMA PARA LABIOS
    PRECIO: $6500`,
    //ENEBRO
    `ENEBRO
    <del>Precio de lista: $11725.</del>
    Precio actual: $8790`,
    //ACEITE EUCALIPTO
    `ACEITE CORPORAL EUCALIPTO
    <del>Precio de lista: $7745.</del>
    Precio actual: $5810`,
    //EUCASOL 
    `EUCASOL SPRAY
    <del>Precio de lista: $13300.</del>
    Precio actual: $9975`,
    //GEL PARA MANOS
    `GEL PARA MANOS
    <del>Precio de lista: $2990.</del>
    Precio actual: $2242`,
    //JENGIBRE
    `AROMA CARE VITALITY
    JENGIBRE
    <del>Precio de lista: $14885.</del>
    Precio actual: $11163`,
    // ACEITE NEROLI
    `PRODUCTO AGOTADO
    ACEITE NEROLI
    <del>Precio de lista: $11090.</del>
    Precio actual: $8317`,
    // ACEITE TEA TREE
    `EDICION ESPECIAL! $7000`,
  ];
  
  // Reemplaza todos los \n por <br> en cada elemento del array
  imageDescriptions = imageDescriptions.map(description => description.replace(/\n/g, "<br>"));
  
function updateGalleryImage() {
    var seccion = document.querySelector('section');
    var imageUrl = imagenes[currentImageIndex];
    var expandedImg = document.getElementById("expandedImg");
    expandedImg.src = imageUrl;

    var imageDescription = document.getElementById("imageDescription");
    imageDescription.textContent = imageDescriptions[currentImageIndex];
    imageDescription.innerHTML = imageDescriptions[currentImageIndex];
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
