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
    expect(response.body.socialLinks).toBeInstanceOf(Array);

    expect(response.body.socialLinks).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          iconPublicId: expect.stringMatching(
            /^https:\/\/res\.cloudinary\.com\/.+$/
          ),
        }),
      ])
    );
    expect(response.body.techStack).toBeInstanceOf(Array);

    expect(response.body.techStack).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          iconPublicId: expect.stringMatching(
            /^https:\/\/res\.cloudinary\.com\/.+$/
          ),
        }),
      ])
    );
  });
});

afterAll(() => httpServer.close());
