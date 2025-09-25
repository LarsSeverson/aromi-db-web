import { NoteLayer, type Note } from '@/generated/graphql'

export interface INoteSummary extends Omit<Note, ''> {}

export const NOTE_LAYER_OPTIONS = [
  { label: 'Top', value: NoteLayer.Top },
  { label: 'Middle', value: NoteLayer.Middle },
  { label: 'Base', value: NoteLayer.Base }
]
