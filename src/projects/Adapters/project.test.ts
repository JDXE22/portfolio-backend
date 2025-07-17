import "dotenv/config";
import supertest from "supertest";
import { server } from "../../server";
import test, { after, beforeEach, describe } from "node:test";
import { ProjectModel } from "./project.model";
import { initialProject} from "./../../../tests/helpers/testHelper.test"
import mongoose from "mongoose";

const api = supertest(server)

beforeEach(async () => {
    await ProjectModel.deleteMany({});
    console.log("Database cleared before each test.");
    for (const project of initialProject) {
        await ProjectModel.create(project);
        console.log(`Project with ID ${project.id} created.`);
    }
    console.log("Initial projects seeded.");
})

describe("Project API Tests" , ()=> {
    test("GET /api/projects should return all projects", async () => {
        await api.get("/api/projects").expect(200)
            .expect("Content-Type", /application\/json/)
    })
})


after(async () => {
    console.log("Database cleared after tests.");
    mongoose.connection.close();
    console.log("Server closed after tests.");
})