/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  fragment AccordSummaryFragment on Accord {\n    id\n    name\n    color\n  }\n": typeof types.AccordSummaryFragmentFragmentDoc,
    "\n  query AccordsQuery(\n    $input: AccordPaginationInput\n  ) {\n    accords(input: $input) {\n      edges {\n        node {\n          ...AccordSummaryFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": typeof types.AccordsQueryDocument,
    "\n  fragment AuthDeliveryResultFragment on AuthDeliveryResult {\n    isComplete\n\n    delivery {\n      attribute\n      destination\n      method\n    }\n  }\n": typeof types.AuthDeliveryResultFragmentFragmentDoc,
    "\n  fragment AuthTokenPayloadFragment on AuthTokenPayload {\n    idToken\n    accessToken\n    expiresIn\n  }\n": typeof types.AuthTokenPayloadFragmentFragmentDoc,
    "\n  mutation Refresh {\n    refresh {\n      ...AuthTokenPayloadFragment\n    }\n  }\n": typeof types.RefreshDocument,
    "\n  mutation LogIn(\n    $input: LogInInput!\n  ) {\n    logIn(input: $input) {\n      ...AuthTokenPayloadFragment\n    }\n  }\n": typeof types.LogInDocument,
    "\n  mutation LogOut {\n    logOut\n  }\n": typeof types.LogOutDocument,
    "\n  mutation SignUp(\n    $input: SignUpInput!\n  ) {\n    signUp(input: $input) {\n      ...AuthDeliveryResultFragment\n    }\n  }\n": typeof types.SignUpDocument,
    "\n  mutation ConfirmSignUp(\n    $input: ConfirmSignUpInput!\n  ) {\n    confirmSignUp(input: $input)\n  }\n": typeof types.ConfirmSignUpDocument,
    "\n  mutation ResendSignUpCode(\n    $input: ResendSignUpCodeInput!\n  ) {\n    resendSignUpCode(input: $input) {\n      ...AuthDeliveryResultFragment\n    }\n  }\n": typeof types.ResendSignUpCodeDocument,
    "\n  mutation ForgotPassword(\n    $input: ForgotPasswordInput!\n  ) {\n    forgotPassword(input: $input) {\n      ...AuthDeliveryResultFragment\n    }\n  }\n": typeof types.ForgotPasswordDocument,
    "\n  mutation ConfirmForgotPassword(\n    $input: ConfirmForgotPasswordInput!\n  ) {\n    confirmForgotPassword(input: $input) \n  }\n": typeof types.ConfirmForgotPasswordDocument,
    "\n  fragment NoteSummaryFragment on Note {\n    id\n    name\n    thumbnailUrl\n  }\n": typeof types.NoteSummaryFragmentFragmentDoc,
    "\n  query Notes(\n    $input: NotePaginationInput\n  ) {\n    notes(input: $input) {\n      edges {\n        node {\n          ...NoteSummaryFragment\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": typeof types.NotesDocument,
    "\n  fragment UserSummaryFragment on User {\n    id\n    username\n    email\n\n    avatarSrc\n    avatarStatus\n  }\n": typeof types.UserSummaryFragmentFragmentDoc,
    "\n  mutation UpdateUser(\n    $input: UpdateUserInput!\n  ) {\n    updateUser(input: $input) {\n      ...UserSummaryFragment\n    }\n  }\n": typeof types.UpdateUserDocument,
    "\n  mutation UpdateUserAvatar(\n    $input: UpdateUserAvatarInput!\n  ) {\n    updateUserAvatar(input: $input) {\n      avatarId\n      uploadUrl\n      contentType\n    }\n  }\n": typeof types.UpdateUserAvatarDocument,
    "\n  query Me {\n    me {\n      ...UserSummaryFragment\n    }\n  }\n": typeof types.MeDocument,
    "\n  query User(\n    $id: ID!\n  ) {\n    user(id: $id) {\n      ...UserSummaryFragment\n    }\n  }\n": typeof types.UserDocument,
    "\n  fragment PageInfoFragment on PageInfo {\n    hasPreviousPage\n    hasNextPage\n    startCursor\n    endCursor\n  }\n": typeof types.PageInfoFragmentFragmentDoc,
};
const documents: Documents = {
    "\n  fragment AccordSummaryFragment on Accord {\n    id\n    name\n    color\n  }\n": types.AccordSummaryFragmentFragmentDoc,
    "\n  query AccordsQuery(\n    $input: AccordPaginationInput\n  ) {\n    accords(input: $input) {\n      edges {\n        node {\n          ...AccordSummaryFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": types.AccordsQueryDocument,
    "\n  fragment AuthDeliveryResultFragment on AuthDeliveryResult {\n    isComplete\n\n    delivery {\n      attribute\n      destination\n      method\n    }\n  }\n": types.AuthDeliveryResultFragmentFragmentDoc,
    "\n  fragment AuthTokenPayloadFragment on AuthTokenPayload {\n    idToken\n    accessToken\n    expiresIn\n  }\n": types.AuthTokenPayloadFragmentFragmentDoc,
    "\n  mutation Refresh {\n    refresh {\n      ...AuthTokenPayloadFragment\n    }\n  }\n": types.RefreshDocument,
    "\n  mutation LogIn(\n    $input: LogInInput!\n  ) {\n    logIn(input: $input) {\n      ...AuthTokenPayloadFragment\n    }\n  }\n": types.LogInDocument,
    "\n  mutation LogOut {\n    logOut\n  }\n": types.LogOutDocument,
    "\n  mutation SignUp(\n    $input: SignUpInput!\n  ) {\n    signUp(input: $input) {\n      ...AuthDeliveryResultFragment\n    }\n  }\n": types.SignUpDocument,
    "\n  mutation ConfirmSignUp(\n    $input: ConfirmSignUpInput!\n  ) {\n    confirmSignUp(input: $input)\n  }\n": types.ConfirmSignUpDocument,
    "\n  mutation ResendSignUpCode(\n    $input: ResendSignUpCodeInput!\n  ) {\n    resendSignUpCode(input: $input) {\n      ...AuthDeliveryResultFragment\n    }\n  }\n": types.ResendSignUpCodeDocument,
    "\n  mutation ForgotPassword(\n    $input: ForgotPasswordInput!\n  ) {\n    forgotPassword(input: $input) {\n      ...AuthDeliveryResultFragment\n    }\n  }\n": types.ForgotPasswordDocument,
    "\n  mutation ConfirmForgotPassword(\n    $input: ConfirmForgotPasswordInput!\n  ) {\n    confirmForgotPassword(input: $input) \n  }\n": types.ConfirmForgotPasswordDocument,
    "\n  fragment NoteSummaryFragment on Note {\n    id\n    name\n    thumbnailUrl\n  }\n": types.NoteSummaryFragmentFragmentDoc,
    "\n  query Notes(\n    $input: NotePaginationInput\n  ) {\n    notes(input: $input) {\n      edges {\n        node {\n          ...NoteSummaryFragment\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": types.NotesDocument,
    "\n  fragment UserSummaryFragment on User {\n    id\n    username\n    email\n\n    avatarSrc\n    avatarStatus\n  }\n": types.UserSummaryFragmentFragmentDoc,
    "\n  mutation UpdateUser(\n    $input: UpdateUserInput!\n  ) {\n    updateUser(input: $input) {\n      ...UserSummaryFragment\n    }\n  }\n": types.UpdateUserDocument,
    "\n  mutation UpdateUserAvatar(\n    $input: UpdateUserAvatarInput!\n  ) {\n    updateUserAvatar(input: $input) {\n      avatarId\n      uploadUrl\n      contentType\n    }\n  }\n": types.UpdateUserAvatarDocument,
    "\n  query Me {\n    me {\n      ...UserSummaryFragment\n    }\n  }\n": types.MeDocument,
    "\n  query User(\n    $id: ID!\n  ) {\n    user(id: $id) {\n      ...UserSummaryFragment\n    }\n  }\n": types.UserDocument,
    "\n  fragment PageInfoFragment on PageInfo {\n    hasPreviousPage\n    hasNextPage\n    startCursor\n    endCursor\n  }\n": types.PageInfoFragmentFragmentDoc,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AccordSummaryFragment on Accord {\n    id\n    name\n    color\n  }\n"): (typeof documents)["\n  fragment AccordSummaryFragment on Accord {\n    id\n    name\n    color\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AccordsQuery(\n    $input: AccordPaginationInput\n  ) {\n    accords(input: $input) {\n      edges {\n        node {\n          ...AccordSummaryFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query AccordsQuery(\n    $input: AccordPaginationInput\n  ) {\n    accords(input: $input) {\n      edges {\n        node {\n          ...AccordSummaryFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AuthDeliveryResultFragment on AuthDeliveryResult {\n    isComplete\n\n    delivery {\n      attribute\n      destination\n      method\n    }\n  }\n"): (typeof documents)["\n  fragment AuthDeliveryResultFragment on AuthDeliveryResult {\n    isComplete\n\n    delivery {\n      attribute\n      destination\n      method\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AuthTokenPayloadFragment on AuthTokenPayload {\n    idToken\n    accessToken\n    expiresIn\n  }\n"): (typeof documents)["\n  fragment AuthTokenPayloadFragment on AuthTokenPayload {\n    idToken\n    accessToken\n    expiresIn\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Refresh {\n    refresh {\n      ...AuthTokenPayloadFragment\n    }\n  }\n"): (typeof documents)["\n  mutation Refresh {\n    refresh {\n      ...AuthTokenPayloadFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation LogIn(\n    $input: LogInInput!\n  ) {\n    logIn(input: $input) {\n      ...AuthTokenPayloadFragment\n    }\n  }\n"): (typeof documents)["\n  mutation LogIn(\n    $input: LogInInput!\n  ) {\n    logIn(input: $input) {\n      ...AuthTokenPayloadFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation LogOut {\n    logOut\n  }\n"): (typeof documents)["\n  mutation LogOut {\n    logOut\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SignUp(\n    $input: SignUpInput!\n  ) {\n    signUp(input: $input) {\n      ...AuthDeliveryResultFragment\n    }\n  }\n"): (typeof documents)["\n  mutation SignUp(\n    $input: SignUpInput!\n  ) {\n    signUp(input: $input) {\n      ...AuthDeliveryResultFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ConfirmSignUp(\n    $input: ConfirmSignUpInput!\n  ) {\n    confirmSignUp(input: $input)\n  }\n"): (typeof documents)["\n  mutation ConfirmSignUp(\n    $input: ConfirmSignUpInput!\n  ) {\n    confirmSignUp(input: $input)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ResendSignUpCode(\n    $input: ResendSignUpCodeInput!\n  ) {\n    resendSignUpCode(input: $input) {\n      ...AuthDeliveryResultFragment\n    }\n  }\n"): (typeof documents)["\n  mutation ResendSignUpCode(\n    $input: ResendSignUpCodeInput!\n  ) {\n    resendSignUpCode(input: $input) {\n      ...AuthDeliveryResultFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ForgotPassword(\n    $input: ForgotPasswordInput!\n  ) {\n    forgotPassword(input: $input) {\n      ...AuthDeliveryResultFragment\n    }\n  }\n"): (typeof documents)["\n  mutation ForgotPassword(\n    $input: ForgotPasswordInput!\n  ) {\n    forgotPassword(input: $input) {\n      ...AuthDeliveryResultFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ConfirmForgotPassword(\n    $input: ConfirmForgotPasswordInput!\n  ) {\n    confirmForgotPassword(input: $input) \n  }\n"): (typeof documents)["\n  mutation ConfirmForgotPassword(\n    $input: ConfirmForgotPasswordInput!\n  ) {\n    confirmForgotPassword(input: $input) \n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment NoteSummaryFragment on Note {\n    id\n    name\n    thumbnailUrl\n  }\n"): (typeof documents)["\n  fragment NoteSummaryFragment on Note {\n    id\n    name\n    thumbnailUrl\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Notes(\n    $input: NotePaginationInput\n  ) {\n    notes(input: $input) {\n      edges {\n        node {\n          ...NoteSummaryFragment\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query Notes(\n    $input: NotePaginationInput\n  ) {\n    notes(input: $input) {\n      edges {\n        node {\n          ...NoteSummaryFragment\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment UserSummaryFragment on User {\n    id\n    username\n    email\n\n    avatarSrc\n    avatarStatus\n  }\n"): (typeof documents)["\n  fragment UserSummaryFragment on User {\n    id\n    username\n    email\n\n    avatarSrc\n    avatarStatus\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateUser(\n    $input: UpdateUserInput!\n  ) {\n    updateUser(input: $input) {\n      ...UserSummaryFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUser(\n    $input: UpdateUserInput!\n  ) {\n    updateUser(input: $input) {\n      ...UserSummaryFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateUserAvatar(\n    $input: UpdateUserAvatarInput!\n  ) {\n    updateUserAvatar(input: $input) {\n      avatarId\n      uploadUrl\n      contentType\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUserAvatar(\n    $input: UpdateUserAvatarInput!\n  ) {\n    updateUserAvatar(input: $input) {\n      avatarId\n      uploadUrl\n      contentType\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Me {\n    me {\n      ...UserSummaryFragment\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    me {\n      ...UserSummaryFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query User(\n    $id: ID!\n  ) {\n    user(id: $id) {\n      ...UserSummaryFragment\n    }\n  }\n"): (typeof documents)["\n  query User(\n    $id: ID!\n  ) {\n    user(id: $id) {\n      ...UserSummaryFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment PageInfoFragment on PageInfo {\n    hasPreviousPage\n    hasNextPage\n    startCursor\n    endCursor\n  }\n"): (typeof documents)["\n  fragment PageInfoFragment on PageInfo {\n    hasPreviousPage\n    hasNextPage\n    startCursor\n    endCursor\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;