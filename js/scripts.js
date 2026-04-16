document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript Loaded Unobtrusively");

    // Map logic
    const mapElement = document.getElementById('my-map');
    if (mapElement) {
        initMapFeatures(mapElement);
    }

    // Slider logic
    const sliderImg = document.getElementById('image-slider');
    if (sliderImg) {
        initSlider(sliderImg);
    } else {
        console.log("Slider element not found on this page - skipping slider init.");
    }
}); // End of DOMContentLoaded

function initMapFeatures(map) {
    const markers = document.querySelectorAll('gmp-advanced-marker');
    const infoWindow = new google.maps.InfoWindow();

    markers.forEach(marker => {
        // Feature 1: Scale effect
        marker.addEventListener('mouseenter', () => {
            marker.style.transform = "scale(1.2)";
            marker.style.transition = "transform 0.2s";
        });
        marker.addEventListener('mouseleave', () => {
            marker.style.transform = "scale(1.0)";
        });

        // Feature 2 & 3: InfoWindow with custom content
        marker.addEventListener('gmp-click', () => {
            infoWindow.setContent(`
                <div style="color: #143109; padding: 5px; font-family: sans-serif;">
                    <strong style="font-size: 1.1em;">${marker.title}</strong><br>
                    <p style="margin: 5px 0 0;">A notable location in Chicago.</p>
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