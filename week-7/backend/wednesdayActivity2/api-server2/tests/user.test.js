const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/userModel");
const { default: isTaxID } = require("validator/lib/isTaxID");

beforeAll(async () => {
  await User.deleteMany({});
});

describe("User Routes", () => {
  // logic to test: POST /api/users/signup
  describe("POST /api/users/signup", () => {
    it("should sign up a user", async () => {
      const newUser = {
        email: "test@user.com",
        password: "Asd123€%&",
      };
      const response = await api.post("/api/users/signup").send(newUser);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("token");
    });
    it("should sen an error if user signs up with invalid credentials", async () => {
      const newUser = {
        email: "test@user.com",
        password: "badPassword",
      };
      const response = await api.post("/api/users/signup").send(newUser);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("error");
    });
  });

  // logic to test: POST /api/users/login
  describe("POST /api/users/login", () => {
    it("should login user with valid credentials", async () => {
      const user = {
        email: "test@user.com",
        password: "Asd123€%&",
      };
      const response = await api.post("/api/users/login").send(user);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("token");
    });
    it("should send an error if user logs in with invalid credentials", async () => {
      const user = {
        email: "test@user.com",
        password: "badPassword",
      };
      const response = await api.post("/api/users/login").send(user);
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("error");
    });
  });
});

afterAll(() => {
  mongoose.connection.close();
});
