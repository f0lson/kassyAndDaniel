$(document).ready(function() {

    $('.carousel').carousel({
        interval: false
    });

    // Add smooth scrolling on all links inside the navbar
    $("#navbarText a").on('click', function(event) {
        let navMenu = document.querySelector('#navbarText');
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // hide menu
            if ( navMenu.classList.contains('show') ) {
                navMenu.classList.remove('show');
            }
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top-50
            }, 800, function() {

            });
        } // End if
    });
});
