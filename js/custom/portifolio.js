var photosIndex = 0;
var galleryPhotos = [
  "imgs/gal/g1.jpeg",
  "imgs/gal/g2.jpeg",
  "imgs/gal/g3.jpeg",
  "imgs/gal/g4.jpeg",
  "imgs/gal/g5.jpeg",
  "imgs/gal/g6.jpeg",
  "imgs/gal/g7.jpeg",
  "imgs/gal/g8.jpeg",
  "imgs/gal/g9.jpeg",
  "imgs/gal/g10.jpeg",
  "imgs/gal/g11.jpeg",
  "imgs/gal/g12.jpeg",
  "imgs/gal/g13.jpeg",
  "imgs/gal/g14.webp",
];

createGallery();

function createGallery() {
  for(var i=0; i < galleryPhotos.length; i++) {
    var photo = document.createElement("div");
    var imgPhoto = document.createElement("div");
    
    photo.classList.add("portif-photo");
    imgPhoto.classList.add("portif-img");
    imgPhoto.classList.add("z-depth-1");
    imgPhoto.classList.add("materialboxed");
    imgPhoto.style.backgroundImage = 'url('+galleryPhotos[i]+')';

    photo.appendChild(imgPhoto);
    document.getElementById('portif-photos').appendChild(photo);
  }
}