// Get current year
const getYear = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const displayYearElement = document.querySelector("#displayYear");
    if (displayYearElement) {
        displayYearElement.innerHTML = currentYear;
    }
};

// Initialize year on page load
getYear();

// Isotope JS - Filter menu
window.addEventListener('load', () => {
    // Initialize isotope grid
    const gridElement = document.querySelector(".grid");
    if (!gridElement) return;
    
    // Initialize isotope after a small delay to ensure DOM is ready
    setTimeout(() => {
        // Initialize isotope
        const $grid = new Isotope(gridElement, {
            itemSelector: ".all",
            percentPosition: false,
            masonry: {
                columnWidth: ".all"
            }
        });

        // Filter menu click handler
        const filterMenuItems = document.querySelectorAll('.filters_menu li');
        filterMenuItems.forEach(item => {
            item.addEventListener('click', function() {
                // Remove active class from all items
                filterMenuItems.forEach(li => li.classList.remove('active'));
                // Add active class to clicked item
                this.classList.add('active');

                // Get filter value
                const dataFilter = this.getAttribute('data-filter');
                
                // Apply filter to isotope
                if ($grid) {
                    $grid.arrange({
                        filter: dataFilter
                    });
                }
            });
        });
    }, 100);
});

// Nice Select
document.addEventListener('DOMContentLoaded', () => {
    const selectElements = document.querySelectorAll('select');
    if (selectElements.length > 0 && typeof NiceSelect !== 'undefined') {
        selectElements.forEach(select => {
            NiceSelect.bind(select);
        });
    }
});

// Google Map
const myMap = () => {
    const mapElement = document.getElementById("googleMap");
    if (!mapElement || typeof google === 'undefined') return;
    
    const mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    new google.maps.Map(mapElement, mapProp);
};

// Initialize map when Google Maps API loads
window.myMap = myMap;

// Client section owl carousel
document.addEventListener('DOMContentLoaded', () => {
    const owlCarouselElement = document.querySelector(".client_owl-carousel");
    if (owlCarouselElement && typeof $ !== 'undefined' && $.fn.owlCarousel) {
        // Using jQuery as owl-carousel requires jQuery
        $(".client_owl-carousel").owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            nav: true,
            navText: [],
            autoplay: true,
            autoplayHoverPause: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });
    }
});

// Alternative: Vanilla JavaScript version for Owl Carousel (if you want to avoid jQuery)
// Note: This assumes you have a vanilla carousel implementation or are using a different library
const initOwlCarousel = () => {
    // This is a placeholder - Owl Carousel 2 requires jQuery
    // Consider using a vanilla JS carousel alternative like Swiper.js
    console.log('Owl Carousel initialization requires jQuery');
};