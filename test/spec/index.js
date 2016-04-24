var expect = require('chai').expect;

describe('random-firstName: ', function () {

  var randomAmPm = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {
      expect(randomAmPm()).to.be.a('string');
      expect(randomAmPm()).to.be.oneOf(['am', 'pm']);
    }
  });
});
