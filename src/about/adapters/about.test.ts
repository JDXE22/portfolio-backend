import supertest from "supertest";
import { httpServer } from "../../server";

const api = supertest(httpServer);

describe("About API Tests", () => {
  it("GET /about should return about information", async () => {
    const response = await api
      .get("/about")
      .expect(200)
      .expect("Content-Type", /json/);
    expect(response.body).toMatchObject({
      headline: expect.any(String),
      bio: expect.any(String),
      avatarIconUrl: expect.stringMatching(
        /^https:\/\/res\.cloudinary\.com\/.+$/
      ),
    });
  });
});

afterAll(() => httpServer.close());
