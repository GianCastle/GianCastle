import { LOCALE, type Locale } from '@giancastle/ui/locale';
import { HOME_EN } from './home.content.en';
import { HOME_ES } from './home.content.es';
import type { HomeContent } from './home.types';

export const HOME_CONTENT: Record<Locale, HomeContent> = {
  [LOCALE.en]: HOME_EN,
  [LOCALE.es]: HOME_ES,
};
