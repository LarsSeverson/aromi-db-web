import { z, type ZodType } from 'zod'

export const getFieldErrors = <T>(
  formData: FormData,
  schema: ZodType<T>,
  transform?: (data: Record<string, FormDataEntryValue>) => unknown
) => {
  const raw = Object.fromEntries(formData)
  const parsed = transform?.(raw) ?? raw
  const result = schema.safeParse(parsed)

  if (!result.success) {
    const formatted = z.flattenError(result.error)
    return formatted
  }

  return {}
}
