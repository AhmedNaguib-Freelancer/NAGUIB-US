"use strict";

//Scroll Top 
$.fn.scrollToTop = function() {
    jQuery(this).hide().removeAttr('href');
    if (jQuery(window).scrollTop() != '0') {
        jQuery(this).fadeIn('slow')
    }
    var scrollDiv = jQuery(this);
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() == '0') {
            jQuery(scrollDiv).fadeOut('slow')
        } else {
            jQuery(scrollDiv).fadeIn('slow')
        }
    });
    jQuery(this).on('click', function() {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 'slow')
    })
};


//Document Ready
jQuery(document).ready(function($) {
    
    //Scroll Top
    jQuery('#scroll-top').scrollToTop();

    //WOW Animation init 
    new WOW().init();

});


//----------------------------------------------------end acroll top//