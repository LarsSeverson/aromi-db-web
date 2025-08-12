import { errAsync, okAsync, ResultAsync } from 'neverthrow'

export const usePresignedUrl = () => {
  const upload = (
    url: string,
    file: File
  ) => {
    return ResultAsync
      .fromPromise(
        fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': file.type
          },
          body: file
        }),
        error => error as Error
      )
      .andThen(res => {
        if (!res.ok) {
          return errAsync(
            new Error('Upload failed')
          )
        }
        return okAsync(true)
      })
  }

  return {
    upload
  }
}
