import { type UpdateFragranceDraftInput } from '@/generated/graphql'
import { useFragranceDraftShell } from './useFragranceDraftShell'
import { useFragranceDraftState } from './useFragranceDraftState'
import { useUpdateFragranceDraft } from './useUpdateFragranceDraft'
import { useStageFragranceDraftImage } from './useStageFragranceDraftImage'
import { useFinalizeFragranceDraftImage } from './useFinalizeFragranceDraftImage'
import { usePresignedUpload } from '@/hooks/usePresignedUpload'

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

  return {
    id,
    status,

    updateDraft,
    updateImage
  }
}
