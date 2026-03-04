import { ContactInfo } from '@/contact/domain/contactMessage';
import contactData from '@/contact/contact.json';
import { CloudinaryAdapter } from '@/shared/adapters/cloudinary.config';

export async function getContact(): Promise<ContactInfo> {
  return {
    socialLinks: contactData.socialLinks.map((link) => ({
      ...link,
      iconPublicId: CloudinaryAdapter.url(link.iconPublicId, {
        width: 32,
        height: 32,
      }),
    })),
  };
}
