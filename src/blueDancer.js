var makeBlueDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  // this.$node.css('color', 'white');
  this.$node.addClass('blue-dancer');

  // this.$node.css('border', '15px solid green');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeBlueDancer.prototype = Object.create(makeDancer.prototype);
makeBlueDancer.prototype.constructor = makeBlueDancer;

makeBlueDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};