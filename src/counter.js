// from http://benalman.com/code/javascript/jquery/jquery.ba-run-code-bookmarklet.js
javascript:(function(e,a,g,h,f,c,b,d){if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement("script");c.type="text/javascript";c.src="https://ajax.googleapis.com/ajax/libs/jquery/"+g+"/jquery.min.js";c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d=="loaded"||d=="complete")){h((f=e.jQuery).noConflict(1),b=1);f(c).remove()}};a.documentElement.childNodes[0].appendChild(c)}})(window,document,"1.7.0",function($,L){

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

});
