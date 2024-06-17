import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = new SimpleLightbox('.gallery a');

  const searchForm = document.getElementById('search-form');
  const galleryContainer = document.getElementById('gallery-container');

  if (searchForm) {
    searchForm.addEventListener('submit', async event => {
      event.preventDefault();
      const query = document.getElementById('search-query').value.trim();
      if (!query) {
        showError('Please enter a search query');
        return;
      }

      try {
        const images = await fetchImages(query);
        if (images.length === 0) {
          showError(
            'Sorry, there are no images matching your search query. Please try again!'
          );
        } else {
          renderImages(images);
        }
      } catch (error) {
        showError('Failed to fetch images. Please try again later.');
      }
    });
  } else {
    console.error('Search form not found');
  }

  function showError(message) {
    iziToast.error({
      message: message,
      position: 'topRight',
      timeout: 5000,
      messageColor: '#fff',
      backgroundColor: '#EF4040',
      theme: 'dark',
      icon: 'none',
    });
  }
});
