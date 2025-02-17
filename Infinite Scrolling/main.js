const container = document.getElementById("container");
const loading = document.getElementById("loading");
let imageCount = 0; // Tracks the total images loaded
const imagesPerLoad = 10;

// Fetch images from API
async function fetchImages(count = imagesPerLoad) {
  loading.style.display = "block"; // showing the loader

  try {
    const response = await fetch(`https://picsum.photos/v2/list?page=${Math.ceil(imageCount / count) + 1}&limit=${count}`);
    const images = await response.json();

    imageCount += images.length;
    renderImages(images);
  } catch (error) {
    console.error("Error fetching images:", error);
  } finally {
    loading.style.display = "none"; // removing the loader once data loads
  }
}

// Render images in the container
function renderImages(images) {
  images.forEach((image) => {
    const card = document.createElement("div");
    card.className = "image-card";

    const img = document.createElement("img");
    img.src = image.download_url;
    img.alt = `Image by ${image.author}`;

    const title = document.createElement("p");
    title.textContent = `Photo by ${image.author}`;

    card.appendChild(img);
    card.appendChild(title);
    container.appendChild(card);
  });
}

// Infinite scroll logic
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 10) {
    fetchImages();
  }
});

// Initial load
fetchImages();
