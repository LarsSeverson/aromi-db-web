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
    "\n  fragment FragranceDraftShell on FragranceDraft {\n    id\n    version\n  }\n": typeof types.FragranceDraftShellFragmentDoc,
    "\n  fragment FragranceDraftSummary on FragranceDraft {\n    id\n    version\n\n    name\n    description\n    releaseYear\n    concentration\n    status\n  }\n": typeof types.FragranceDraftSummaryFragmentDoc,
    "\n  fragment FragranceDraftPreview on FragranceDraft {\n    ...FragranceDraftShell\n    image {\n      ...FragranceDraftImageSummary\n    }\n  }\n": typeof types.FragranceDraftPreviewFragmentDoc,
    "\n  fragment FragranceDraftTraitsFragment on FragranceDraft { \n    ...FragranceDraftShell\n    traits {\n      ...FragranceDraftTraitFragment\n    }\n  }\n": typeof types.FragranceDraftTraitsFragmentFragmentDoc,
    "\n  fragment FragranceDraftAccordsFragment on FragranceDraft { \n    ...FragranceDraftShell\n    accords {\n      ...AccordSummaryFragment\n    }\n  }\n": typeof types.FragranceDraftAccordsFragmentFragmentDoc,
    "\n  fragment FragranceDraftImageSummary on FragranceDraftImage {\n    id\n    url\n    type\n  }\n": typeof types.FragranceDraftImageSummaryFragmentDoc,
    "\n  fragment FragranceDraftTraitFragment on FragranceDraftTrait {\n    traitType\n    selectedOption {\n      ...TraitOptionFragment\n    }\n  }\n": typeof types.FragranceDraftTraitFragmentFragmentDoc,
    "\n  mutation CreateFragranceDraft(\n    $input: CreateFragranceDraftInput!\n  ) {\n    createFragranceDraft(input: $input) {\n      ...FragranceDraftSummary\n    }\n  }\n": typeof types.CreateFragranceDraftDocument,
    "\n  mutation UpdateFragranceDraft(\n    $input: UpdateFragranceDraftInput!\n  ) {\n    updateFragranceDraft(input: $input) {\n      ...FragranceDraftSummary\n    }\n  }\n": typeof types.UpdateFragranceDraftDocument,
    "\n  mutation DeleteFragranceDraft(\n    $input: DeleteFragranceDraftInput!\n  ) {\n    deleteFragranceDraft(input: $input) {\n      ...FragranceDraftSummary\n    }\n  }\n": typeof types.DeleteFragranceDraftDocument,
    "\n  mutation StageFragranceDraftImage(\n    $input: StageAssetInput!\n  ) {\n    stageFragranceDraftImage(input: $input) {\n      ...PresignedUploadFragment\n    }\n  }\n": typeof types.StageFragranceDraftImageDocument,
    "\n  mutation FinalizeFragranceDraftImage(\n    $input: FinalizeFragranceDraftImageInput!\n  ) {\n    finalizeFragranceDraftImage(input: $input) {\n      ...FragranceDraftPreview\n    }\n  }\n": typeof types.FinalizeFragranceDraftImageDocument,
    "\n  mutation SetFragranceDraftTrait(\n    $input: SetFragranceDraftTraitInput!\n  ) {\n    setFragranceDraftTrait(input: $input) {\n      ...FragranceDraftTraitsFragment\n    }\n  }\n": typeof types.SetFragranceDraftTraitDocument,
    "\n  mutation SetFragranceDraftAccords(\n    $input: SetFragranceDraftAccordsInput!\n  ) {\n    setFragranceDraftAccords(input: $input) {\n      ...FragranceDraftAccordsFragment\n    }\n  }\n": typeof types.SetFragranceDraftAccordsDocument,
    "\n  query FragranceDraftShell(\n    $id: ID!\n  ) {\n    fragranceDraft(id: $id) {\n      ...FragranceDraftShell\n    }\n  }\n": typeof types.FragranceDraftShellDocument,
    "\n  query FragranceDraft(\n    $id: ID!\n  ) {\n    fragranceDraft(id: $id) {\n      ...FragranceDraftSummary\n    }\n  }\n": typeof types.FragranceDraftDocument,
    "\n  query FragranceDraftPreview(\n    $id: ID!\n  ) {\n    fragranceDraft(id: $id) {\n      ...FragranceDraftPreview\n    }\n  }\n": typeof types.FragranceDraftPreviewDocument,
    "\n  query FragranceDrafts(\n    $input: DraftPaginationInput\n  ) {\n    fragranceDrafts(input: $input) {\n      edges {\n        node {\n          ...FragranceDraftPreview\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": typeof types.FragranceDraftsDocument,
    "\n  query FragranceDraftTrait(\n    $id: ID!\n    $type: TraitTypeEnum!\n  ) {\n    fragranceDraft(id: $id) {\n      id\n      version\n      trait(type: $type) {\n        ...FragranceDraftTraitFragment\n      }\n    }\n  }\n": typeof types.FragranceDraftTraitDocument,
    "\n  query FragranceDraftTraits(\n    $id: ID!\n  ) {\n    fragranceDraft(id: $id) {\n      ...FragranceDraftTraitsFragment\n    }\n  }\n": typeof types.FragranceDraftTraitsDocument,
    "\n  query FragranceDraftAccords(\n    $id: ID!\n  ) {\n    fragranceDraft(id: $id) {\n      ...FragranceDraftAccordsFragment\n    }\n  }\n": typeof types.FragranceDraftAccordsDocument,
    "\n  fragment NoteSummaryFragment on Note {\n    id\n    name\n    thumbnailUrl\n  }\n": typeof types.NoteSummaryFragmentFragmentDoc,
    "\n  query Notes(\n    $input: NotePaginationInput\n  ) {\n    notes(input: $input) {\n      edges {\n        node {\n          ...NoteSummaryFragment\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": typeof types.NotesDocument,
    "\n  fragment TraitOptionFragment on TraitOption {\n    id\n    label\n    score\n  }\n": typeof types.TraitOptionFragmentFragmentDoc,
    "\n  fragment UserSummaryFragment on User {\n    id\n    username\n    email\n\n    avatarSrc\n    avatarStatus\n  }\n": typeof types.UserSummaryFragmentFragmentDoc,
    "\n  mutation UpdateUser(\n    $input: UpdateUserInput!\n  ) {\n    updateUser(input: $input) {\n      ...UserSummaryFragment\n    }\n  }\n": typeof types.UpdateUserDocument,
    "\n  mutation UpdateUserAvatar(\n    $input: StageAssetInput!\n  ) {\n    updateUserAvatar(input: $input) {\n      ...PresignedUploadFragment\n    }\n  }\n": typeof types.UpdateUserAvatarDocument,
    "\n  query Me {\n    me {\n      ...UserSummaryFragment\n    }\n  }\n": typeof types.MeDocument,
    "\n  query User(\n    $id: ID!\n  ) {\n    user(id: $id) {\n      ...UserSummaryFragment\n    }\n  }\n": typeof types.UserDocument,
    "\n  fragment PageInfoFragment on PageInfo {\n    hasPreviousPage\n    hasNextPage\n    startCursor\n    endCursor\n  }\n": typeof types.PageInfoFragmentFragmentDoc,
    "\n  fragment PresignedUploadFragment on PresignedUpload {\n    id\n    url\n    fields\n  }\n": typeof types.PresignedUploadFragmentFragmentDoc,
    "\n  fragment AssetFragment on Asset {\n    id\n    url\n    name\n    size\n    type\n  }\n": typeof types.AssetFragmentFragmentDoc,
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
    "\n  fragment FragranceDraftShell on FragranceDraft {\n    id\n    version\n  }\n": types.FragranceDraftShellFragmentDoc,
    "\n  fragment FragranceDraftSummary on FragranceDraft {\n    id\n    version\n\n    name\n    description\n    releaseYear\n    concentration\n    status\n  }\n": types.FragranceDraftSummaryFragmentDoc,
    "\n  fragment FragranceDraftPreview on FragranceDraft {\n    ...FragranceDraftShell\n    image {\n      ...FragranceDraftImageSummary\n    }\n  }\n": types.FragranceDraftPreviewFragmentDoc,
    "\n  fragment FragranceDraftTraitsFragment on FragranceDraft { \n    ...FragranceDraftShell\n    traits {\n      ...FragranceDraftTraitFragment\n    }\n  }\n": types.FragranceDraftTraitsFragmentFragmentDoc,
    "\n  fragment FragranceDraftAccordsFragment on FragranceDraft { \n    ...FragranceDraftShell\n    accords {\n      ...AccordSummaryFragment\n    }\n  }\n": types.FragranceDraftAccordsFragmentFragmentDoc,
    "\n  fragment FragranceDraftImageSummary on FragranceDraftImage {\n    id\n    url\n    type\n  }\n": types.FragranceDraftImageSummaryFragmentDoc,
    "\n  fragment FragranceDraftTraitFragment on FragranceDraftTrait {\n    traitType\n    selectedOption {\n      ...TraitOptionFragment\n    }\n  }\n": types.FragranceDraftTraitFragmentFragmentDoc,
    "\n  mutation CreateFragranceDraft(\n    $input: CreateFragranceDraftInput!\n  ) {\n    createFragranceDraft(input: $input) {\n      ...FragranceDraftSummary\n    }\n  }\n": types.CreateFragranceDraftDocument,
    "\n  mutation UpdateFragranceDraft(\n    $input: UpdateFragranceDraftInput!\n  ) {\n    updateFragranceDraft(input: $input) {\n      ...FragranceDraftSummary\n    }\n  }\n": types.UpdateFragranceDraftDocument,
    "\n  mutation DeleteFragranceDraft(\n    $input: DeleteFragranceDraftInput!\n  ) {\n    deleteFragranceDraft(input: $input) {\n      ...FragranceDraftSummary\n    }\n  }\n": types.DeleteFragranceDraftDocument,
    "\n  mutation StageFragranceDraftImage(\n    $input: StageAssetInput!\n  ) {\n    stageFragranceDraftImage(input: $input) {\n      ...PresignedUploadFragment\n    }\n  }\n": types.StageFragranceDraftImageDocument,
    "\n  mutation FinalizeFragranceDraftImage(\n    $input: FinalizeFragranceDraftImageInput!\n  ) {\n    finalizeFragranceDraftImage(input: $input) {\n      ...FragranceDraftPreview\n    }\n  }\n": types.FinalizeFragranceDraftImageDocument,
    "\n  mutation SetFragranceDraftTrait(\n    $input: SetFragranceDraftTraitInput!\n  ) {\n    setFragranceDraftTrait(input: $input) {\n      ...FragranceDraftTraitsFragment\n    }\n  }\n": types.SetFragranceDraftTraitDocument,
    "\n  mutation SetFragranceDraftAccords(\n    $input: SetFragranceDraftAccordsInput!\n  ) {\n    setFragranceDraftAccords(input: $input) {\n      ...FragranceDraftAccordsFragment\n    }\n  }\n": types.SetFragranceDraftAccordsDocument,
    "\n  query FragranceDraftShell(\n    $id: ID!\n  ) {\n    fragranceDraft(id: $id) {\n      ...FragranceDraftShell\n    }\n  }\n": types.FragranceDraftShellDocument,
    "\n  query FragranceDraft(\n    $id: ID!\n  ) {\n    fragranceDraft(id: $id) {\n      ...FragranceDraftSummary\n    }\n  }\n": types.FragranceDraftDocument,
    "\n  query FragranceDraftPreview(\n    $id: ID!\n  ) {\n    fragranceDraft(id: $id) {\n      ...FragranceDraftPreview\n    }\n  }\n": types.FragranceDraftPreviewDocument,
    "\n  query FragranceDrafts(\n    $input: DraftPaginationInput\n  ) {\n    fragranceDrafts(input: $input) {\n      edges {\n        node {\n          ...FragranceDraftPreview\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": types.FragranceDraftsDocument,
    "\n  query FragranceDraftTrait(\n    $id: ID!\n    $type: TraitTypeEnum!\n  ) {\n    fragranceDraft(id: $id) {\n      id\n      version\n      trait(type: $type) {\n        ...FragranceDraftTraitFragment\n      }\n    }\n  }\n": types.FragranceDraftTraitDocument,
    "\n  query FragranceDraftTraits(\n    $id: ID!\n  ) {\n    fragranceDraft(id: $id) {\n      ...FragranceDraftTraitsFragment\n    }\n  }\n": types.FragranceDraftTraitsDocument,
    "\n  query FragranceDraftAccords(\n    $id: ID!\n  ) {\n    fragranceDraft(id: $id) {\n      ...FragranceDraftAccordsFragment\n    }\n  }\n": types.FragranceDraftAccordsDocument,
    "\n  fragment NoteSummaryFragment on Note {\n    id\n    name\n    thumbnailUrl\n  }\n": types.NoteSummaryFragmentFragmentDoc,
    "\n  query Notes(\n    $input: NotePaginationInput\n  ) {\n    notes(input: $input) {\n      edges {\n        node {\n          ...NoteSummaryFragment\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": types.NotesDocument,
    "\n  fragment TraitOptionFragment on TraitOption {\n    id\n    label\n    score\n  }\n": types.TraitOptionFragmentFragmentDoc,
    "\n  fragment UserSummaryFragment on User {\n    id\n    username\n    email\n\n    avatarSrc\n    avatarStatus\n  }\n": types.UserSummaryFragmentFragmentDoc,
    "\n  mutation UpdateUser(\n    $input: UpdateUserInput!\n  ) {\n    updateUser(input: $input) {\n      ...UserSummaryFragment\n    }\n  }\n": types.UpdateUserDocument,
    "\n  mutation UpdateUserAvatar(\n    $input: StageAssetInput!\n  ) {\n    updateUserAvatar(input: $input) {\n      ...PresignedUploadFragment\n    }\n  }\n": types.UpdateUserAvatarDocument,
    "\n  query Me {\n    me {\n      ...UserSummaryFragment\n    }\n  }\n": types.MeDocument,
    "\n  query User(\n    $id: ID!\n  ) {\n    user(id: $id) {\n      ...UserSummaryFragment\n    }\n  }\n": types.UserDocument,
    "\n  fragment PageInfoFragment on PageInfo {\n    hasPreviousPage\n    hasNextPage\n    startCursor\n    endCursor\n  }\n": types.PageInfoFragmentFragmentDoc,
    "\n  fragment PresignedUploadFragment on PresignedUpload {\n    id\n    url\n    fields\n  }\n": types.PresignedUploadFragmentFragmentDoc,
    "\n  fragment AssetFragment on Asset {\n    id\n    url\n    name\n    size\n    type\n  }\n": types.AssetFragmentFragmentDoc,
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
export function gql(source: "\n  fragment FragranceDraftShell on FragranceDraft {\n    id\n    version\n  }\n"): (typeof documents)["\n  fragment FragranceDraftShell on FragranceDraft {\n    id\n    version\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceDraftSummary on FragranceDraft {\n    id\n    version\n\n    name\n    description\n    releaseYear\n    concentration\n    status\n  }\n"): (typeof documents)["\n  fragment FragranceDraftSummary on FragranceDraft {\n    id\n    version\n\n    name\n    description\n    releaseYear\n    concentration\n    status\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceDraftPreview on FragranceDraft {\n    ...FragranceDraftShell\n    image {\n      ...FragranceDraftImageSummary\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceDraftPreview on FragranceDraft {\n    ...FragranceDraftShell\n    image {\n      ...FragranceDraftImageSummary\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceDraftTraitsFragment on FragranceDraft { \n    ...FragranceDraftShell\n    traits {\n      ...FragranceDraftTraitFragment\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceDraftTraitsFragment on FragranceDraft { \n    ...FragranceDraftShell\n    traits {\n      ...FragranceDraftTraitFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceDraftAccordsFragment on FragranceDraft { \n    ...FragranceDraftShell\n    accords {\n      ...AccordSummaryFragment\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceDraftAccordsFragment on FragranceDraft { \n    ...FragranceDraftShell\n    accords {\n      ...AccordSummaryFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceDraftImageSummary on FragranceDraftImage {\n    id\n    url\n    type\n  }\n"): (typeof documents)["\n  fragment FragranceDraftImageSummary on FragranceDraftImage {\n    id\n    url\n    type\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceDraftTraitFragment on FragranceDraftTrait {\n    traitType\n    selectedOption {\n      ...TraitOptionFragment\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceDraftTraitFragment on FragranceDraftTrait {\n    traitType\n    selectedOption {\n      ...TraitOptionFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateFragranceDraft(\n    $input: CreateFragranceDraftInput!\n  ) {\n    createFragranceDraft(input: $input) {\n      ...FragranceDraftSummary\n    }\n  }\n"): (typeof documents)["\n  mutation CreateFragranceDraft(\n    $input: CreateFragranceDraftInput!\n  ) {\n    createFragranceDraft(input: $input) {\n      ...FragranceDraftSummary\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateFragranceDraft(\n    $input: UpdateFragranceDraftInput!\n  ) {\n    updateFragranceDraft(input: $input) {\n      ...FragranceDraftSummary\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateFragranceDraft(\n    $input: UpdateFragranceDraftInput!\n  ) {\n    updateFragranceDraft(input: $input) {\n      ...FragranceDraftSummary\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteFragranceDraft(\n    $input: DeleteFragranceDraftInput!\n  ) {\n    deleteFragranceDraft(input: $input) {\n      ...FragranceDraftSummary\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteFragranceDraft(\n    $input: DeleteFragranceDraftInput!\n  ) {\n    deleteFragranceDraft(input: $input) {\n      ...FragranceDraftSummary\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation StageFragranceDraftImage(\n    $input: StageAssetInput!\n  ) {\n    stageFragranceDraftImage(input: $input) {\n      ...PresignedUploadFragment\n    }\n  }\n"): (typeof documents)["\n  mutation StageFragranceDraftImage(\n    $input: StageAssetInput!\n  ) {\n    stageFragranceDraftImage(input: $input) {\n      ...PresignedUploadFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation FinalizeFragranceDraftImage(\n    $input: FinalizeFragranceDraftImageInput!\n  ) {\n    finalizeFragranceDraftImage(input: $input) {\n      ...FragranceDraftPreview\n    }\n  }\n"): (typeof documents)["\n  mutation FinalizeFragranceDraftImage(\n    $input: FinalizeFragranceDraftImageInput!\n  ) {\n    finalizeFragranceDraftImage(input: $input) {\n      ...FragranceDraftPreview\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SetFragranceDraftTrait(\n    $input: SetFragranceDraftTraitInput!\n  ) {\n    setFragranceDraftTrait(input: $input) {\n      ...FragranceDraftTraitsFragment\n    }\n  }\n"): (typeof documents)["\n  mutation SetFragranceDraftTrait(\n    $input: SetFragranceDraftTraitInput!\n  ) {\n    setFragranceDraftTrait(input: $input) {\n      ...FragranceDraftTraitsFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SetFragranceDraftAccords(\n    $input: SetFragranceDraftAccordsInput!\n  ) {\n    setFragranceDraftAccords(input: $input) {\n      ...FragranceDraftAccordsFragment\n    }\n  }\n"): (typeof documents)["\n  mutation SetFragranceDraftAccords(\n    $input: SetFragranceDraftAccordsInput!\n  ) {\n    setFragranceDraftAccords(input: $input) {\n      ...FragranceDraftAccordsFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceDraftShell(\n    $id: ID!\n  ) {\n    fragranceDraft(id: $id) {\n      ...FragranceDraftShell\n    }\n  }\n"): (typeof documents)["\n  query FragranceDraftShell(\n    $id: ID!\n  ) {\n    fragranceDraft(id: $id) {\n      ...FragranceDraftShell\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceDraft(\n    $id: ID!\n  ) {\n    fragranceDraft(id: $id) {\n      ...FragranceDraftSummary\n    }\n  }\n"): (typeof documents)["\n  query FragranceDraft(\n    $id: ID!\n  ) {\n    fragranceDraft(id: $id) {\n      ...FragranceDraftSummary\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceDraftPreview(\n    $id: ID!\n  ) {\n    fragranceDraft(id: $id) {\n      ...FragranceDraftPreview\n    }\n  }\n"): (typeof documents)["\n  query FragranceDraftPreview(\n    $id: ID!\n  ) {\n    fragranceDraft(id: $id) {\n      ...FragranceDraftPreview\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceDrafts(\n    $input: DraftPaginationInput\n  ) {\n    fragranceDrafts(input: $input) {\n      edges {\n        node {\n          ...FragranceDraftPreview\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragranceDrafts(\n    $input: DraftPaginationInput\n  ) {\n    fragranceDrafts(input: $input) {\n      edges {\n        node {\n          ...FragranceDraftPreview\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceDraftTrait(\n    $id: ID!\n    $type: TraitTypeEnum!\n  ) {\n    fragranceDraft(id: $id) {\n      id\n      version\n      trait(type: $type) {\n        ...FragranceDraftTraitFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragranceDraftTrait(\n    $id: ID!\n    $type: TraitTypeEnum!\n  ) {\n    fragranceDraft(id: $id) {\n      id\n      version\n      trait(type: $type) {\n        ...FragranceDraftTraitFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceDraftTraits(\n    $id: ID!\n  ) {\n    fragranceDraft(id: $id) {\n      ...FragranceDraftTraitsFragment\n    }\n  }\n"): (typeof documents)["\n  query FragranceDraftTraits(\n    $id: ID!\n  ) {\n    fragranceDraft(id: $id) {\n      ...FragranceDraftTraitsFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceDraftAccords(\n    $id: ID!\n  ) {\n    fragranceDraft(id: $id) {\n      ...FragranceDraftAccordsFragment\n    }\n  }\n"): (typeof documents)["\n  query FragranceDraftAccords(\n    $id: ID!\n  ) {\n    fragranceDraft(id: $id) {\n      ...FragranceDraftAccordsFragment\n    }\n  }\n"];
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
export function gql(source: "\n  fragment TraitOptionFragment on TraitOption {\n    id\n    label\n    score\n  }\n"): (typeof documents)["\n  fragment TraitOptionFragment on TraitOption {\n    id\n    label\n    score\n  }\n"];
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
export function gql(source: "\n  mutation UpdateUserAvatar(\n    $input: StageAssetInput!\n  ) {\n    updateUserAvatar(input: $input) {\n      ...PresignedUploadFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUserAvatar(\n    $input: StageAssetInput!\n  ) {\n    updateUserAvatar(input: $input) {\n      ...PresignedUploadFragment\n    }\n  }\n"];
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
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment PresignedUploadFragment on PresignedUpload {\n    id\n    url\n    fields\n  }\n"): (typeof documents)["\n  fragment PresignedUploadFragment on PresignedUpload {\n    id\n    url\n    fields\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AssetFragment on Asset {\n    id\n    url\n    name\n    size\n    type\n  }\n"): (typeof documents)["\n  fragment AssetFragment on Asset {\n    id\n    url\n    name\n    size\n    type\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;