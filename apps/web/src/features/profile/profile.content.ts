import { LOCALE, type Locale } from '@giancastle/ui/locale';
import { PROFILE_EN } from './profile.content.en';
import { PROFILE_ES } from './profile.content.es';
import type { ProfileContent } from './profile.types';

export const PROFILE_CONTENT: Record<Locale, ProfileContent> = {
  [LOCALE.en]: PROFILE_EN,
  [LOCALE.es]: PROFILE_ES,
};
