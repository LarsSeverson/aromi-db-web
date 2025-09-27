import type { FragranceRequestPreviewFragmentFragment } from '@/generated/graphql'
import { useResultAsyncQueue } from '@/hooks/useResultAsyncQueue'
import { useWithStatus } from '@/hooks/useWithStatus'
import type { ServerErrorInfo } from '@/utils/error'
import { errAsync, type ResultAsync } from 'neverthrow'
import { useCallback, useEffect, useRef } from 'react'
import type { IFragranceDraftPreview } from '../types'

export interface UseFragranceRequestDraftStateProps {
  id: string
  initialVersion: number
  refresh: () => ResultAsync<IFragranceDraftPreview, ServerErrorInfo>
}

export const useFragranceRequestDraftState = (props: UseFragranceRequestDraftStateProps) => {
  const { id, initialVersion, refresh } = props

  const { status, withStatus, reset } = useWithStatus()
  const { enqueue } = useResultAsyncQueue()

  const internalId = useRef(id)
  const version = useRef(initialVersion)

  const applyVersion = (v: number) => {
    version.current = v
  }

  const refreshVersion = useCallback(() => {
    return refresh()
      .andTee(ds => { applyVersion(ds.version) })
  }, [refresh])

  const update = useCallback((
    op: (prevVersion: number) => ResultAsync<FragranceRequestPreviewFragmentFragment, ServerErrorInfo>
  ) => {
    return enqueue(
      () => withStatus(
        () => op(version.current)
          .andTee(ds => { applyVersion(ds.version) })
          .orElse(e => refreshVersion()
            .andThen(() => errAsync(e))
          )
      )
    )
  }, [enqueue, refreshVersion, withStatus])

  useEffect(
    () => {
      if (id !== internalId.current) {
        internalId.current = id
        version.current = initialVersion
        reset()
      }
    },
    [id, initialVersion, reset]
  )

  return { status, update }
}
