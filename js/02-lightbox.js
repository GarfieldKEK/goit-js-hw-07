import { galleryItems } from './gallery-items.js';
// Change code below this line
const galary = document.querySelector(".gallery")
function renderImagies(array){
    const template =array.map((el)=>{return `<li class="gallery__item">
    <a class="gallery__link" href=${el.original}>
       <img class="gallery__image" src=${el.preview} alt=${el.description} />
    </a>
 </li>`})
    .join("")
    galary.insertAdjacentHTML('beforeend', template)
    }
    renderImagies(galleryItems)
console.log(galleryItems);

const lightBox = new SimpleLightbox(".gallery__link", {
   captionDelay: 250,
   captionsData: "alt"
})