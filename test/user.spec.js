const server = require("../index");
const assert = require("chai").assert;
const request = require("supertest")(server);
const User = require("../models/User");

const loginUser = {
  name: "fake name",
  email: "470_kids#scsu.edu",
  password: "123456"
};

describe("USER ROUTE HANDLERS", () => {
  before(function(done) {
    User.deleteMany()
      .then(() => {
        console.log("User collection cleared before test");

        const newUser = new User(loginUser);
        newUser.save().then((user) => {
          console.log("Test user", user.email, "added");
        });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(done);
  });

  describe("LOGIN PROCESS", () => {
    it("should return 200 and success true", done => {
      request
        .post("/api/users/login")
        .send(loginUser)
        .expect(200)
        .expect("Content-Type", /json/)
        .end(function(err, res) {
          if (err) done(err);
          assert.isTrue(res.body.success);
          assert.exists(res.body.token);
          assert.isString(res.body.token);
          done();
        });
    });
  });
});
