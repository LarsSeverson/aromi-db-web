import { gql } from '@/generated'

export const UPDATE_USER_MUTATION = gql(/* GraphQL */`
  mutation UpdateUser(
    $input: UpdateUserInput!
  ) {
    updateUser(input: $input) {
      ...UserSummaryFragment
    }
  }
`)

export const UPDATE_USER_AVATAR_MUTATION = gql(/* GraphQL */`
  mutation UpdateUserAvatar(
    $input: StageAssetInput!
  ) {
    updateUserAvatar(input: $input) {
      ...PresignedUploadFragment
    }
  }
`)
