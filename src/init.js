$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() - 100 * (Math.random() * 8),
      $('body').width() - 100 * (Math.random() * 14),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });


  $('.lineup').on('click', function (event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node.css('left', '150px');
    }
  });

  $('.moveBack').on('click', function (event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node.css('left', '' + window.dancers[i].left + 'px');
    }
  });

  $('body').on('click', '.interact', function () {
    var dancingNodes1 = [];
    var dancingNodes2 = [];
    for (var i = 0; i < window.dancers.length; i++) {
      if (i % 2 === 1) {
        dancingNodes1.push(window.dancers[i]);
      } else {
        dancingNodes2.push(window.dancers[i]);
      }
    }

    dancingNodes1.forEach(function(node) {
      node.$node.animate({
        left: '+=150',
        top: '+=150'
      }, 2000);
      node.$node.animate({
        left: '+=150',
        top: '-=150'
      }, 2000);
      node.$node.animate({
        left: '-=150',
        top: '-=150'
      }, 2000);
      node.$node.animate({
        left: '-=150',
        top: '+=150'
      }, 2000);
    });

    dancingNodes2.forEach(function(node) {
      node.$node.animate({
        left: '-=150',
        top: '-=150'
      }, 2000);
      node.$node.animate({
        left: '-=150',
        top: '+=150'
      }, 2000);
      node.$node.animate({
        left: '+=150',
        top: '+=150'
      }, 2000);
      node.$node.animate({
        left: '+=150',
        top: '-=150'
      }, 2000);
    });

  });

  $('body').on('mouseenter', '.blue-dancer', function(event) {
    $(this).addClass('blue-dancer-bigger');
  });
  $('body').on('mouseleave', '.blue-dancer', function(event) {
    $(this).removeClass('blue-dancer-bigger');
  });
});























