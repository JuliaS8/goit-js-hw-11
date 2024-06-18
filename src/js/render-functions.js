import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(images, container) {
  container.innerHTML = '';

  images.forEach(image => {
    const link = document.createElement('a');
    link.href = image.largeImageURL;
    link.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = image.webformatURL;
    img.alt = image.tags;

    const figcaption = document.createElement('figcaption');
    figcaption.textContent = `Likes: ${image.likes}, Views: ${image.views}, Comments: ${image.comments}, Downloads: ${image.downloads}`;

    link.appendChild(img);
    link.appendChild(figcaption);
    container.appendChild(link);
  });

  const gallery = new SimpleLightbox('.gallery a', {
    captions: false,
    closeText: '×',
    history: false,
  });

  gallery.on('changed.simplelightbox', e => {
    const prevItem = e.prevItem;

    if (prevItem) {
      prevItem.content.innerHTML = '';
    }
  });
}
