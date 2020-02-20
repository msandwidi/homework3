const server = require('../index');
const mocha = require('mocha');
const request = require('supertest')(server);

describe('GET /', () => {
	//context() is an alias for describe()
	context('when the service is available', () => {
		it('should return status 200', (done) => {done()});
	});
});
