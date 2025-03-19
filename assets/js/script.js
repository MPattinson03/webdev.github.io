$(function() {

    // Toggle menu on click
    $('.navbar-toggle').click(function() {
        $(this).toggleClass('act');
        if ($(this).hasClass('act')) {
            $('.navbar-nav').addClass('act');  
        } else {
            $('.navbar-nav').removeClass('act');
        }
    });
    
    // Smooth scrolling for page anchor links
    $(document).on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    // Initialize scrollspy to track active navigation items
    $('body').scrollspy({
        target: '.navbar', 
        offset: 10
    });

    var $section = $('.section-skills');

    // Function to load progress bars
    function loadDaBars() {
        $('.progress .progress-bar').progressbar({
            transition_delay: 500
        });
    }

    // Trigger progress bars on scroll
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            $(document).unbind('scroll');
        }
    });

});
