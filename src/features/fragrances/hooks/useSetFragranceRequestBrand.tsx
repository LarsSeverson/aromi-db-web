import { useMutation } from '@apollo/client/react'
import { SET_FRAGRANCE_REQUEST_BRAND_MUTATION } from '../graphql/mutations'
import type { SetFragranceRequestBrandInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useSetFragranceRequestBrand = () => {
  const [setBrandInner] = useMutation(SET_FRAGRANCE_REQUEST_BRAND_MUTATION)

  const setBrand = (input: SetFragranceRequestBrandInput) => {
    return wrapQuery(setBrandInner({ variables: { input } })).map(data => data.setFragranceRequestBrand)
  }

  return { setBrand }
}