const productImage = document.querySelector('.product-image');
const zoomView = document.querySelector('.zoom-view');
const zoomIndicator = document.querySelector('.zoom-indicator');
const imageWrapper = document.querySelector('.image-wrapper');

productImage.addEventListener('mousemove', (event) => {
  const rect = productImage.getBoundingClientRect();

  // Get mouse position relative to the image
  const xPosition = event.clientX - rect.left;
  const yPosition = event.clientY - rect.top;

  // Calculate the percentage positions for zoom view
  const xPercent = (xPosition / rect.width) * 100;
  const yPercent = (yPosition / rect.height) * 100;

  // Set the zoom view background and position
  zoomView.style.backgroundImage = `url(${productImage.src})`;
  zoomView.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
  

  // Show and move the zoom indicator
  zoomView.style.display="block";
  zoomIndicator.style.display = 'block';
  zoomIndicator.style.left = `${xPosition}px`;
  zoomIndicator.style.top = `${yPosition}px`;
});

productImage.addEventListener('mouseleave', () => {
  // Clear the zoom view and hide the indicator
  zoomView.style.backgroundImage = 'none';
  zoomIndicator.style.display = 'none';
  zoomView.style.display="none";
});
