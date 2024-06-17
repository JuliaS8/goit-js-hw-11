import SimpleLightbox from 'simplelightbox';

export function renderImages(images) {
  const galleryContainer = document.getElementById('gallery-container');
  galleryContainer.innerHTML = '';

  images.forEach(image => {
    const figureElement = document.createElement('figure');
    figureElement.classList.add('gallery-item');

    const linkElement = document.createElement('a');
    linkElement.href = image.largeImageURL;

    const imgElement = document.createElement('img');
    imgElement.src = image.webformatURL;
    imgElement.alt = image.tags;

    linkElement.appendChild(imgElement);
    figureElement.appendChild(linkElement);

    const figcaption = document.createElement('figcaption');
    figcaption.textContent = `Likes: ${image.likes}, Views: ${image.views}, Comments: ${image.comments}, Downloads: ${image.downloads}`;
    figureElement.appendChild(figcaption);

    galleryContainer.appendChild(figureElement);
  });

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    closeText: '×',
    history: false,
  });
  lightbox.refresh();
}
