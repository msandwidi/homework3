const server = require('../index');
const request = require('supertest')(server);
const User = require('../models/User');

const fakeUser = {
	name: 'fake name',
	email: 'homework3@scsu.edu',
	password: '470_kids'
};

describe('USER ROUTE HANDLERS', () => {

  //clear previous test data from database 
  // before proceeding with next run
	before(function(done) {
		User.deleteMany()
			.then(() => {
				console.log('test user data clear before test');
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(done);
	});

	describe('SIGN UP PROCESS', () => {
		it('should return 200 OK and success true signing up', (done) => {
			request
				.post('/api/users/signup')
				.send(fakeUser)
				.expect(200)
				.expect('Content-Type', /json/)
				.end(function(err, res) {
					if (err) return done(err);
					assert.isTrue(res.body.success);
					done();
				});
		});
	});
});
