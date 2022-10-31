import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);

const gallery = document.querySelector('div.gallery')

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

gallery.insertAdjacentHTML('beforeend', createGallery.join(''))

gallery.addEventListener('click', openBigPicture)

function openBigPicture(e) {
    e.preventDefault()
    if (e.taget.nodeName !== 'IMG') {
        return
    }
 const instance = basicLightbox.create
     (`img 
        src = ${e.target.dataset.source}
        alt="${e.taget.alt})"/>`)

instance.show
}
    








// console.log(basicLightbox);

// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `)



// const instance = basicLightbox.create(`
// 	<h1>Not closable</h1>
// 	<p>It's not possible to close this lightbox with a click.</p>
// `, {
// 	closable: false
// })


// const instance = basicLightbox.create(
// 	document.querySelector('div.gallery')
// )

// instance.show()