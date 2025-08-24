import { type FragranceDraftSummaryFragment, type FragranceDraftShellFragment, type FragranceDraftPreviewFragment } from '@/generated/graphql'

export type IFragranceDraftShell = FragranceDraftShellFragment
export type IFragranceDraftSummary = FragranceDraftSummaryFragment
export type IFragranceDraftPreview = FragranceDraftPreviewFragment

export const MAX_FRAGRANCE_NAME_LENGTH = 100
export const MAX_FRAGRANCE_DESCRIPTION_LENGTH = 3000

export const DEFAULT_RELEASE_YEAR = 2025
export const MIN_RELEASE_YEAR = 1800
export const MAX_RELEASE_YEAR = 2025
export const RELEASE_YEAR_PLACEHOLDER = '2025'
