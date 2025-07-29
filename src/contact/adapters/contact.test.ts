
import { jest } from "@jest/globals";
jest.mock("../useCases/sendContact", () => ({
  sendContact: jest.fn<() => Promise<boolean>>().mockResolvedValue(true)
}));
import supertest from "supertest";
import { httpServer } from "../../server";
import mongoose from "mongoose";
import { MONGO_TEST_URI } from "../../shared/config.env";
import { initialMessage } from "../../../tests/helpers/testHelper";




const api = supertest(httpServer);
beforeAll(async () => {
  const mongoUri = MONGO_TEST_URI;
  if (!mongoUri) {
    throw new Error("MONGO_TEST_URI environment variable is not defined.");
  }
  await mongoose.connect(mongoUri);
});

describe("Contact API Tests", () => {
  it("POST /contact should send a contact message via email", async () => {
    await api
      .post("/contact")
      .send(initialMessage)
      .expect(200)
      .expect("Content-Type", /json/);
  expect.objectContaining({ email: "test@example.com" }),
  expect.any(Function)
  });
});

afterAll(async () => {
  await mongoose.connection.close();
  httpServer.close();
});
