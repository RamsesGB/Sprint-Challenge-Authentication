const server = require("../api/server.js");
const request = require("supertest");

  describe("GET /api/jokes", () => {
    it("Return status 200 OK", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it("Return data in JSON format", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toMatch(/json/);
          expect(res.type).toBe("application/json");
        });
    });
  });

