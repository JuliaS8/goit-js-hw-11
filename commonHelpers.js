import{i}from"./assets/vendor-482df00d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();window.global=window;const c="44431480-fc282bb92f0a21d0f4ab058ec";async function l(n){const r=`https://pixabay.com/api/?key=${c}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const o=await fetch(r);if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);return(await o.json()).hits}catch(o){throw console.error("Fetch error:",o),new Error(`Failed to fetch images: ${o.message}`)}}function d(n,r){r.innerHTML="";const o=n.map(e=>`
    <a href="${e.largeImageURL}" class="gallery-item">
      <img src="${e.webformatURL}" alt="${e.tags}" />
      <figcaption class="image-info">
        <div class="info-container">
          <div class="info-block">
            <strong>Likes</strong>
            <span>${e.likes}</span>
          </div>
          <div class="info-block">
            <strong>Views</strong>
            <span>${e.views}</span>
          </div>
          <div class="info-block">
            <strong>Comments</strong>
            <span>${e.comments}</span>
          </div>
          <div class="info-block">
            <strong>Downloads</strong>
            <span>${e.downloads}</span>
          </div>
        </div>
      </figcaption>
    </a>
  `).join("");r.innerHTML=o,new SimpleLightbox(".gallery a",{captions:!1,closeText:"×",history:!1}).on("changed.simplelightbox",e=>{const t=e.prevItem;t&&(t.content.innerHTML="")})}document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("search-form"),r=document.getElementById("gallery"),o=document.getElementById("loader");n?n.addEventListener("submit",async e=>{e.preventDefault();const t=document.getElementById("search-query").value.trim();if(!t){s("Please enter a search query");return}try{o.classList.add("loader-show"),r.innerHTML="";const a=await l(t);a.length===0?s("Sorry, there are no images matching your search query. Please try again!"):d(a,r)}catch{s("Failed to fetch images. Please try again later.")}finally{o.classList.remove("loader-show")}}):console.error("Search form not found");function s(e){i.error({message:e,position:"topRight",timeout:5e3,messageColor:"#fff",backgroundColor:"#EF4040",theme:"dark",icon:"none"})}});
//# sourceMappingURL=commonHelpers.js.map
