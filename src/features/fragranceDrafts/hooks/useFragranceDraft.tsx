import { type SetFragranceDraftNotesInput, type SetFragranceDraftAccordsInput, type SetFragranceDraftTraitInput, type UpdateFragranceDraftInput } from '@/generated/graphql'
import { useFragranceDraftShell } from './useFragranceDraftShell'
import { useFragranceDraftState } from './useFragranceDraftState'
import { useUpdateFragranceDraft } from './useUpdateFragranceDraft'
import { useStageFragranceDraftImage } from './useStageFragranceDraftImage'
import { useFinalizeFragranceDraftImage } from './useFinalizeFragranceDraftImage'
import { usePresignedUpload } from '@/hooks/usePresignedUpload'
import { useSetFragranceDraftTrait } from './useSetFragranceDraftTrait'
import { useSetFragranceDraftAccords } from './useSetFragranceDraftAccords'
import { useSetFragranceDraftNotes } from './useSetFragranceDraftNotes'

export interface UseFragranceDraftProps {
  id: string
  initialVersion: number
}

export interface UpdateImageInput {
  file: File
  onUploadProgress?: (pct: number) => void
}

export const useFragranceDraft = (props: UseFragranceDraftProps) => {
  const { id, initialVersion } = props

  const { refresh } = useFragranceDraftShell(id)

  const {
    status,
    update
  } = useFragranceDraftState({ id, initialVersion, refresh })

  const {
    updateDraft: updateDraftInner
  } = useUpdateFragranceDraft()

  const {
    stageImage
  } = useStageFragranceDraftImage()

  const {
    finalizeImage
  } = useFinalizeFragranceDraftImage()

  const {
    setTrait
  } = useSetFragranceDraftTrait()

  const {
    setAccords
  } = useSetFragranceDraftAccords()

  const {
    setNotes
  } = useSetFragranceDraftNotes()

  const {
    upload
  } = usePresignedUpload()

  const updateDraft = (
    input: Omit<UpdateFragranceDraftInput, 'id' | 'version'>
  ) => {
    return update(version =>
      updateDraftInner({ ...input, id, version })
    )
  }

  const updateImage = (
    input: UpdateImageInput
  ) => {
    const { file, onUploadProgress } = input

    const fileName = file.name
    const contentType = file.type
    const contentSize = file.size

    const stageInput = {
      id,
      fileName,
      contentType,
      contentSize
    }

    return stageImage(stageInput)
      .andThrough(presigned =>
        upload(presigned, file, onUploadProgress)
      )
      .andThen(presigned =>
        update(version =>
          finalizeImage({ draftId: id, assetId: presigned.id, version })
        )
      )
  }

  const updateTrait = (
    input: Omit<SetFragranceDraftTraitInput, 'draftId' | 'version'>
  ) => {
    return update(version =>
      setTrait({ ...input, draftId: id, version })
    )
  }

  const updateAccords = (
    input: Omit<SetFragranceDraftAccordsInput, 'draftId' | 'version'>
  ) => {
    return update(version =>
      setAccords({ ...input, draftId: id, version })
    )
  }

  const updateNotes = (
    input: Omit<SetFragranceDraftNotesInput, 'draftId' | 'version'>
  ) => {
    return update(version =>
      setNotes({ ...input, draftId: id, version })
    )
  }

  return {
    id,
    status,

    updateDraft,
    updateImage,
    updateTrait,
    updateAccords,
    updateNotes
  }
}
