const supertest = require("supertest");
const app = require("../app");
const { Users } = require("../models");
const server = require("../server");
const db = require("../utils/database");

const token =
  "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJNYXLDrWEiLCJsYXN0bmFtZSI6IkdvZG95IiwiZW1haWwiOiJtYXJpYUBnbWFpbC5jb20iLCJpZCI6MSwicGhvbmUiOiIwMDAwMDAwMDAwIiwiaWF0IjoxNjY5ODY1MDUwLCJleHAiOjE2Njk4NzIyNTB9.FxhVPjbb0GL-CweSlAT6FRUuOj7rpKcrSaVZCmOjyJtJs2wmjOt-B4dpJzpXiqI5g5aXIjaTFmS9XUUmz205oA";

const api = supertest(app);

describe("Pruebas para el endpoint users get", () => {
  test("Probar que un get a users devuelve un json", async () => {
    await api
      .get("/api/v1/users")
      .set({ Authorization: token })
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
  test("Probar que un get a users devuelve un arreglo", async () => {
    const { body } = await api
      .get("/api/v1/users")
      .set({ Authorization: token });
    expect(body).toBeInstanceOf(Array);
  });
});

describe("Pruebas para la creación de un usuario", () => {
  const newUser = {
    firstname: "Ian",
    lastname: "Rosas",
    email: "ian.rosas@academlo.com",
    password: "1234",
    phone: "1234567890",
  };
  test("Comprobar que un usuario se crea", async () => {
    await api.post("/api/v1/users").send(newUser).expect(201);
  });

  test("Comprbar la información del usaurio creado", async () => {

    const { body } = await api
      .get("/api/v1/users")
      .set({ Authorization: token });
    console.log(body);
    const users = body.filter((user) => user.email === newUser.email);
    console.log(users);

    expect(users).toMatchObject(newUser);
  });
});


afterAll(async () => {
  await Users.destroy({ where: { email: "ian.rosas@academlo.com" } });
  server.close();
  db.close();
});
