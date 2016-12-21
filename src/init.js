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
      //Plans for 16:9 screen ratio and never generates dancers outside screen
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
      // var ran = Math.random() * 1000;
      window.dancers[i].$node.css('left', '' + window.dancers[i].left + 'px');
    }
  });

  $('.interact').on('click', function (event) {
    var node1 = window.dancers[Math.floor(Math.random() * window.dancers.length)];
    var node2 = window.dancers[Math.floor(Math.random() * window.dancers.length)];

    node1.$node.animate({
      left: "+=50",
      top: '+=50'}
      , 5000);
    // node2.$node.css()

    // var node2 = window.dancers[Math.floor(Math.random() * window.dancers.length)];

    // $('node1').addClass('dancing-pairs');
    // $('node2').addClass('dancing-pairs');

    // for (var i = 0; i < window.dancers.length; i = i + 2) {
      // var node1 = window.dancers[i];
      // var node2 = window.dancers[i + 1];

      // var leftAverage = (node1.left + node2.left) / 2;
      // var topAverage = (node1.top + node2.top) / 2;
    // }
    // setTimeout(function() {
    //   $('node1').removeClass('dancing-pairs');
    //   $('node2').removeClass('dancing-pairs');
    // }, 7000);
  });

  $('body').on('mouseenter', '.blue-dancer', function(event) {
    $(this).addClass('blue-dancer-bigger');
  });
  $('body').on('mouseleave', '.blue-dancer', function(event) {
    $(this).removeClass('blue-dancer-bigger');
  });
});























