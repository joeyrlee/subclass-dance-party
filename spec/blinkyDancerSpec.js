describe('blinkyDancer', function() {

  var blinkyDancer, greenDancer, blueDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
    greenDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
    blueDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
    expect(greenDancer.$node).to.be.an.instanceof(jQuery);
    expect(blueDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  it('should be able to blink/step', function() {
    sinon.spy(greenDancer.$node, 'toggle');
    greenDancer.step();
    expect(greenDancer.$node.toggle.called).to.be.true;
  });

  it('should not be able to blink/step', function() {
    sinon.spy(blueDancer.$node, 'toggle');
    blueDancer.step();
    expect(blueDancer.$node.toggle.called).to.be.falsy;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });


});
