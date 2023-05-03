import { galleryItems } from './gallery-items.js';
// Change code below this line

const galary = document.querySelector(".gallery")


// instance.show()
console.log(galleryItems);
function renderImagies(array){
const template =array.map((el)=>{return `<li class="gallery__item">
<a class="gallery__link" href=${el.original}>
  <img
    class="gallery__image"
    src=${el.preview}
    data-source=${el.original}
    alt=${el.description}
  />
</a>
</li>`})
.join("")
galary.insertAdjacentHTML('beforeend', template)
}
renderImagies(galleryItems)
galary.addEventListener("click", openBig)
function openBig (e){
    e.preventDefault()
    if (e.target.tagName !== "IMG"){
        return
        }
        
    const instance = basicLightbox.create(`
    <img src=${ e.target.getAttribute("src")} width="1600" height="1400">`)


 instance.show()
}