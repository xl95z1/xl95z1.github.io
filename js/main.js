$(document).ready(function(){
 
    $('.lol').venobox(); 
 

    $("#firstlink").venobox().trigger('click');

    $('.venobox_custom').venobox({
        framewidth : '400px',                            // default: ''
        frameheight: '300px',                            // default: ''
        border     : '10px',                             // default: '0'
        bgcolor    : 'whitewhite',                          // default: '#fff'
        titleattr  : 'data-title',                       // default: 'title'
        numeratio  : true,                               // default: false
        infinigall : true,                               // default: false
        share      : ['facebook', 'twitter', 'download'] // default: []
    });

    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
      });
    $("#logo").click(function() {
        $('html,body').animate({
            scrollTop: $("#slides").offset().top},
            'slow');
    });
    $("#home").click(function() {
        $('html,body').animate({
            scrollTop: $("#slides").offset().top},
            'slow');
    });
    $("#work").click(function() {
        $('html,body').animate({
            scrollTop: $("#mywork").offset().top},
            'slow');
    });
    $("#service").click(function() {
        $('html,body').animate({
            scrollTop: $("#myservice").offset().top},
            'slow');
    });
    $("#contact").click(function() {
        $('html,body').animate({
            scrollTop: $("#mycontact").offset().top},
            'slow');
    });
});