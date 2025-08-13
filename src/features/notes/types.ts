import { type Note } from '@/generated/graphql'

export interface INoteSummary extends Omit<Note, ''> {}

export const NOTE_LAYER_OPTIONS = [
  { label: 'Top', value: null },
  { label: 'Middle', value: 'middle' },
  { label: 'Base', value: 'base' }
]
