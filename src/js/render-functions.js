export function renderImages(images, container) {
  container.innerHTML = '';

  const galleryHTML = images
    .map(
      image => `
    <a href="${image.largeImageURL}" class="gallery-item">
      <img src="${image.webformatURL}" alt="${image.tags}" />
      <figcaption class="image-info">
        <div class="info-container">
          <div class="info-block">
            <strong>Likes</strong>
            <span>${image.likes}</span>
          </div>
          <div class="info-block">
            <strong>Views</strong>
            <span>${image.views}</span>
          </div>
          <div class="info-block">
            <strong>Comments</strong>
            <span>${image.comments}</span>
          </div>
          <div class="info-block">
            <strong>Downloads</strong>
            <span>${image.downloads}</span>
          </div>
        </div>
      </figcaption>
    </a>
  `
    )
    .join('');

  container.innerHTML = galleryHTML;

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
