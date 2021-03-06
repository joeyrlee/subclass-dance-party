var makeGreenDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  // this.$node.css('color', 'green');
  this.$node.addClass('green-dancer');

  // this.$node.css('border', '15px solid green');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeGreenDancer.prototype = Object.create(makeDancer.prototype);
makeGreenDancer.prototype.constructor = makeGreenDancer;

makeGreenDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};