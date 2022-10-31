import { galleryItems } from './gallery-items.js';
// Change code below this line



console.log(basicLightbox);

const instance = basicLightbox.create(`
	<h1>Dynamic Content</h1>
	<p>You can set the content of the lightbox with JS.</p>
`)

instance.show()

console.log(galleryItems);

const gallery = document.querySelector('.div-gallery')

const createGallery =

    galleryItems.map(({ preview, original, description }) =>

`<div class= "gallary__item">
<a class = "gallery__link" href = ${original}>
<img
class="gallery__image"
src=${preview}    
data-source=${original}
alt=${description}
/>
</a>
</div>`)
