import { CreateProjectDTO, IProject } from '../../src/shared/types';
import { DifficultyLevel, LiveStatus } from '../../src/shared/types';

export const initialProject: IProject[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description:
      'A personal portfolio website to showcase projects and skills.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express'],
    liveStatus: LiveStatus.LIVE,
    difficultyLevel: DifficultyLevel.EASY,
    reasoning:
      'Demonstrates frontend and backend integration with a modern tech stack.',
  },
];

export function projectPayload(overrides?: CreateProjectDTO) {
  return {
    title: 'New Project',
    description: 'A description of the new project',
    liveUrl: 'http://example.com/new-project',
    imgUrl: 'http://example.com/new-project.jpg',
    techStack: ['Node.js', 'Express'],
    difficultyLevel: DifficultyLevel.MEDIUM,
    liveStatus: LiveStatus.LIVE,
    reasoning: 'To learn new technologies',
    ...overrides,
  };
}

export function expectProjectMatches(
  body: any,
  payload: Partial<CreateProjectDTO>,
) {
  expect(body).toMatchObject({
    title: payload.title,
    description: payload.description,
    liveUrl: payload.liveUrl,
    imgUrl: payload.imgUrl,
    techStack: payload.techStack,
    difficultyLevel: payload.difficultyLevel,
    reasoning: payload.reasoning,
    liveStatus: payload.liveStatus,
  });
  expect(body).toHaveProperty('_id');
}
