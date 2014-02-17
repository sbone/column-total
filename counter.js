$(document).ready(function() {

  window.counter = (function() {

    // insert lil' div with count and reset button
    $('body').prepend('<div class="cw__container"><h1 class="cw__header">Total: <span class="cw__total">0</span></h1><button class="reset-total">Reset Total</button></div>');

    // setup total, elements
    var total = 0,
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
      'background': 'rgba(0, 0, 0, .5)'
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
      console.log(e);
      var target = parseFloat($(e.target).html());

      if (!isNaN(target)) {
        total = total + target;
        updateTotal();
      }
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

});
