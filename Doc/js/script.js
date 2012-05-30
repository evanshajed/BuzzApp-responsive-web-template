/* Author: Shajed Evan
*/

/*  Google Font Loader */

   WebFontConfig = {
    google: { families: [ 'Oleo+Script::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

   window.prettyPrint && prettyPrint();
  /* Calling Bootstrap alert with mail checking 

bootstrap_alert = function() {}
bootstrap_alert.warning = function(message) {
            $('#alert_placeholder').html('<div class="alert alert-info fade in"><a class="close" data-dismiss="alert">×</a><strong>Are you typing '+message+'?</strong></div>')
        }

$('#email').on('blur', function() {
  $(this).mailcheck({
    suggested: function(element, suggestion) {
      bootstrap_alert.warning(suggestion.full);
    },
    empty: function(element) {
     
    }
  });
});

*/
  
jQuery(function($){


        /* Initializing Carousel Slide */
        $('.carousel').carousel({
           interval: 3000
          });

        /* Positoning browser when collapsible box is trigered */
        $('#demo').on('show', function () {
            window.location.hash = "demo";
          });

        /* Position to CSS colapsible*/
        $('#collapseOne').on('shown', function () {
            window.location.hash = "collapseOne";
          });
        $('#collapseTwo').on('shown', function () {
            window.location.hash = "collapseTwo";
          });
        $('#collapseThree').on('shown', function () {
            window.location.hash = "collapseThree";
          });

        $('#collapseFour').on('shown', function () {
            window.location.hash = "collapseFour";
          });
        $('#collapseFive').on('shown', function () {
            window.location.hash = "collapseFive";
          });
        $('#collapseSix').on('shown', function () {
            window.location.hash = "collapseSix";
          });
    });