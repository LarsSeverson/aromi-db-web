import { gql } from '@/generated'

export const UPDATE_USER_MUTATION = gql(/* GraphQL */`
  mutation UpdateUser(
    $input: UpdateUserInput!
  ) {
    updateUser(input: $input) {
      ...UserFragment
    }
  }
`)

export const SET_USER_AVATAR_MUTATION = gql(/* GraphQL */`
  mutation SetUserAvatar(
    $input: SetUserAvatarInput!
  ) {
    setUserAvatar(input: $input) {
      ...UserFragment
    }
  } 
`)
