document.addEventListener('DOMContentLoaded', () => {
  console.log("JavaScript Loaded Unobtrusively");

  // Map Code
  const mapElement = document.getElementById('my-map');
  if (mapElement) {
    initMapFeatures(mapElement);
  }

  // Slider Code
  const sliderImg = document.getElementById('image-slider');
  if (sliderImg) {
    initSlider(sliderImg);
  }
});

function initMapFeatures(map) {
  const markers = document.querySelectorAll('gmp-advanced-marker');
  const infoWindow = new google.maps.InfoWindow();
  
  markers.forEach(marker => {
    // Scale Interaction
    marker.addEventListener('mouseenter', () => {
      marker.style.transform = "scale(1.2)"; 
      marker.style.transition = "transform 0.2s";
    });
    marker.addEventListener('mouseleave', () => {
      marker.style.transform = "scale(1.0)";
    });

    // Click for InfoWindow
    marker.addEventListener('gmp-click', () => {
      infoWindow.setContent(`
        <div style="color: #143109; padding: 5px;">
          <strong>${marker.title}</strong><br>
          <p>A notable location in Chicago.</p>
        </div>`);
      infoWindow.open({
        anchor: marker,
        map: map,
      });
    });
  });
}

function initSlider(imgElement) {
  const images = ["images/whoop.png", "images/printer.png", "images/rackdiagram.png"];
  let index = 0; 
  setInterval(() => {
    index = (index + 1) % images.length;
    imgElement.src = images[index];
    console.log("Slider advanced to: " + images[index]); 
  }, 3000); 
}