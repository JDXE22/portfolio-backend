import supertest from "supertest";
import { httpServer, server } from "../../server";
import { ProjectModel } from "./project.model";
import { initialProject } from "../../../tests/helpers/testHelper";
import mongoose from "mongoose";
import { MONGO_TEST_URI } from "../../shared/config.env";

const api = supertest(server);

beforeAll(async () => {
  const mongoUri = MONGO_TEST_URI;
  if (!mongoUri) {
    throw new Error("MONGO_TEST_URI environment variable is not defined.");
  }
  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  await ProjectModel.deleteMany({})
  for (const project of initialProject) {
    await ProjectModel.create(project);
  }
});

describe("Project API Tests", () => {
  it("GET /projects should return all projects", async () => {
    await api
      .get("/projects")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  it("GET /api/projects should return an empty array when no projects exist", async () => {
    await ProjectModel.deleteMany({});
    const response = await api.get("/projects").expect(200);
    expect(response.body).toEqual([]);
  });
  
});

afterAll(async () => {
  mongoose.connection.close();
  httpServer.close();
});
