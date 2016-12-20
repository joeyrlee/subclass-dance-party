var makeGreenDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.turnGreen();

  // this.$node.css('border', '15px solid green');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeGreenDancer.prototype = Object.create(makeDancer.prototype);
makeGreenDancer.prototype.constructor = makeBlinkyDancer;

makeGreenDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$(node).toggle();
};
makeGreenDancer.prototype.turnGreen = function () {
  console.log(this);
  this.$(node).css('border', '15px solid green');
};

