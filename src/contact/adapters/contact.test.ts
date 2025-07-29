import supertest from "supertest";
import { httpServer } from "../../server";
import { ContactMessage } from "../domain/contactMessage";
import { sendContact } from "../useCases/sendContact";
import mongoose from "mongoose";
import { MONGO_TEST_URI } from "../../shared/config.env";
import { initialMessage } from "../../../tests/helpers/testHelper";
import { NextFunction } from "express";


const api = supertest(httpServer);
beforeAll(async () => {
  const mongoUri = MONGO_TEST_URI;
  if (!mongoUri) {
    throw new Error("MONGO_TEST_URI environment variable is not defined.");
  }
  await mongoose.connect(mongoUri);
});

describe("Contact API Tests", () => {
    it("POST /contact should send a contact message via email", async ()=> {
        const message: ContactMessage = initialMessage;
        const next: NextFunction = jest.fn(); // Mock next function
        const response = await sendContact(message, next);
        await api
            .post("/contact")
            .send(message)
            .expect(200)
            .expect("Content-Type", /application\/json/);

        console.log("Response:", response);

        expect(next).not.toHaveBeenCalled(); 
        
    })
})

afterAll(async () => {
  await mongoose.connection.close();
  httpServer.close();
});

