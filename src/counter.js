// $(document).ready(function() {

//   (function() {

// from http://benalman.com/code/javascript/jquery/jquery.ba-run-code-bookmarklet.js
// UNMINIFED

(function( window, document, req_version, callback, $, script, done, readystate ){

  // If jQuery isn't loaded, or is a lower version than specified, load the
  // specified version and call the callback, otherwise just call the callback.
  if ( !($ = window.jQuery) || req_version > $.fn.jquery || callback( $ ) ) {

    // Create a script element.
    script = document.createElement( 'script' );
    script.type = 'text/javascript';

    // Load the specified jQuery from the Google AJAX API server (minified).
    script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/' + req_version + '/jquery.min.js';

    // When the script is loaded, remove it, execute jQuery.noConflict( true )
    // on the newly-loaded jQuery (thus reverting any previous version to its
    // original state), and call the callback with the newly-loaded jQuery.
    script.onload = script.onreadystatechange = function() {
      if ( !done && ( !( readystate = this.readyState )
        || readystate == 'loaded' || readystate == 'complete' ) ) {

        callback( ($ = window.jQuery).noConflict(1), done = 1 );

        $( script ).remove();
      }
    };

    // Add the script element to either the head or body, it doesn't matter.
    document.documentElement.childNodes[0].appendChild( script );
  }

})( window, document,

  // Minimum jQuery version required. Change this as-needed.
  '1.7.0',

  // Your jQuery code goes inside this callback. $ refers to the jQuery object,
  // and L is a boolean that indicates whether or not an external jQuery file
  // was just "L"oaded.
  function( $, L ) {
    '$:nomunge, L:nomunge'; // Used by YUI compressor.

    // count widget code
    // insert lil' div with count and reset button
    $('body').prepend('<div class="cw__container"><h1 class="cw__header">Total: <span class="cw__total">0</span></h1><button class="reset-total">Reset Total</button></div>');

    // setup total, elements
    var total = 0,
        oldOffset = 0,
        counterEl = $('.cw__container'),
        headerEl = $('.cw__header'),
        totalEl = $('.cw__total');

    // style inserted elements
    counterEl.css({
      'margin': '0',
      'padding': '5px',
      'position': 'fixed',
      'top': '0',
      'right': '0',
      'color': '#fff',
      'border-radius': '0 0 0 10px',
      'background': 'rgba(0, 0, 0, .5)',
      'z-index': '9999'
    });

    headerEl.css({
      'font-family': 'sans-serif',
      'font-size': '14px',
      'margin': '0'
    });


    // update total element
    function updateTotal() {
      totalEl.html(parseFloat(total.toFixed(2)));
    };

    // get input numbers that you click on
    $('body').on('click', function(e) {
      var target = parseFloat($(e.target).html()),
          // detect clicking on the same element, don't allow
          targetOffset = e.toElement.offsetTop;

      if (targetOffset === oldOffset) {
        console.log("Nope, same element")
      } else if (!isNaN(target)) {
        total = total + target;
        updateTotal();

        // mark added number as such
        $(e.target).css({
          'text-decoration': 'line-through'
        });
      }

      oldOffset = targetOffset;

    });

    // reset button resets total
    $('body').on('click', '.reset-total', function() {
      reset();
    });

    function reset() {
      total = 0;
      updateTotal();
    }

  }());

// });
