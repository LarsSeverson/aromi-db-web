import { useStageAsset } from '@/features/assets'
import type { SetFragranceRequestAccordsInput, SetFragranceRequestBrandInput, SetFragranceRequestNotesInput, SetFragranceRequestTraitInput, StageAssetInput, UpdateFragranceRequestInput } from '@/generated/graphql'
import { usePresignedUpload } from '@/hooks/usePresignedUpload'
import { useFragranceRequest } from './useFragranceRequest'
import { useFragranceRequestDraftState } from './useFragranceRequestDraftState'
import { useSetFragranceRequestAccords } from './useSetFragranceRequestAccords'
import { useSetFragranceRequestBrand } from './useSetFragranceRequestBrand'
import { useSetFragranceRequestNotes } from './useSetFragranceRequestNotes'
import { useSetFragranceRequestTrait } from './useSetFragranceRequestTrait'
import { useUpdateFragranceRequest } from './useUpdateFragranceRequest'

export interface UseFragranceRequestDraftProps {
  id: string
  initialVersion: number
}

export interface SetFragranceRequestImageInput {
  file: File
  onUploadProgress?: (pct: number) => void
}

export const useFragranceRequestDraft = (props: UseFragranceRequestDraftProps) => {
  const { id, initialVersion } = props

  const { refresh } = useFragranceRequest(id)

  const {
    status,
    update
  } = useFragranceRequestDraftState({ id, initialVersion, refresh })

  const {
    updateRequest: updateRequestInner
  } = useUpdateFragranceRequest()

  const {
    stageAsset: stageImage
  } = useStageAsset()

  const {
    setBrand: setBrandInner
  } = useSetFragranceRequestBrand()

  const {
    setTrait: setTraitInner
  } = useSetFragranceRequestTrait()

  const {
    setAccords: setAccordsInner
  } = useSetFragranceRequestAccords()

  const {
    setNotes: setNotesInner
  } = useSetFragranceRequestNotes()

  const {
    upload
  } = usePresignedUpload()

  const updateRequest = (
    input: Omit<UpdateFragranceRequestInput, 'id'>
  ) => {
    return update(() => updateRequestInner({ ...input, id }))
  }

  const setBrand = (
    input: Omit<SetFragranceRequestBrandInput, 'requestId'>
  ) => {
    return update(() => setBrandInner({ ...input, requestId: id }))
  }

  const setImage = (
    input: SetFragranceRequestImageInput
  ) => {
    const { file, onUploadProgress } = input

    const fileName = file.name
    const contentType = file.type
    const contentSize = file.size

    const stageInput: StageAssetInput = {
      key: 'FRAGRANCE_IMAGES',
      fileName,
      contentType,
      contentSize
    }

    return stageImage(stageInput)
      .andThrough(presigned => upload(presigned, file, onUploadProgress))
      .andThen(presigned => update(() => updateRequest({ assetId: presigned.assetId })))
  }

  const setTrait = (
    input: Omit<SetFragranceRequestTraitInput, 'requestId'>
  ) => {
    return update(() => setTraitInner({ ...input, requestId: id }))
  }

  const setAccords = (
    input: Omit<SetFragranceRequestAccordsInput, 'requestId'>
  ) => {
    return update(() => setAccordsInner({ ...input, requestId: id }))
  }

  const setNotes = (
    input: Omit<SetFragranceRequestNotesInput, 'requestId'>
  ) => {
    return update(() => setNotesInner({ ...input, requestId: id }))
  }

  return {
    id,
    status,

    updateRequest,

    setBrand,
    setImage,
    setTrait,
    setAccords,
    setNotes
  }
}
