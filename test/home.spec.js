const server = require("../index");
const request = require("supertest")(server);

describe("GET /", () => {
  it("should return status 200", done => {
    request
      .get("/")
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
        done();
      });
  });
});
