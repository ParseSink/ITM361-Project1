document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript Loaded Unobtrusively");

    // --- FEATURE 1 & 2: Map Interactions (Map Page Only) ---
    const mapElement = document.getElementById('my-map');
    if (mapElement) {
        initMapFeatures(mapElement);
    }


    const sliderImg = document.getElementById('image-slider');
    if (sliderImg) {
        initSlider(sliderImg);
    }
});

function initMapFeatures(map) {
    const markers = document.querySelectorAll('gmp-advanced-marker');
    
    const infoWindow = new google.maps.InfoWindow();

    markers.forEach(marker => {
        marker.addEventListener('gmp-click', () => {
            // Feature: Dynamic InfoWindow content based on marker title
            infoWindow.setContent(`<div style="color: #143109; padding: 5px;">
                <strong>${marker.title}</strong><br>
                A notable location in Chicago.
            </div>`);
            infoWindow.open({
                anchor: marker,
                map: map,
            });
        });
    });
}

/**
 * Final Deliverable: Original Image Slider
 */
function initSlider(imgElement) {
    const images = ["images/whoop.png", "images/printer.png", "images/rackdiagram.png"];
    let index = 0;

    setInterval(() => {
        index = (index + 1) % images.length;
        imgElement.src = images[index];
    }, 3000); // Swaps every 3 seconds
}