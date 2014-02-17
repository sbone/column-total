$(document).ready(function() {

  window.counter = (function() {

    var total = 0;

    $('body').on('click', function(e) {
      var target = parseFloat($(e.target).html());

      if (!isNaN(target)) {
        total = total + target;
        console.log("Total: ", parseFloat(total.toFixed(2)));
      }
    });

    return {
      reset: function() {
        total = 0;
        console.log("Total: ", total);
      }
    }

  }());

});
