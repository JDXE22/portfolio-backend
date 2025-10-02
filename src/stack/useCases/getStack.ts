import { CloudinaryAdapter } from '@/shared/adapters/cloudinary.config';
import { Tech } from '@/stack/domain/stackInterface';
import stack from '@/stack/stack.json';
import { StackCategory } from '@/shared/types';

export function getStack(): Tech[] {
  const stackData = stack.map((tech) => ({
    ...tech,
    category: tech.category as StackCategory,
    iconPublicId: CloudinaryAdapter.url(tech.iconPublicId, {
      width: 64,
      height: 64,
      crop: 'fill',
    }),
  }));
  return stackData;
}
