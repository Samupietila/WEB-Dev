const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/userModel");
const Movie = require("../models/movieModel");
const movies = [
  {
    title: "Sample title",
    director: "Sample director",
    user_id: { User },
  },
  {
    title: "Sample title2",
    director: "Sample director2",
    user_id: { User },
  },
];
let token = null;

beforeAll(async () => {
  await User.deleteMany({});
  const result = await api
    .post("/api/users/signup")
    .send({ email: "test@user.fi", password: "Asd123€%&" });
  token = result.body.token;
});

describe("Given there are initially some books saved", () => {
  beforeEach(async () => {
    await Movie.deleteMany({});
    await api
      .post("/api/movies")
      .set("Authorization", "bearer " + token)
      .send(movies[0])
      .send(movies[1]);
  });

  it("should return all movies as JSON when GET /api/movies is called", async () => {
    await api
      .get("/api/movies")
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  it("should create one movie when POST /api/movie is called", async () => {
    const newMovie = {
      title: "Test title",
      director: "Test director",
      user_id: { User },
    };
    await api
      .post("/api/movies")
      .set("Authorization", "bearer " + token)
      .send(newMovie)
      .expect(201);
  });

  it("should return one movie by ID when GET /api/books/:id", async () => {
    const movie = await Movie.findOne();
    await api
      .get("/api/movies/" + movie.id)
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
