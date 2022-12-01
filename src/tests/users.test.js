const supertest = require("supertest");
const app = require("../app");
const server = require("../server");
const db = require("../utils/database");

const api = supertest(app);
// api.get('/api/v1/users')  --> vamos a probar nuestros endpoints

// probar que el endpoint de users devuelve un json

describe("Pruebas para el endpoint users", () => {
  test("Probar que un get a users devuelve un json", async () => {
    await api
      .get("/api/v1/users")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
  test("Probar que un get a users devuelve un arreglo", async () => {
    const { body } = await api.get("/api/v1/users");
    expect(body).toBeInstanceOf(Array);
  });
});

afterAll(() => {
  server.close();
  db.close();
});
