import supertest from 'supertest';
import { httpServer } from '../../server';
import { KnowledgeLevel } from '@/shared/types';

const api = supertest(httpServer);

describe('About API Tests', () => {
  it('GET /about should return about information (as array)', async () => {
    const response = await api
      .get('/about')
      .expect(200)
      .expect('Content-Type', /json/);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);

    const about = response.body[0];

    expect(about).toMatchObject({
      headline: expect.any(String),
      bio: expect.any(String),
      avatarIconUrl: expect.stringMatching(
        /^https:\/\/res\.cloudinary\.com\/.+$/,
      ),
    });

    // techSkills: category-level with qualitative knowledge levels
    expect(Array.isArray(about.techSkills)).toBe(true);
    expect(about.techSkills.length).toBeGreaterThan(0);
    expect(about.techSkills).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          level: expect.any(String),
        }),
      ]),
    );

    about.techSkills.forEach(
      (skill: { name: string; level: KnowledgeLevel }) => {
        expect(Object.values(KnowledgeLevel)).toContain(skill.level);
      },
    );

    // softSkills: string array
    expect(Array.isArray(about.softSkills)).toBe(true);
    expect(about.softSkills.length).toBeGreaterThan(0);
    about.softSkills.forEach((skill: unknown) => {
      expect(typeof skill).toBe('string');
    });

    // socialLinks should NOT be present
    expect(about).not.toHaveProperty('socialLinks');
  });
});

afterAll(() => httpServer.close());
