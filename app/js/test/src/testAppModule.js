var expect = chai.expect;

describe('App', function () {
    before(function (done) {
      require(['app', '../test/mocks/mockFb', '../test/mocks/mockRadio'], function (app, fb, radio) {
          module = app;
          this.fb = fb;
          this.radio = radio;
          done();
      }.bind(this))
    });
    describe('method: init', function () {
        it('should be a function', function () {
            expect(module.init).to.be.an.instanceOf(Function)
        });
        it('should call method fb.init', function () {
            var fbSpy = sinon.spy(this.fb, 'init');
            module.init();
            sinon.assert.calledOnce(fbSpy);
        });
        it('should call method radio.on', function () {
            var radioSpy = sinon.spy(this.radio, 'on');
            module.init();
            sinon.assert.calledOnce(radioSpy);
            sinon.assert.calledWith(radioSpy, 'fb/initialized', module.initializeModules);
        })
    })
});