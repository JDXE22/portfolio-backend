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
  await ProjectModel.deleteMany({});
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

  // it("GET /projects/:id should return a specific project by ID", async () => {})

  it("POST /projects should create a new project", async () => {
    const newProject = {
      title: "New Project",
      description: "A description of the new project",
      liveUrl: "http://example.com/new-project",
      imgUrl: "http://example.com/new-project.jpg",
      techStack: ["Node.js", "Express"],
      difficultyLevel: "Medium",
      reasoning: "To learn new technologies",
    };
    const response = await api
      .post("/projects")
      .send(newProject)
      .expect(201)
      .expect("Content-Type", /application\/json/);
    expect(response.body.title).toBe(newProject.title);
    expect(response.body.description).toBe(newProject.description);
    expect(response.body.liveUrl).toBe(newProject.liveUrl);
    expect(response.body.imgUrl).toBe(newProject.imgUrl);
    expect(response.body.techStack).toEqual(newProject.techStack);
    expect(response.body.difficultyLevel).toBe(newProject.difficultyLevel);
    expect(response.body.reasoning).toBe(newProject.reasoning);
    const projectsAtEnd = await ProjectModel.find({});
    expect(projectsAtEnd).toHaveLength(initialProject.length + 1);
  });
});

afterAll(async () => {
  mongoose.connection.close();
  httpServer.close();
});
