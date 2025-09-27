import { Concentration, type FragranceRequestPreviewFragmentFragment, FragranceStatus } from '@/generated/graphql'
import z from 'zod'

export type IFragranceDraftPreview = FragranceRequestPreviewFragmentFragment

export const DEFAULT_RELEASE_YEAR = 2025
export const MIN_RELEASE_YEAR = 1800
export const MAX_RELEASE_YEAR = 2025
export const RELEASE_YEAR_PLACEHOLDER = '2025'

export const MIN_FRAGRANCE_NAME_LENGTH = 1
export const MAX_FRAGRANCE_NAME_LENGTH = 100

export const ValidName = z
  .string()
  .trim()
  .min(MIN_FRAGRANCE_NAME_LENGTH, 'Name must not be empty')
  .max(MAX_FRAGRANCE_NAME_LENGTH, 'Name cannot exceed 100 characters')
  .nullish()

export const MAX_FRAGRANCE_DESCRIPTION_LENGTH = 3000

export const ValidDescription = z
  .string()
  .trim()
  .max(MAX_FRAGRANCE_DESCRIPTION_LENGTH, 'Description cannot exceed 3000 characters')
  .nullish()

export const MIN_FRAGRANCE_RELEASE_YEAR = 1800
export const MAX_FRAGRANCE_RELEASE_YEAR = new Date().getFullYear()

export const ValidReleaseYear = z
  .number()
  .int()
  .min(MIN_FRAGRANCE_RELEASE_YEAR, 'Release year must be greater than 1799')
  .max(MAX_FRAGRANCE_RELEASE_YEAR, 'Release year must not be greater than the current year')
  .nullish()

export const ValidVersion = z
  .number()
  .int()
  .nonnegative()

export const CONCENTRATION_OPTIONS = [
  { label: 'Parfum (Extrait)', value: Concentration.Parfum },
  { label: 'Eau de Parfum (EDP)', value: Concentration.Edp },
  { label: 'Eau de Toilette (EDT)', value: Concentration.Edt },
  { label: 'Eau de Cologne (EDC)', value: Concentration.Edc },
  { label: 'Eau Fraiche', value: Concentration.EauFraiche },
  { label: 'Perfume Oil / Attar', value: Concentration.Oil },
  { label: 'Body Mist / Splash', value: Concentration.BodyMist },
  { label: 'Other', value: Concentration.Other }
]

export const STATUS_OPTIONS = [
  { label: 'Current', value: FragranceStatus.Current },
  { label: 'Discontinued', value: FragranceStatus.Discontinued },
  { label: 'Reformulated', value: FragranceStatus.Reformulated }
]

export const GENDER_OPTIONS = [
  { label: 'Masculine', score: 1 },
  { label: 'Unisex', score: 2 },
  { label: 'Feminine', score: 3 }
]

export const LONGEVITY_OPTIONS = [
  { label: 'Very weak', score: 1 },
  { label: 'Weak', score: 2 },
  { label: 'Moderate', score: 3 },
  { label: 'Long lasting', score: 4 },
  { label: 'Eternal', score: 5 }
]

export const PROJECTION_OPTIONS = [
  { label: 'Intimate', score: 1 },
  { label: 'Soft', score: 2 },
  { label: 'Moderate', score: 3 },
  { label: 'Strong', score: 4 },
  { label: 'Expansive', score: 5 }
]

export const COMPLEXITY_OPTIONS = [
  { label: 'Simple', score: 1 },
  { label: 'Nuanced', score: 2 },
  { label: 'Moderate', score: 3 },
  { label: 'Elaborate', score: 4 },
  { label: 'Intricate', score: 5 }
]

export const BALANCE_OPTIONS = [
  { label: 'Skewed', score: 1 },
  { label: 'Uneven', score: 2 },
  { label: 'Balanced', score: 3 },
  { label: 'Cohesive', score: 4 },
  { label: 'Seamless', score: 5 }
]

export const APPEAL_OPTIONS = [
  { label: 'Unappealing', score: 1 },
  { label: 'Plain', score: 2 },
  { label: 'Appealing', score: 3 },
  { label: 'Alluring', score: 4 },
  { label: 'Captivating', score: 5 }
]
