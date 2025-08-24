import { usePresignedUpload } from '@/hooks/usePresignedUpload'
import { useCreateFragranceDraft } from './useCreateFragranceDraft'
import { useFinalizeFragranceDraftImage } from './useFinalizeFragranceDraftImage'
import { useStageFragranceDraftImage } from './useStageFragranceDraftImage'
import { useDeleteFragranceDraft } from './useDeleteFragranceDraft'
import { errAsync } from 'neverthrow'

export interface CreateDraftWithImageInput {
  file: File
  onUploadProgress?: (pct: number) => void
}

export const useCreateFragranceDraftWithImage = () => {
  const { createDraft } = useCreateFragranceDraft()
  const { deleteDraft } = useDeleteFragranceDraft()
  const { stageImage } = useStageFragranceDraftImage()
  const { finalizeImage } = useFinalizeFragranceDraftImage()

  const { upload } = usePresignedUpload()

  const createDraftWithImage = (input: CreateDraftWithImageInput) => {
    const { file, onUploadProgress } = input

    const fileName = file.name
    const contentType = file.type
    const contentSize = file.size

    const stageInput = { fileName, contentType, contentSize }

    return createDraft({})
      .andThen(draft =>
        stageImage({ id: draft.id, ...stageInput })
          .andThrough(presigned =>
            upload(presigned, file, onUploadProgress)
          )
          .andThen(presigned =>
            finalizeImage({ draftId: draft.id, assetId: presigned.id, version: draft.version })
          )
          .orElse(error => {
            void deleteDraft({ id: draft.id })
            return errAsync(error)
          })
      )
  }

  return { createDraftWithImage }
}
