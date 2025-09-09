import supertest from "supertest";
import { httpServer } from "../../server";

const api = supertest(httpServer);

describe("About API Tests", () => {
  it("GET /about should return about information (as array)", async () => {
    const response = await api
      .get("/about")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);

    const about = response.body[0];

    expect(about).toMatchObject({
      headline: expect.any(String),
      bio: expect.any(String),
      avatarIconUrl: expect.stringMatching(
        /^https:\/\/res\.cloudinary\.com\/.+$/
      ),
    });

    expect(Array.isArray(about.socialLinks)).toBe(true);
    expect(about.socialLinks).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          iconPublicId: expect.stringMatching(
            /^https:\/\/res\.cloudinary\.com\/.+$/
          ),
        }),
      ])
    );

    expect(Array.isArray(about.techStack)).toBe(true);
    expect(about.techStack).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          iconPublicId: expect.stringMatching(
            /^https:\/\/res\.cloudinary\.com\/.+$/
          ),
        }),
      ])
    );
    expect(about.socialLinks).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          iconPublicId: expect.stringMatching(/^https?:\/\//),
        }),
      ])
    );
  });
});

afterAll(() => httpServer.close());
