jQuery(document).ready(function(){
    $(document).ready(function(){
        $('.lol').venobox(); 
    });

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

});