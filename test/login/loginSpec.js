import sinon from 'sinon';
import login from '../../src/login/service';

describe('login', function () {
  it('should have a test', function () {
    var mock = sinon.mock(login);
    mock.expects('flange').atLeast(1);
    login.flange();
    mock.verify();
  });
});
