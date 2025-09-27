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
    "\n  fragment AccordFragment on Accord {\n    id\n    name\n    color\n  }\n": typeof types.AccordFragmentFragmentDoc,
    "\n  fragment AccordEditFragment on AccordEdit { \n    id\n    status\n    reason\n\n    proposedName\n    proposedColor\n    proposedDescription\n\n    accord {\n      ...AccordFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n    reviewer {\n      ...UserPreviewFragment\n    }\n  }\n": typeof types.AccordEditFragmentFragmentDoc,
    "\n  fragment AccordRequestFragment on AccordRequest { \n    id\n    version\n    requestStatus\n    name\n    description\n    color\n\n    thumbnail {\n      ...AssetPreviewFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n  }\n": typeof types.AccordRequestFragmentFragmentDoc,
    "\n  mutation CreateAccordEditMutation(\n    $input: CreateAccordEditInput!\n  ) {\n    createAccordEdit(input: $input) {\n      ...AccordEditFragment\n    }\n  }\n": typeof types.CreateAccordEditMutationDocument,
    "\n  mutation ReviewAccordEditMutation(\n    $input: ReviewAccordEditInput!\n  ) {\n    reviewAccordEdit(input: $input) {\n      ...AccordEditFragment\n    }\n  }\n": typeof types.ReviewAccordEditMutationDocument,
    "\n  mutation CreateAccordRequestMutation(\n    $input: CreateAccordRequestInput!\n  ) {\n    createAccordRequest(input: $input) {\n      ...AccordRequestFragment\n    }\n  }\n": typeof types.CreateAccordRequestMutationDocument,
    "\n  mutation UpdateAccordRequestMutation(\n    $input: UpdateAccordRequestInput!\n  ) {\n    updateAccordRequest(input: $input) {\n      ...AccordRequestFragment\n    }\n  }\n": typeof types.UpdateAccordRequestMutationDocument,
    "\n  mutation DeleteAccordRequestMutation(\n    $input: DeleteAccordRequestInput!\n  ) {\n    deleteAccordRequest(input: $input) {\n      ...AccordRequestFragment\n    }\n  }\n": typeof types.DeleteAccordRequestMutationDocument,
    "\n  mutation SubmitAccordRequestMutation(\n    $input: SubmitAccordRequestInput!\n  ) {\n    submitAccordRequest(input: $input) {\n      ...AccordRequestFragment\n    }\n  }\n": typeof types.SubmitAccordRequestMutationDocument,
    "\n  mutation VoteOnAccordRequestMutation(\n    $input: VoteOnAccordRequestInput!\n  ) {\n    voteOnAccordRequest(input: $input) {\n      ...AccordRequestFragment\n    }\n  }\n": typeof types.VoteOnAccordRequestMutationDocument,
    "\n  query AccordQuery(\n    $id: ID!\n  ) {\n    accord(id: $id) {\n      ...AccordFragment\n    }\n  }\n": typeof types.AccordQueryDocument,
    "\n  query AccordsQuery(\n    $input: AccordPaginationInput\n  ) {\n    accords(input: $input) {\n      edges {\n        node {\n          ...AccordFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": typeof types.AccordsQueryDocument,
    "\n  query SearchAccordsQuery(\n    $input: SearchInput\n  ) {\n    searchAccords(input: $input) {\n      edges {\n        node {\n          ...AccordFragment \n        }\n      } \n      pageInfo {\n        ...SearchPageInfoFragment\n      }\n    }\n  }\n": typeof types.SearchAccordsQueryDocument,
    "\n  query AccordEditQuery(\n    $id: ID!\n  ) {\n    accordEdit(id: $id) {\n      ...AccordEditFragment\n    }\n  }\n": typeof types.AccordEditQueryDocument,
    "\n  query AccordEditsQuery(\n    $input: AccordEditPaginationInput\n  ) {\n    accordEdits(input: $input) {\n      edges {\n        node {\n          ...AccordEditFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": typeof types.AccordEditsQueryDocument,
    "\n  query AccordRequestQuery(\n    $id: ID!\n  ) {\n    accordRequest(id: $id) {\n      ...AccordRequestFragment\n    }\n  }\n": typeof types.AccordRequestQueryDocument,
    "\n  query AccordRequestsQuery(\n    $input: RequestPaginationInput\n  ) {\n    accordRequests(input: $input) {\n      edges {\n        node {\n          ...AccordRequestFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": typeof types.AccordRequestsQueryDocument,
    "\n  fragment AssetFragment on Asset {\n    id\n    url\n    name\n    contentType\n    contentSize\n    s3Key\n  }\n": typeof types.AssetFragmentFragmentDoc,
    "\n  fragment AssetPreviewFragment on Asset {\n    id\n    url\n  }\n": typeof types.AssetPreviewFragmentFragmentDoc,
    "\n  fragment PresignedUploadFragment on PresignedUpload {\n    assetId\n    url\n    fields \n  }\n": typeof types.PresignedUploadFragmentFragmentDoc,
    "\n  mutation StageAsset(\n    $input: StageAssetInput!\n  ) {\n    stageAsset(input: $input) {\n      ...PresignedUploadFragment\n    }\n  }\n": typeof types.StageAssetDocument,
    "\n  mutation DeleteAsset(\n    $input: DeleteAssetInput!\n  ) {\n    deleteAsset(input: $input)\n  }\n": typeof types.DeleteAssetDocument,
    "\n  fragment AuthTokenPayloadFragment on AuthTokenPayload {\n    idToken \n    accessToken\n    expiresIn\n  }\n": typeof types.AuthTokenPayloadFragmentFragmentDoc,
    "\n  fragment AuthCodeDeliveryDetailsFragment on AuthCodeDeliveryDetails {\n    method\n    attribute\n    destination\n  }\n": typeof types.AuthCodeDeliveryDetailsFragmentFragmentDoc,
    "\n  fragment AuthDeliveryResultFragment on AuthDeliveryResult {\n    isComplete \n    delivery {\n      ...AuthCodeDeliveryDetailsFragment\n    }\n  }\n": typeof types.AuthDeliveryResultFragmentFragmentDoc,
    "\n  mutation Refresh {\n    refresh {\n      ...AuthTokenPayloadFragment\n    }\n  }\n": typeof types.RefreshDocument,
    "\n  mutation LogIn(\n    $input: LogInInput!\n  ) {\n    logIn(input: $input) {\n      ...AuthTokenPayloadFragment\n    }\n  }\n": typeof types.LogInDocument,
    "\n  mutation LogOut {\n    logOut\n  }\n": typeof types.LogOutDocument,
    "\n  mutation SignUp(\n    $input: SignUpInput!\n  ) {\n    signUp(input: $input) {\n      ...AuthDeliveryResultFragment\n    }\n  }\n": typeof types.SignUpDocument,
    "\n  mutation ConfirmSignUp(\n    $input: ConfirmSignUpInput!\n  ) {\n    confirmSignUp(input: $input)\n  }\n": typeof types.ConfirmSignUpDocument,
    "\n  mutation ResendSignUpCode(\n    $input: ResendSignUpCodeInput!\n  ) {\n    resendSignUpCode(input: $input) {\n      ...AuthDeliveryResultFragment\n    }\n  }\n": typeof types.ResendSignUpCodeDocument,
    "\n  mutation ForgotPassword(\n    $input: ForgotPasswordInput!\n  ) {\n    forgotPassword(input: $input) {\n      ...AuthDeliveryResultFragment\n    }\n  }\n": typeof types.ForgotPasswordDocument,
    "\n  mutation ConfirmForgotPassword(\n    $input: ConfirmForgotPasswordInput!\n  ) {\n    confirmForgotPassword(input: $input) \n  }\n": typeof types.ConfirmForgotPasswordDocument,
    "\n  fragment BrandFragment on Brand {\n    id\n    name\n    website\n    description\n    avatar {\n      ...AssetFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n  }\n": typeof types.BrandFragmentFragmentDoc,
    "\n  fragment BrandPreviewFragment on Brand {\n    id\n    name\n    avatar {\n      ...AssetPreviewFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n  }\n": typeof types.BrandPreviewFragmentFragmentDoc,
    "\n  fragment BrandEditFragment on BrandEdit { \n    id\n    status\n    reason\n\n    proposedName\n    proposedDescription\n    proposedWebsite\n    proposedAvatar {\n      ...AssetPreviewFragment\n    }\n\n    brand {\n      ...BrandFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n    reviewer {\n      ...UserPreviewFragment\n    }\n  }\n": typeof types.BrandEditFragmentFragmentDoc,
    "\n  fragment BrandRequestFragment on BrandRequest { \n    id\n    version\n    requestStatus\n    name\n    website\n    description\n\n    avatar {\n      ...AssetPreviewFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n  }\n": typeof types.BrandRequestFragmentFragmentDoc,
    "\n  mutation VoteOnBrandMutation(\n    $input: VoteOnBrandInput!\n  ) {\n    voteOnBrand(input: $input) {\n      ...BrandPreviewFragment\n    }\n  }\n": typeof types.VoteOnBrandMutationDocument,
    "\n  mutation CreateBrandEditMutation(\n    $input: CreateBrandEditInput!\n  ) {\n    createBrandEdit(input: $input) {\n      ...BrandEditFragment\n    }\n  }\n": typeof types.CreateBrandEditMutationDocument,
    "\n  mutation ReviewBrandEditMutation(\n    $input: ReviewBrandEditInput!\n  ) {\n    reviewBrandEdit(input: $input) {\n      ...BrandEditFragment\n    }\n  }\n": typeof types.ReviewBrandEditMutationDocument,
    "\n  mutation CreateBrandRequestMutation(\n    $input: CreateBrandRequestInput!\n  ) {\n    createBrandRequest(input: $input) {\n      ...BrandRequestFragment\n    }\n  }\n": typeof types.CreateBrandRequestMutationDocument,
    "\n  mutation UpdateBrandRequestMutation(\n    $input: UpdateBrandRequestInput!\n  ) {\n    updateBrandRequest(input: $input) {\n      ...BrandRequestFragment\n    }\n  }\n": typeof types.UpdateBrandRequestMutationDocument,
    "\n  mutation DeleteBrandRequestMutation(\n    $input: DeleteBrandRequestInput!\n  ) {\n    deleteBrandRequest(input: $input) {\n      ...BrandRequestFragment\n    }\n  }\n": typeof types.DeleteBrandRequestMutationDocument,
    "\n  mutation SubmitBrandRequestMutation(\n    $input: SubmitBrandRequestInput!\n  ) {\n    submitBrandRequest(input: $input) {\n      ...BrandRequestFragment\n    }\n  }\n": typeof types.SubmitBrandRequestMutationDocument,
    "\n  mutation VoteOnBrandRequestMutation(\n    $input: VoteOnBrandRequestInput!\n  ) {\n    voteOnBrandRequest(input: $input) {\n      ...BrandRequestFragment\n    }\n  }\n": typeof types.VoteOnBrandRequestMutationDocument,
    "\n  query Brand($id: ID!) {\n    brand(id: $id) {\n      ...BrandPreviewFragment\n    }\n  }\n": typeof types.BrandDocument,
    "\n  query Brands($input: BrandPaginationInput) {\n    brands(input: $input) {\n      edges {\n        node {\n          ...BrandPreviewFragment\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": typeof types.BrandsDocument,
    "\n  query SearchBrands($input: SearchInput) {\n    searchBrands(input: $input) {\n      edges {\n        node {\n          ...BrandPreviewFragment\n        }\n      }\n      pageInfo {\n        ...SearchPageInfoFragment\n      } \n    }\n  }\n": typeof types.SearchBrandsDocument,
    "\n  query BrandFragrances($id: ID!, $input: FragrancePaginationInput) {\n    brand(id: $id) {\n      id\n      fragrances(input: $input) {\n        edges {\n          node {\n            ...FragrancePreviewFragment\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": typeof types.BrandFragrancesDocument,
    "\n  query BrandEdit($id: ID!) {\n    brandEdit(id: $id) {\n      ...BrandEditFragment\n    }\n  }\n": typeof types.BrandEditDocument,
    "\n  query BrandEdits($input: BrandEditPaginationInput) {\n    brandEdits(input: $input) {\n      edges {\n        node {\n          ...BrandEditFragment\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": typeof types.BrandEditsDocument,
    "\n  query BrandRequest($id: ID!) {\n    brandRequest(id: $id) {\n      ...BrandRequestFragment\n    }\n  }\n": typeof types.BrandRequestDocument,
    "\n  query BrandRequests($input: RequestPaginationInput) {\n    brandRequests(input: $input) {\n      edges {\n        node {\n          ...BrandRequestFragment\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": typeof types.BrandRequestsDocument,
    "\n  fragment FragranceFragment on Fragrance { \n    id\n    name\n    description\n    releaseYear\n    concentration\n    status\n\n    votes {\n      ...VoteInfoFragment\n    }\n\n    brand {\n      ...BrandPreviewFragment\n    }\n\n    images {\n      ...FragranceImageFragment\n    }\n\n    traits {\n      ...FragranceTraitFragment\n    }\n  }\n": typeof types.FragranceFragmentFragmentDoc,
    "\n  fragment FragrancePreviewFragment on Fragrance { \n    id\n    name\n\n    votes {\n      ...VoteInfoFragment\n    }\n\n    brand {\n      ...BrandPreviewFragment\n    }\n\n    thumbnail {\n      ...FragranceImageFragment\n    }\n  }\n": typeof types.FragrancePreviewFragmentFragmentDoc,
    "\n  fragment FragranceImageFragment on FragranceImage { \n    id\n    url\n    primaryColor\n    width\n    height\n  }\n": typeof types.FragranceImageFragmentFragmentDoc,
    "\n  fragment FragranceAccordFragment on FragranceAccord { \n    id\n    accord {\n      ...AccordFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n  }\n": typeof types.FragranceAccordFragmentFragmentDoc,
    "\n  fragment FragranceNoteFragment on FragranceNote { \n    id\n    note {\n      ...NotePreviewFragment\n    }\n    layer\n    votes {\n      ...VoteInfoFragment\n    }\n  }\n": typeof types.FragranceNoteFragmentFragmentDoc,
    "\n  fragment FragranceTraitFragment on FragranceTrait { \n    id\n    type\n    name\n    options {\n      ...TraitOptionFragment\n    } \n    stats {\n      ...TraitStatsFragment\n    }\n    myVote {\n      ...TraitVoteFragment\n    }\n  }\n": typeof types.FragranceTraitFragmentFragmentDoc,
    "\n  fragment FragranceEditFragment on FragranceEdit { \n    id\n    status\n    reason\n\n    proposedName\n    proposedDescription\n    proposedReleaseYear\n    proposedConcentration\n    proposedStatus\n    proposedBrand {\n      ...BrandPreviewFragment\n    }\n    proposedImage {\n      ...AssetPreviewFragment\n    }\n\n    fragrance {\n      ...FragrancePreviewFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n    reviewer {\n      ...UserPreviewFragment\n    }\n  }\n": typeof types.FragranceEditFragmentFragmentDoc,
    "\n  fragment FragranceRequestFragment on FragranceRequest { \n    id\n    version\n    requestStatus\n\n    name\n    description\n    releaseYear\n    concentration\n    fragranceStatus\n\n    brand {\n      ...BrandPreviewFragment\n    }\n\n    image {\n      ...AssetPreviewFragment\n    }\n\n    traits {\n      ...FragranceRequestTraitFragment\n    }\n\n    votes {\n      ...VoteInfoFragment\n    }\n\n    user {\n      ...UserPreviewFragment\n    }\n  }\n": typeof types.FragranceRequestFragmentFragmentDoc,
    "\n  fragment FragranceRequestPreviewFragment on FragranceRequest { \n    id\n    version\n    requestStatus\n\n    name\n\n    brand {\n      ...BrandPreviewFragment\n    }\n\n    image {\n      ...AssetPreviewFragment\n    }\n\n    votes {\n      ...VoteInfoFragment\n    }\n  }\n": typeof types.FragranceRequestPreviewFragmentFragmentDoc,
    "\n  fragment FragranceRequestTraitFragment on FragranceRequestTrait { \n    traitType\n    selectedOption {\n      ...TraitOptionFragment\n    }\n  }\n": typeof types.FragranceRequestTraitFragmentFragmentDoc,
    "\n  fragment FragranceRequestNoteFragment on FragranceRequestNote { \n    id\n    layer\n    note {\n      ...NotePreviewFragment\n    }\n  }\n": typeof types.FragranceRequestNoteFragmentFragmentDoc,
    "\n  mutation VoteOnFragranceMutation(\n    $input: VoteOnFragranceInput!\n  ) {\n    voteOnFragrance(input: $input) {\n      ...FragrancePreviewFragment\n    }\n  }\n": typeof types.VoteOnFragranceMutationDocument,
    "\n  mutation VoteOnFragranceAccordMutation(\n    $input: VoteOnFragranceAccordInput!\n  ) {\n    voteOnFragranceAccord(input: $input) {\n      ...AccordFragment\n    }\n  }\n": typeof types.VoteOnFragranceAccordMutationDocument,
    "\n  mutation VoteOnFragranceNoteMutation(\n    $input: VoteOnFragranceNoteInput!\n  ) {\n    voteOnFragranceNote(input: $input) {\n      ...NotePreviewFragment\n    }\n  }\n": typeof types.VoteOnFragranceNoteMutationDocument,
    "\n  mutation VoteOnFragranceTraitMutation(\n    $input: VoteOnFragranceTraitInput!\n  ) {\n    voteOnFragranceTrait(input: $input) {\n      ...TraitVoteFragment\n    }\n  }\n": typeof types.VoteOnFragranceTraitMutationDocument,
    "\n  mutation CreateFragranceEditMutation(\n    $input: CreateFragranceEditInput!\n  ) {\n    createFragranceEdit(input: $input) {\n      ...FragranceEditFragment\n    }\n  }\n": typeof types.CreateFragranceEditMutationDocument,
    "\n  mutation ReviewFragranceEditMutation(\n    $input: ReviewFragranceEditInput!\n  ) {\n    reviewFragranceEdit(input: $input) {\n      ...FragranceEditFragment\n    }\n  }\n": typeof types.ReviewFragranceEditMutationDocument,
    "\n  mutation CreateFragranceRequestMutation(\n    $input: CreateFragranceRequestInput!\n  ) {\n    createFragranceRequest(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n": typeof types.CreateFragranceRequestMutationDocument,
    "\n  mutation UpdateFragranceRequestMutation(\n    $input: UpdateFragranceRequestInput!\n  ) {\n    updateFragranceRequest(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n": typeof types.UpdateFragranceRequestMutationDocument,
    "\n  mutation SetFragranceRequestBrandMutation(\n    $input: SetFragranceRequestBrandInput!\n  ) {\n    setFragranceRequestBrand(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n": typeof types.SetFragranceRequestBrandMutationDocument,
    "\n  mutation SetFragranceRequestAccordsMutation(\n    $input: SetFragranceRequestAccordsInput!\n  ) {\n    setFragranceRequestAccords(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n": typeof types.SetFragranceRequestAccordsMutationDocument,
    "\n  mutation SetFragranceRequestNotesMutation(\n    $input: SetFragranceRequestNotesInput!\n  ) {\n    setFragranceRequestNotes(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n": typeof types.SetFragranceRequestNotesMutationDocument,
    "\n  mutation SetFragranceRequestTraitMutation(\n    $input: SetFragranceRequestTraitInput!\n  ) {\n    setFragranceRequestTrait(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n": typeof types.SetFragranceRequestTraitMutationDocument,
    "\n  mutation DeleteFragranceRequestMutation(\n    $input: DeleteFragranceRequestInput!\n  ) {\n    deleteFragranceRequest(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n": typeof types.DeleteFragranceRequestMutationDocument,
    "\n  mutation SubmitFragranceRequestMutation(\n    $input: SubmitFragranceRequestInput!\n  ) {\n    submitFragranceRequest(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n": typeof types.SubmitFragranceRequestMutationDocument,
    "\n  mutation VoteOnFragranceRequestMutation(\n    $input: VoteOnFragranceRequestInput!\n  ) {\n    voteOnFragranceRequest(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n": typeof types.VoteOnFragranceRequestMutationDocument,
    "\n  query FragranceQuery($id: ID!) {\n    fragrance(id: $id) {\n      ...FragranceFragment\n    }\n  }\n": typeof types.FragranceQueryDocument,
    "\n  query FragrancesQuery(\n    $input: FragrancePaginationInput\n  ) {\n    fragrances(input: $input) {\n      edges {\n        node {\n          ...FragrancePreviewFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": typeof types.FragrancesQueryDocument,
    "\n  query SearchFragrancesQuery(\n    $input: SearchInput\n  ) {\n    searchFragrances(input: $input) {\n      edges {\n        node {\n          ...FragrancePreviewFragment \n        }\n      }\n      pageInfo {\n        ...SearchPageInfoFragment\n      }\n    }\n  }\n": typeof types.SearchFragrancesQueryDocument,
    "\n  query FragranceImagesQuery (\n    $id: ID!\n  ) {\n    fragrance(id: $id) {\n      ...FragrancePreviewFragment\n      images {\n        ...FragranceImageFragment\n      }\n    }\n  }\n": typeof types.FragranceImagesQueryDocument,
    "\n  query FragranceAccordsQuery (\n    $id: ID!\n    $input: FragranceAccordPaginationInput\n  ) {\n    fragrance(id: $id) {\n      ...FragrancePreviewFragment\n      accords(input: $input) {\n        edges {\n          node {\n            ...FragranceAccordFragment\n            accord {\n              ...AccordFragment\n            }\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": typeof types.FragranceAccordsQueryDocument,
    "\n  query FragranceNotesQuery (\n    $id: ID!\n  ) {\n    fragrance(id: $id) {\n      ...FragrancePreviewFragment\n      \n      topNotes: notes(input: { layer: TOP }) {\n        edges {\n          node {\n            ...FragranceNoteFragment\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n\n      middleNotes: notes(input: { layer: MIDDLE }) {\n        edges {\n          node {\n            ...FragranceNoteFragment\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n\n      baseNotes: notes(input: { layer: BASE }) {\n        edges {\n          node {\n            ...FragranceNoteFragment\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": typeof types.FragranceNotesQueryDocument,
    "\n  query FragranceNotesLayerQuery (\n    $id: ID!\n    $input: FragranceNotePaginationInput\n  ) {\n    fragrance(id: $id) {\n      ...FragrancePreviewFragment\n      notes(input: $input) {\n        edges {\n          node {\n            ...FragranceNoteFragment\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": typeof types.FragranceNotesLayerQueryDocument,
    "\n  query FragranceEditQuery(\n    $id: ID!\n  ) {\n    fragranceEdit(id: $id) {\n      ...FragranceEditFragment\n    }\n  }\n": typeof types.FragranceEditQueryDocument,
    "\n  query FragranceEditsQuery(\n    $input: FragranceEditPaginationInput\n  ) {\n    fragranceEdits(input: $input) {\n      edges {\n        node {\n          ...FragranceEditFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": typeof types.FragranceEditsQueryDocument,
    "\n  query FragranceRequestQuery(\n    $id: ID!\n  ) {\n    fragranceRequest(id: $id) {\n      ...FragranceRequestFragment\n    }\n  }\n": typeof types.FragranceRequestQueryDocument,
    "\n  query FragranceRequestsQuery(\n    $input: RequestPaginationInput\n  ) {\n    fragranceRequests(input: $input) {\n      edges {\n        node {\n          ...FragranceRequestPreviewFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": typeof types.FragranceRequestsQueryDocument,
    "\n  query FragranceRequestAccordsQuery (\n    $id: ID!\n  ) {\n    fragranceRequest(id: $id) {\n      ...FragranceRequestPreviewFragment\n      accords {\n        ...AccordFragment\n      }\n    }\n  }\n": typeof types.FragranceRequestAccordsQueryDocument,
    "\n  query FragranceRequestNotesQuery (\n    $id: ID!\n  ) {\n    fragranceRequest(id: $id) { \n      ...FragranceRequestPreviewFragment\n      \n      topNotes: notes(layer: TOP) {\n        ...FragranceRequestNoteFragment\n      }\n\n      middleNotes: notes(layer: MIDDLE) {\n        ...FragranceRequestNoteFragment\n      }\n\n      baseNotes: notes(layer: BASE) {\n        ...FragranceRequestNoteFragment\n      }\n    }\n  }\n": typeof types.FragranceRequestNotesQueryDocument,
    "\n  fragment NoteFragment on Note { \n    id\n    name\n    thumbnail {\n      ...AssetFragment\n    }\n  }\n": typeof types.NoteFragmentFragmentDoc,
    "\n  fragment NotePreviewFragment on Note { \n    id\n    name\n    thumbnail {\n      ...AssetPreviewFragment\n    }\n  }\n": typeof types.NotePreviewFragmentFragmentDoc,
    "\n  fragment NoteEditFragment on NoteEdit { \n    id\n    status\n    reason\n\n    proposedName\n    proposedDescription\n    proposedThumbnail {\n      ...AssetPreviewFragment\n    }\n\n    note {\n      ...NotePreviewFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n    reviewer {\n      ...UserPreviewFragment\n    }\n  }\n": typeof types.NoteEditFragmentFragmentDoc,
    "\n  fragment NoteRequestFragment on NoteRequest { \n    id\n    version\n    requestStatus\n    name\n    description\n\n    thumbnail {\n      ...AssetPreviewFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n  }\n": typeof types.NoteRequestFragmentFragmentDoc,
    "\n  mutation CreateNoteEditMutation(\n    $input: CreateNoteEditInput!\n  ) {\n    createNoteEdit(input: $input) {\n      ...NoteEditFragment\n    }\n  }\n": typeof types.CreateNoteEditMutationDocument,
    "\n  mutation ReviewNoteEditMutation(\n    $input: ReviewNoteEditInput!\n  ) {\n    reviewNoteEdit(input: $input) {\n      ...NoteEditFragment\n    }\n  }\n": typeof types.ReviewNoteEditMutationDocument,
    "\n  mutation CreateNoteRequestMutation(\n    $input: CreateNoteRequestInput!\n  ) {\n    createNoteRequest(input: $input) {\n      ...NoteRequestFragment\n    }\n  }\n": typeof types.CreateNoteRequestMutationDocument,
    "\n  mutation UpdateNoteRequestMutation(\n    $input: UpdateNoteRequestInput!\n  ) {\n    updateNoteRequest(input: $input) {\n      ...NoteRequestFragment\n    }\n  }\n": typeof types.UpdateNoteRequestMutationDocument,
    "\n  mutation DeleteNoteRequestMutation(\n    $input: DeleteNoteRequestInput!\n  ) {\n    deleteNoteRequest(input: $input) {\n      ...NoteRequestFragment\n    }\n  }\n": typeof types.DeleteNoteRequestMutationDocument,
    "\n  mutation SubmitNoteRequestMutation(\n    $input: SubmitNoteRequestInput!\n  ) {\n    submitNoteRequest(input: $input) {\n      ...NoteRequestFragment\n    }\n  }\n": typeof types.SubmitNoteRequestMutationDocument,
    "\n  mutation VoteOnNoteRequestMutation(\n    $input: VoteOnNoteRequestInput!\n  ) {\n    voteOnNoteRequest(input: $input) {\n      ...NoteRequestFragment\n    }\n  } \n": typeof types.VoteOnNoteRequestMutationDocument,
    "\n  query Note(\n    $id: ID!\n  ) {\n    note(id: $id) {\n      ...NotePreviewFragment\n    }\n  }\n": typeof types.NoteDocument,
    "\n  query Notes(\n    $input: NotePaginationInput\n  ) {\n    notes(input: $input) {\n      edges {\n        node {\n          ...NotePreviewFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": typeof types.NotesDocument,
    "\n  query SearchNotes(\n    $input: SearchInput\n  ) {\n    searchNotes(input: $input) {\n      edges {\n        node {\n          ...NotePreviewFragment \n        }\n      }\n      pageInfo {\n        ...SearchPageInfoFragment\n      }\n    }\n  }\n": typeof types.SearchNotesDocument,
    "\n  query NoteEdit(\n    $id: ID!\n  ) {\n    noteEdit(id: $id) {\n      ...NoteEditFragment\n    }\n  }\n": typeof types.NoteEditDocument,
    "\n  query NoteEdits(\n    $input: NoteEditPaginationInput\n  ) {\n    noteEdits(input: $input) {\n      edges {\n        node {\n          ...NoteEditFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": typeof types.NoteEditsDocument,
    "\n  query NoteRequest(\n    $id: ID!\n  ) {\n    noteRequest(id: $id) {\n      ...NoteRequestFragment\n    }\n  }\n": typeof types.NoteRequestDocument,
    "\n  query NoteRequests(\n    $input: RequestPaginationInput\n  ) {\n    noteRequests(input: $input) {\n      edges {\n        node {\n          ...NoteRequestFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": typeof types.NoteRequestsDocument,
    "\n  fragment TraitOptionFragment on TraitOption {\n    id\n    label\n    score\n  }\n": typeof types.TraitOptionFragmentFragmentDoc,
    "\n  fragment TraitVoteDistributionFragment on TraitVoteDistribution {\n    option {\n      ...TraitOptionFragment\n    }\n    votes\n  }\n": typeof types.TraitVoteDistributionFragmentFragmentDoc,
    "\n  fragment TraitStatsFragment on TraitStats {\n    averageScore \n    totalVotes\n    distribution {\n      ...TraitVoteDistributionFragment\n    }\n  }\n": typeof types.TraitStatsFragmentFragmentDoc,
    "\n  fragment TraitVoteFragment on TraitVote {\n    option {\n      ...TraitOptionFragment\n    } \n  }\n": typeof types.TraitVoteFragmentFragmentDoc,
    "\n  fragment UserFragment on User {\n    id\n    username\n    email\n    avatar {\n      ...AssetPreviewFragment\n    }\n  }\n": typeof types.UserFragmentFragmentDoc,
    "\n  fragment UserPreviewFragment on User {\n    id\n    username\n    avatar {\n      ...AssetPreviewFragment\n    }\n  }\n": typeof types.UserPreviewFragmentFragmentDoc,
    "\n  mutation UpdateUser(\n    $input: UpdateUserInput!\n  ) {\n    updateUser(input: $input) {\n      ...UserFragment\n    }\n  }\n": typeof types.UpdateUserDocument,
    "\n  mutation SetUserAvatar(\n    $input: SetUserAvatarInput!\n  ) {\n    setUserAvatar(input: $input) {\n      ...UserFragment\n    }\n  } \n": typeof types.SetUserAvatarDocument,
    "\n  query Me {\n    me {\n      ...UserFragment\n    }\n  }\n": typeof types.MeDocument,
    "\n  query MyFragranceRequests(\n    $input: RequestPaginationInput\n  ) {\n    me {\n      ...UserPreviewFragment\n      fragranceRequests(input: $input) {\n        edges {\n          node {\n            ...FragranceRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": typeof types.MyFragranceRequestsDocument,
    "\n  query MyBrandRequests(\n    $input: RequestPaginationInput\n  ) {\n    me {\n      ...UserPreviewFragment\n      brandRequests(input: $input) {\n        edges {\n          node {\n            ...BrandRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": typeof types.MyBrandRequestsDocument,
    "\n  query MyAccordRequests(\n    $input: RequestPaginationInput\n  ) {\n    me {\n      ...UserPreviewFragment\n      accordRequests(input: $input) {\n        edges {\n          node {\n            ...AccordRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": typeof types.MyAccordRequestsDocument,
    "\n  query MyNoteRequests(\n    $input: RequestPaginationInput\n  ) {\n    me {\n      ...UserPreviewFragment\n      noteRequests(input: $input) {\n        edges {\n          node {\n            ...NoteRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": typeof types.MyNoteRequestsDocument,
    "\n  query User(\n    $id: ID!\n  ) {\n    user(id: $id) {\n      ...UserPreviewFragment\n    }\n  }\n": typeof types.UserDocument,
    "\n  query UserFragranceRequests(\n    $id: ID!\n    $input: RequestPaginationInput\n  ) {\n    user(id: $id) {\n      ...UserPreviewFragment\n      fragranceRequests(input: $input) {\n        edges {\n          node {\n            ...FragranceRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": typeof types.UserFragranceRequestsDocument,
    "\n  query UserBrandRequests(\n    $id: ID!\n    $input: RequestPaginationInput\n  ) {\n    user(id: $id) {\n      ...UserPreviewFragment\n      brandRequests(input: $input) {\n        edges {\n          node {\n            ...BrandRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": typeof types.UserBrandRequestsDocument,
    "\n  query UserAccordRequests(\n    $id: ID!\n    $input: RequestPaginationInput\n  ) {\n    user(id: $id) {\n      ...UserPreviewFragment\n      accordRequests(input: $input) {\n        edges {\n          node {\n            ...AccordRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": typeof types.UserAccordRequestsDocument,
    "\n  query UserNoteRequests(\n    $id: ID!\n    $input: RequestPaginationInput\n  ) {\n    user(id: $id) {\n      ...UserPreviewFragment\n      noteRequests(input: $input) {\n        edges {\n          node {\n            ...NoteRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": typeof types.UserNoteRequestsDocument,
    "\n  fragment PageInfoFragment on PageInfo {\n    hasPreviousPage\n    hasNextPage\n    startCursor\n    endCursor\n  }\n": typeof types.PageInfoFragmentFragmentDoc,
    "\n  fragment SearchPageInfoFragment on SearchPageInfo {\n    hasPreviousPage\n    hasNextPage\n    startOffset\n    endOffset\n    pageSize\n  }\n": typeof types.SearchPageInfoFragmentFragmentDoc,
    "\n  fragment VoteInfoFragment on VoteInfo {\n    upvotes \n    downvotes\n    score\n    myVote\n  }\n": typeof types.VoteInfoFragmentFragmentDoc,
};
const documents: Documents = {
    "\n  fragment AccordFragment on Accord {\n    id\n    name\n    color\n  }\n": types.AccordFragmentFragmentDoc,
    "\n  fragment AccordEditFragment on AccordEdit { \n    id\n    status\n    reason\n\n    proposedName\n    proposedColor\n    proposedDescription\n\n    accord {\n      ...AccordFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n    reviewer {\n      ...UserPreviewFragment\n    }\n  }\n": types.AccordEditFragmentFragmentDoc,
    "\n  fragment AccordRequestFragment on AccordRequest { \n    id\n    version\n    requestStatus\n    name\n    description\n    color\n\n    thumbnail {\n      ...AssetPreviewFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n  }\n": types.AccordRequestFragmentFragmentDoc,
    "\n  mutation CreateAccordEditMutation(\n    $input: CreateAccordEditInput!\n  ) {\n    createAccordEdit(input: $input) {\n      ...AccordEditFragment\n    }\n  }\n": types.CreateAccordEditMutationDocument,
    "\n  mutation ReviewAccordEditMutation(\n    $input: ReviewAccordEditInput!\n  ) {\n    reviewAccordEdit(input: $input) {\n      ...AccordEditFragment\n    }\n  }\n": types.ReviewAccordEditMutationDocument,
    "\n  mutation CreateAccordRequestMutation(\n    $input: CreateAccordRequestInput!\n  ) {\n    createAccordRequest(input: $input) {\n      ...AccordRequestFragment\n    }\n  }\n": types.CreateAccordRequestMutationDocument,
    "\n  mutation UpdateAccordRequestMutation(\n    $input: UpdateAccordRequestInput!\n  ) {\n    updateAccordRequest(input: $input) {\n      ...AccordRequestFragment\n    }\n  }\n": types.UpdateAccordRequestMutationDocument,
    "\n  mutation DeleteAccordRequestMutation(\n    $input: DeleteAccordRequestInput!\n  ) {\n    deleteAccordRequest(input: $input) {\n      ...AccordRequestFragment\n    }\n  }\n": types.DeleteAccordRequestMutationDocument,
    "\n  mutation SubmitAccordRequestMutation(\n    $input: SubmitAccordRequestInput!\n  ) {\n    submitAccordRequest(input: $input) {\n      ...AccordRequestFragment\n    }\n  }\n": types.SubmitAccordRequestMutationDocument,
    "\n  mutation VoteOnAccordRequestMutation(\n    $input: VoteOnAccordRequestInput!\n  ) {\n    voteOnAccordRequest(input: $input) {\n      ...AccordRequestFragment\n    }\n  }\n": types.VoteOnAccordRequestMutationDocument,
    "\n  query AccordQuery(\n    $id: ID!\n  ) {\n    accord(id: $id) {\n      ...AccordFragment\n    }\n  }\n": types.AccordQueryDocument,
    "\n  query AccordsQuery(\n    $input: AccordPaginationInput\n  ) {\n    accords(input: $input) {\n      edges {\n        node {\n          ...AccordFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": types.AccordsQueryDocument,
    "\n  query SearchAccordsQuery(\n    $input: SearchInput\n  ) {\n    searchAccords(input: $input) {\n      edges {\n        node {\n          ...AccordFragment \n        }\n      } \n      pageInfo {\n        ...SearchPageInfoFragment\n      }\n    }\n  }\n": types.SearchAccordsQueryDocument,
    "\n  query AccordEditQuery(\n    $id: ID!\n  ) {\n    accordEdit(id: $id) {\n      ...AccordEditFragment\n    }\n  }\n": types.AccordEditQueryDocument,
    "\n  query AccordEditsQuery(\n    $input: AccordEditPaginationInput\n  ) {\n    accordEdits(input: $input) {\n      edges {\n        node {\n          ...AccordEditFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": types.AccordEditsQueryDocument,
    "\n  query AccordRequestQuery(\n    $id: ID!\n  ) {\n    accordRequest(id: $id) {\n      ...AccordRequestFragment\n    }\n  }\n": types.AccordRequestQueryDocument,
    "\n  query AccordRequestsQuery(\n    $input: RequestPaginationInput\n  ) {\n    accordRequests(input: $input) {\n      edges {\n        node {\n          ...AccordRequestFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": types.AccordRequestsQueryDocument,
    "\n  fragment AssetFragment on Asset {\n    id\n    url\n    name\n    contentType\n    contentSize\n    s3Key\n  }\n": types.AssetFragmentFragmentDoc,
    "\n  fragment AssetPreviewFragment on Asset {\n    id\n    url\n  }\n": types.AssetPreviewFragmentFragmentDoc,
    "\n  fragment PresignedUploadFragment on PresignedUpload {\n    assetId\n    url\n    fields \n  }\n": types.PresignedUploadFragmentFragmentDoc,
    "\n  mutation StageAsset(\n    $input: StageAssetInput!\n  ) {\n    stageAsset(input: $input) {\n      ...PresignedUploadFragment\n    }\n  }\n": types.StageAssetDocument,
    "\n  mutation DeleteAsset(\n    $input: DeleteAssetInput!\n  ) {\n    deleteAsset(input: $input)\n  }\n": types.DeleteAssetDocument,
    "\n  fragment AuthTokenPayloadFragment on AuthTokenPayload {\n    idToken \n    accessToken\n    expiresIn\n  }\n": types.AuthTokenPayloadFragmentFragmentDoc,
    "\n  fragment AuthCodeDeliveryDetailsFragment on AuthCodeDeliveryDetails {\n    method\n    attribute\n    destination\n  }\n": types.AuthCodeDeliveryDetailsFragmentFragmentDoc,
    "\n  fragment AuthDeliveryResultFragment on AuthDeliveryResult {\n    isComplete \n    delivery {\n      ...AuthCodeDeliveryDetailsFragment\n    }\n  }\n": types.AuthDeliveryResultFragmentFragmentDoc,
    "\n  mutation Refresh {\n    refresh {\n      ...AuthTokenPayloadFragment\n    }\n  }\n": types.RefreshDocument,
    "\n  mutation LogIn(\n    $input: LogInInput!\n  ) {\n    logIn(input: $input) {\n      ...AuthTokenPayloadFragment\n    }\n  }\n": types.LogInDocument,
    "\n  mutation LogOut {\n    logOut\n  }\n": types.LogOutDocument,
    "\n  mutation SignUp(\n    $input: SignUpInput!\n  ) {\n    signUp(input: $input) {\n      ...AuthDeliveryResultFragment\n    }\n  }\n": types.SignUpDocument,
    "\n  mutation ConfirmSignUp(\n    $input: ConfirmSignUpInput!\n  ) {\n    confirmSignUp(input: $input)\n  }\n": types.ConfirmSignUpDocument,
    "\n  mutation ResendSignUpCode(\n    $input: ResendSignUpCodeInput!\n  ) {\n    resendSignUpCode(input: $input) {\n      ...AuthDeliveryResultFragment\n    }\n  }\n": types.ResendSignUpCodeDocument,
    "\n  mutation ForgotPassword(\n    $input: ForgotPasswordInput!\n  ) {\n    forgotPassword(input: $input) {\n      ...AuthDeliveryResultFragment\n    }\n  }\n": types.ForgotPasswordDocument,
    "\n  mutation ConfirmForgotPassword(\n    $input: ConfirmForgotPasswordInput!\n  ) {\n    confirmForgotPassword(input: $input) \n  }\n": types.ConfirmForgotPasswordDocument,
    "\n  fragment BrandFragment on Brand {\n    id\n    name\n    website\n    description\n    avatar {\n      ...AssetFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n  }\n": types.BrandFragmentFragmentDoc,
    "\n  fragment BrandPreviewFragment on Brand {\n    id\n    name\n    avatar {\n      ...AssetPreviewFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n  }\n": types.BrandPreviewFragmentFragmentDoc,
    "\n  fragment BrandEditFragment on BrandEdit { \n    id\n    status\n    reason\n\n    proposedName\n    proposedDescription\n    proposedWebsite\n    proposedAvatar {\n      ...AssetPreviewFragment\n    }\n\n    brand {\n      ...BrandFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n    reviewer {\n      ...UserPreviewFragment\n    }\n  }\n": types.BrandEditFragmentFragmentDoc,
    "\n  fragment BrandRequestFragment on BrandRequest { \n    id\n    version\n    requestStatus\n    name\n    website\n    description\n\n    avatar {\n      ...AssetPreviewFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n  }\n": types.BrandRequestFragmentFragmentDoc,
    "\n  mutation VoteOnBrandMutation(\n    $input: VoteOnBrandInput!\n  ) {\n    voteOnBrand(input: $input) {\n      ...BrandPreviewFragment\n    }\n  }\n": types.VoteOnBrandMutationDocument,
    "\n  mutation CreateBrandEditMutation(\n    $input: CreateBrandEditInput!\n  ) {\n    createBrandEdit(input: $input) {\n      ...BrandEditFragment\n    }\n  }\n": types.CreateBrandEditMutationDocument,
    "\n  mutation ReviewBrandEditMutation(\n    $input: ReviewBrandEditInput!\n  ) {\n    reviewBrandEdit(input: $input) {\n      ...BrandEditFragment\n    }\n  }\n": types.ReviewBrandEditMutationDocument,
    "\n  mutation CreateBrandRequestMutation(\n    $input: CreateBrandRequestInput!\n  ) {\n    createBrandRequest(input: $input) {\n      ...BrandRequestFragment\n    }\n  }\n": types.CreateBrandRequestMutationDocument,
    "\n  mutation UpdateBrandRequestMutation(\n    $input: UpdateBrandRequestInput!\n  ) {\n    updateBrandRequest(input: $input) {\n      ...BrandRequestFragment\n    }\n  }\n": types.UpdateBrandRequestMutationDocument,
    "\n  mutation DeleteBrandRequestMutation(\n    $input: DeleteBrandRequestInput!\n  ) {\n    deleteBrandRequest(input: $input) {\n      ...BrandRequestFragment\n    }\n  }\n": types.DeleteBrandRequestMutationDocument,
    "\n  mutation SubmitBrandRequestMutation(\n    $input: SubmitBrandRequestInput!\n  ) {\n    submitBrandRequest(input: $input) {\n      ...BrandRequestFragment\n    }\n  }\n": types.SubmitBrandRequestMutationDocument,
    "\n  mutation VoteOnBrandRequestMutation(\n    $input: VoteOnBrandRequestInput!\n  ) {\n    voteOnBrandRequest(input: $input) {\n      ...BrandRequestFragment\n    }\n  }\n": types.VoteOnBrandRequestMutationDocument,
    "\n  query Brand($id: ID!) {\n    brand(id: $id) {\n      ...BrandPreviewFragment\n    }\n  }\n": types.BrandDocument,
    "\n  query Brands($input: BrandPaginationInput) {\n    brands(input: $input) {\n      edges {\n        node {\n          ...BrandPreviewFragment\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": types.BrandsDocument,
    "\n  query SearchBrands($input: SearchInput) {\n    searchBrands(input: $input) {\n      edges {\n        node {\n          ...BrandPreviewFragment\n        }\n      }\n      pageInfo {\n        ...SearchPageInfoFragment\n      } \n    }\n  }\n": types.SearchBrandsDocument,
    "\n  query BrandFragrances($id: ID!, $input: FragrancePaginationInput) {\n    brand(id: $id) {\n      id\n      fragrances(input: $input) {\n        edges {\n          node {\n            ...FragrancePreviewFragment\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": types.BrandFragrancesDocument,
    "\n  query BrandEdit($id: ID!) {\n    brandEdit(id: $id) {\n      ...BrandEditFragment\n    }\n  }\n": types.BrandEditDocument,
    "\n  query BrandEdits($input: BrandEditPaginationInput) {\n    brandEdits(input: $input) {\n      edges {\n        node {\n          ...BrandEditFragment\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": types.BrandEditsDocument,
    "\n  query BrandRequest($id: ID!) {\n    brandRequest(id: $id) {\n      ...BrandRequestFragment\n    }\n  }\n": types.BrandRequestDocument,
    "\n  query BrandRequests($input: RequestPaginationInput) {\n    brandRequests(input: $input) {\n      edges {\n        node {\n          ...BrandRequestFragment\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": types.BrandRequestsDocument,
    "\n  fragment FragranceFragment on Fragrance { \n    id\n    name\n    description\n    releaseYear\n    concentration\n    status\n\n    votes {\n      ...VoteInfoFragment\n    }\n\n    brand {\n      ...BrandPreviewFragment\n    }\n\n    images {\n      ...FragranceImageFragment\n    }\n\n    traits {\n      ...FragranceTraitFragment\n    }\n  }\n": types.FragranceFragmentFragmentDoc,
    "\n  fragment FragrancePreviewFragment on Fragrance { \n    id\n    name\n\n    votes {\n      ...VoteInfoFragment\n    }\n\n    brand {\n      ...BrandPreviewFragment\n    }\n\n    thumbnail {\n      ...FragranceImageFragment\n    }\n  }\n": types.FragrancePreviewFragmentFragmentDoc,
    "\n  fragment FragranceImageFragment on FragranceImage { \n    id\n    url\n    primaryColor\n    width\n    height\n  }\n": types.FragranceImageFragmentFragmentDoc,
    "\n  fragment FragranceAccordFragment on FragranceAccord { \n    id\n    accord {\n      ...AccordFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n  }\n": types.FragranceAccordFragmentFragmentDoc,
    "\n  fragment FragranceNoteFragment on FragranceNote { \n    id\n    note {\n      ...NotePreviewFragment\n    }\n    layer\n    votes {\n      ...VoteInfoFragment\n    }\n  }\n": types.FragranceNoteFragmentFragmentDoc,
    "\n  fragment FragranceTraitFragment on FragranceTrait { \n    id\n    type\n    name\n    options {\n      ...TraitOptionFragment\n    } \n    stats {\n      ...TraitStatsFragment\n    }\n    myVote {\n      ...TraitVoteFragment\n    }\n  }\n": types.FragranceTraitFragmentFragmentDoc,
    "\n  fragment FragranceEditFragment on FragranceEdit { \n    id\n    status\n    reason\n\n    proposedName\n    proposedDescription\n    proposedReleaseYear\n    proposedConcentration\n    proposedStatus\n    proposedBrand {\n      ...BrandPreviewFragment\n    }\n    proposedImage {\n      ...AssetPreviewFragment\n    }\n\n    fragrance {\n      ...FragrancePreviewFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n    reviewer {\n      ...UserPreviewFragment\n    }\n  }\n": types.FragranceEditFragmentFragmentDoc,
    "\n  fragment FragranceRequestFragment on FragranceRequest { \n    id\n    version\n    requestStatus\n\n    name\n    description\n    releaseYear\n    concentration\n    fragranceStatus\n\n    brand {\n      ...BrandPreviewFragment\n    }\n\n    image {\n      ...AssetPreviewFragment\n    }\n\n    traits {\n      ...FragranceRequestTraitFragment\n    }\n\n    votes {\n      ...VoteInfoFragment\n    }\n\n    user {\n      ...UserPreviewFragment\n    }\n  }\n": types.FragranceRequestFragmentFragmentDoc,
    "\n  fragment FragranceRequestPreviewFragment on FragranceRequest { \n    id\n    version\n    requestStatus\n\n    name\n\n    brand {\n      ...BrandPreviewFragment\n    }\n\n    image {\n      ...AssetPreviewFragment\n    }\n\n    votes {\n      ...VoteInfoFragment\n    }\n  }\n": types.FragranceRequestPreviewFragmentFragmentDoc,
    "\n  fragment FragranceRequestTraitFragment on FragranceRequestTrait { \n    traitType\n    selectedOption {\n      ...TraitOptionFragment\n    }\n  }\n": types.FragranceRequestTraitFragmentFragmentDoc,
    "\n  fragment FragranceRequestNoteFragment on FragranceRequestNote { \n    id\n    layer\n    note {\n      ...NotePreviewFragment\n    }\n  }\n": types.FragranceRequestNoteFragmentFragmentDoc,
    "\n  mutation VoteOnFragranceMutation(\n    $input: VoteOnFragranceInput!\n  ) {\n    voteOnFragrance(input: $input) {\n      ...FragrancePreviewFragment\n    }\n  }\n": types.VoteOnFragranceMutationDocument,
    "\n  mutation VoteOnFragranceAccordMutation(\n    $input: VoteOnFragranceAccordInput!\n  ) {\n    voteOnFragranceAccord(input: $input) {\n      ...AccordFragment\n    }\n  }\n": types.VoteOnFragranceAccordMutationDocument,
    "\n  mutation VoteOnFragranceNoteMutation(\n    $input: VoteOnFragranceNoteInput!\n  ) {\n    voteOnFragranceNote(input: $input) {\n      ...NotePreviewFragment\n    }\n  }\n": types.VoteOnFragranceNoteMutationDocument,
    "\n  mutation VoteOnFragranceTraitMutation(\n    $input: VoteOnFragranceTraitInput!\n  ) {\n    voteOnFragranceTrait(input: $input) {\n      ...TraitVoteFragment\n    }\n  }\n": types.VoteOnFragranceTraitMutationDocument,
    "\n  mutation CreateFragranceEditMutation(\n    $input: CreateFragranceEditInput!\n  ) {\n    createFragranceEdit(input: $input) {\n      ...FragranceEditFragment\n    }\n  }\n": types.CreateFragranceEditMutationDocument,
    "\n  mutation ReviewFragranceEditMutation(\n    $input: ReviewFragranceEditInput!\n  ) {\n    reviewFragranceEdit(input: $input) {\n      ...FragranceEditFragment\n    }\n  }\n": types.ReviewFragranceEditMutationDocument,
    "\n  mutation CreateFragranceRequestMutation(\n    $input: CreateFragranceRequestInput!\n  ) {\n    createFragranceRequest(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n": types.CreateFragranceRequestMutationDocument,
    "\n  mutation UpdateFragranceRequestMutation(\n    $input: UpdateFragranceRequestInput!\n  ) {\n    updateFragranceRequest(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n": types.UpdateFragranceRequestMutationDocument,
    "\n  mutation SetFragranceRequestBrandMutation(\n    $input: SetFragranceRequestBrandInput!\n  ) {\n    setFragranceRequestBrand(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n": types.SetFragranceRequestBrandMutationDocument,
    "\n  mutation SetFragranceRequestAccordsMutation(\n    $input: SetFragranceRequestAccordsInput!\n  ) {\n    setFragranceRequestAccords(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n": types.SetFragranceRequestAccordsMutationDocument,
    "\n  mutation SetFragranceRequestNotesMutation(\n    $input: SetFragranceRequestNotesInput!\n  ) {\n    setFragranceRequestNotes(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n": types.SetFragranceRequestNotesMutationDocument,
    "\n  mutation SetFragranceRequestTraitMutation(\n    $input: SetFragranceRequestTraitInput!\n  ) {\n    setFragranceRequestTrait(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n": types.SetFragranceRequestTraitMutationDocument,
    "\n  mutation DeleteFragranceRequestMutation(\n    $input: DeleteFragranceRequestInput!\n  ) {\n    deleteFragranceRequest(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n": types.DeleteFragranceRequestMutationDocument,
    "\n  mutation SubmitFragranceRequestMutation(\n    $input: SubmitFragranceRequestInput!\n  ) {\n    submitFragranceRequest(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n": types.SubmitFragranceRequestMutationDocument,
    "\n  mutation VoteOnFragranceRequestMutation(\n    $input: VoteOnFragranceRequestInput!\n  ) {\n    voteOnFragranceRequest(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n": types.VoteOnFragranceRequestMutationDocument,
    "\n  query FragranceQuery($id: ID!) {\n    fragrance(id: $id) {\n      ...FragranceFragment\n    }\n  }\n": types.FragranceQueryDocument,
    "\n  query FragrancesQuery(\n    $input: FragrancePaginationInput\n  ) {\n    fragrances(input: $input) {\n      edges {\n        node {\n          ...FragrancePreviewFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": types.FragrancesQueryDocument,
    "\n  query SearchFragrancesQuery(\n    $input: SearchInput\n  ) {\n    searchFragrances(input: $input) {\n      edges {\n        node {\n          ...FragrancePreviewFragment \n        }\n      }\n      pageInfo {\n        ...SearchPageInfoFragment\n      }\n    }\n  }\n": types.SearchFragrancesQueryDocument,
    "\n  query FragranceImagesQuery (\n    $id: ID!\n  ) {\n    fragrance(id: $id) {\n      ...FragrancePreviewFragment\n      images {\n        ...FragranceImageFragment\n      }\n    }\n  }\n": types.FragranceImagesQueryDocument,
    "\n  query FragranceAccordsQuery (\n    $id: ID!\n    $input: FragranceAccordPaginationInput\n  ) {\n    fragrance(id: $id) {\n      ...FragrancePreviewFragment\n      accords(input: $input) {\n        edges {\n          node {\n            ...FragranceAccordFragment\n            accord {\n              ...AccordFragment\n            }\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": types.FragranceAccordsQueryDocument,
    "\n  query FragranceNotesQuery (\n    $id: ID!\n  ) {\n    fragrance(id: $id) {\n      ...FragrancePreviewFragment\n      \n      topNotes: notes(input: { layer: TOP }) {\n        edges {\n          node {\n            ...FragranceNoteFragment\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n\n      middleNotes: notes(input: { layer: MIDDLE }) {\n        edges {\n          node {\n            ...FragranceNoteFragment\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n\n      baseNotes: notes(input: { layer: BASE }) {\n        edges {\n          node {\n            ...FragranceNoteFragment\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": types.FragranceNotesQueryDocument,
    "\n  query FragranceNotesLayerQuery (\n    $id: ID!\n    $input: FragranceNotePaginationInput\n  ) {\n    fragrance(id: $id) {\n      ...FragrancePreviewFragment\n      notes(input: $input) {\n        edges {\n          node {\n            ...FragranceNoteFragment\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": types.FragranceNotesLayerQueryDocument,
    "\n  query FragranceEditQuery(\n    $id: ID!\n  ) {\n    fragranceEdit(id: $id) {\n      ...FragranceEditFragment\n    }\n  }\n": types.FragranceEditQueryDocument,
    "\n  query FragranceEditsQuery(\n    $input: FragranceEditPaginationInput\n  ) {\n    fragranceEdits(input: $input) {\n      edges {\n        node {\n          ...FragranceEditFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": types.FragranceEditsQueryDocument,
    "\n  query FragranceRequestQuery(\n    $id: ID!\n  ) {\n    fragranceRequest(id: $id) {\n      ...FragranceRequestFragment\n    }\n  }\n": types.FragranceRequestQueryDocument,
    "\n  query FragranceRequestsQuery(\n    $input: RequestPaginationInput\n  ) {\n    fragranceRequests(input: $input) {\n      edges {\n        node {\n          ...FragranceRequestPreviewFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": types.FragranceRequestsQueryDocument,
    "\n  query FragranceRequestAccordsQuery (\n    $id: ID!\n  ) {\n    fragranceRequest(id: $id) {\n      ...FragranceRequestPreviewFragment\n      accords {\n        ...AccordFragment\n      }\n    }\n  }\n": types.FragranceRequestAccordsQueryDocument,
    "\n  query FragranceRequestNotesQuery (\n    $id: ID!\n  ) {\n    fragranceRequest(id: $id) { \n      ...FragranceRequestPreviewFragment\n      \n      topNotes: notes(layer: TOP) {\n        ...FragranceRequestNoteFragment\n      }\n\n      middleNotes: notes(layer: MIDDLE) {\n        ...FragranceRequestNoteFragment\n      }\n\n      baseNotes: notes(layer: BASE) {\n        ...FragranceRequestNoteFragment\n      }\n    }\n  }\n": types.FragranceRequestNotesQueryDocument,
    "\n  fragment NoteFragment on Note { \n    id\n    name\n    thumbnail {\n      ...AssetFragment\n    }\n  }\n": types.NoteFragmentFragmentDoc,
    "\n  fragment NotePreviewFragment on Note { \n    id\n    name\n    thumbnail {\n      ...AssetPreviewFragment\n    }\n  }\n": types.NotePreviewFragmentFragmentDoc,
    "\n  fragment NoteEditFragment on NoteEdit { \n    id\n    status\n    reason\n\n    proposedName\n    proposedDescription\n    proposedThumbnail {\n      ...AssetPreviewFragment\n    }\n\n    note {\n      ...NotePreviewFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n    reviewer {\n      ...UserPreviewFragment\n    }\n  }\n": types.NoteEditFragmentFragmentDoc,
    "\n  fragment NoteRequestFragment on NoteRequest { \n    id\n    version\n    requestStatus\n    name\n    description\n\n    thumbnail {\n      ...AssetPreviewFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n  }\n": types.NoteRequestFragmentFragmentDoc,
    "\n  mutation CreateNoteEditMutation(\n    $input: CreateNoteEditInput!\n  ) {\n    createNoteEdit(input: $input) {\n      ...NoteEditFragment\n    }\n  }\n": types.CreateNoteEditMutationDocument,
    "\n  mutation ReviewNoteEditMutation(\n    $input: ReviewNoteEditInput!\n  ) {\n    reviewNoteEdit(input: $input) {\n      ...NoteEditFragment\n    }\n  }\n": types.ReviewNoteEditMutationDocument,
    "\n  mutation CreateNoteRequestMutation(\n    $input: CreateNoteRequestInput!\n  ) {\n    createNoteRequest(input: $input) {\n      ...NoteRequestFragment\n    }\n  }\n": types.CreateNoteRequestMutationDocument,
    "\n  mutation UpdateNoteRequestMutation(\n    $input: UpdateNoteRequestInput!\n  ) {\n    updateNoteRequest(input: $input) {\n      ...NoteRequestFragment\n    }\n  }\n": types.UpdateNoteRequestMutationDocument,
    "\n  mutation DeleteNoteRequestMutation(\n    $input: DeleteNoteRequestInput!\n  ) {\n    deleteNoteRequest(input: $input) {\n      ...NoteRequestFragment\n    }\n  }\n": types.DeleteNoteRequestMutationDocument,
    "\n  mutation SubmitNoteRequestMutation(\n    $input: SubmitNoteRequestInput!\n  ) {\n    submitNoteRequest(input: $input) {\n      ...NoteRequestFragment\n    }\n  }\n": types.SubmitNoteRequestMutationDocument,
    "\n  mutation VoteOnNoteRequestMutation(\n    $input: VoteOnNoteRequestInput!\n  ) {\n    voteOnNoteRequest(input: $input) {\n      ...NoteRequestFragment\n    }\n  } \n": types.VoteOnNoteRequestMutationDocument,
    "\n  query Note(\n    $id: ID!\n  ) {\n    note(id: $id) {\n      ...NotePreviewFragment\n    }\n  }\n": types.NoteDocument,
    "\n  query Notes(\n    $input: NotePaginationInput\n  ) {\n    notes(input: $input) {\n      edges {\n        node {\n          ...NotePreviewFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": types.NotesDocument,
    "\n  query SearchNotes(\n    $input: SearchInput\n  ) {\n    searchNotes(input: $input) {\n      edges {\n        node {\n          ...NotePreviewFragment \n        }\n      }\n      pageInfo {\n        ...SearchPageInfoFragment\n      }\n    }\n  }\n": types.SearchNotesDocument,
    "\n  query NoteEdit(\n    $id: ID!\n  ) {\n    noteEdit(id: $id) {\n      ...NoteEditFragment\n    }\n  }\n": types.NoteEditDocument,
    "\n  query NoteEdits(\n    $input: NoteEditPaginationInput\n  ) {\n    noteEdits(input: $input) {\n      edges {\n        node {\n          ...NoteEditFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": types.NoteEditsDocument,
    "\n  query NoteRequest(\n    $id: ID!\n  ) {\n    noteRequest(id: $id) {\n      ...NoteRequestFragment\n    }\n  }\n": types.NoteRequestDocument,
    "\n  query NoteRequests(\n    $input: RequestPaginationInput\n  ) {\n    noteRequests(input: $input) {\n      edges {\n        node {\n          ...NoteRequestFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n": types.NoteRequestsDocument,
    "\n  fragment TraitOptionFragment on TraitOption {\n    id\n    label\n    score\n  }\n": types.TraitOptionFragmentFragmentDoc,
    "\n  fragment TraitVoteDistributionFragment on TraitVoteDistribution {\n    option {\n      ...TraitOptionFragment\n    }\n    votes\n  }\n": types.TraitVoteDistributionFragmentFragmentDoc,
    "\n  fragment TraitStatsFragment on TraitStats {\n    averageScore \n    totalVotes\n    distribution {\n      ...TraitVoteDistributionFragment\n    }\n  }\n": types.TraitStatsFragmentFragmentDoc,
    "\n  fragment TraitVoteFragment on TraitVote {\n    option {\n      ...TraitOptionFragment\n    } \n  }\n": types.TraitVoteFragmentFragmentDoc,
    "\n  fragment UserFragment on User {\n    id\n    username\n    email\n    avatar {\n      ...AssetPreviewFragment\n    }\n  }\n": types.UserFragmentFragmentDoc,
    "\n  fragment UserPreviewFragment on User {\n    id\n    username\n    avatar {\n      ...AssetPreviewFragment\n    }\n  }\n": types.UserPreviewFragmentFragmentDoc,
    "\n  mutation UpdateUser(\n    $input: UpdateUserInput!\n  ) {\n    updateUser(input: $input) {\n      ...UserFragment\n    }\n  }\n": types.UpdateUserDocument,
    "\n  mutation SetUserAvatar(\n    $input: SetUserAvatarInput!\n  ) {\n    setUserAvatar(input: $input) {\n      ...UserFragment\n    }\n  } \n": types.SetUserAvatarDocument,
    "\n  query Me {\n    me {\n      ...UserFragment\n    }\n  }\n": types.MeDocument,
    "\n  query MyFragranceRequests(\n    $input: RequestPaginationInput\n  ) {\n    me {\n      ...UserPreviewFragment\n      fragranceRequests(input: $input) {\n        edges {\n          node {\n            ...FragranceRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": types.MyFragranceRequestsDocument,
    "\n  query MyBrandRequests(\n    $input: RequestPaginationInput\n  ) {\n    me {\n      ...UserPreviewFragment\n      brandRequests(input: $input) {\n        edges {\n          node {\n            ...BrandRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": types.MyBrandRequestsDocument,
    "\n  query MyAccordRequests(\n    $input: RequestPaginationInput\n  ) {\n    me {\n      ...UserPreviewFragment\n      accordRequests(input: $input) {\n        edges {\n          node {\n            ...AccordRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": types.MyAccordRequestsDocument,
    "\n  query MyNoteRequests(\n    $input: RequestPaginationInput\n  ) {\n    me {\n      ...UserPreviewFragment\n      noteRequests(input: $input) {\n        edges {\n          node {\n            ...NoteRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": types.MyNoteRequestsDocument,
    "\n  query User(\n    $id: ID!\n  ) {\n    user(id: $id) {\n      ...UserPreviewFragment\n    }\n  }\n": types.UserDocument,
    "\n  query UserFragranceRequests(\n    $id: ID!\n    $input: RequestPaginationInput\n  ) {\n    user(id: $id) {\n      ...UserPreviewFragment\n      fragranceRequests(input: $input) {\n        edges {\n          node {\n            ...FragranceRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": types.UserFragranceRequestsDocument,
    "\n  query UserBrandRequests(\n    $id: ID!\n    $input: RequestPaginationInput\n  ) {\n    user(id: $id) {\n      ...UserPreviewFragment\n      brandRequests(input: $input) {\n        edges {\n          node {\n            ...BrandRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": types.UserBrandRequestsDocument,
    "\n  query UserAccordRequests(\n    $id: ID!\n    $input: RequestPaginationInput\n  ) {\n    user(id: $id) {\n      ...UserPreviewFragment\n      accordRequests(input: $input) {\n        edges {\n          node {\n            ...AccordRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": types.UserAccordRequestsDocument,
    "\n  query UserNoteRequests(\n    $id: ID!\n    $input: RequestPaginationInput\n  ) {\n    user(id: $id) {\n      ...UserPreviewFragment\n      noteRequests(input: $input) {\n        edges {\n          node {\n            ...NoteRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n": types.UserNoteRequestsDocument,
    "\n  fragment PageInfoFragment on PageInfo {\n    hasPreviousPage\n    hasNextPage\n    startCursor\n    endCursor\n  }\n": types.PageInfoFragmentFragmentDoc,
    "\n  fragment SearchPageInfoFragment on SearchPageInfo {\n    hasPreviousPage\n    hasNextPage\n    startOffset\n    endOffset\n    pageSize\n  }\n": types.SearchPageInfoFragmentFragmentDoc,
    "\n  fragment VoteInfoFragment on VoteInfo {\n    upvotes \n    downvotes\n    score\n    myVote\n  }\n": types.VoteInfoFragmentFragmentDoc,
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
export function gql(source: "\n  fragment AccordFragment on Accord {\n    id\n    name\n    color\n  }\n"): (typeof documents)["\n  fragment AccordFragment on Accord {\n    id\n    name\n    color\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AccordEditFragment on AccordEdit { \n    id\n    status\n    reason\n\n    proposedName\n    proposedColor\n    proposedDescription\n\n    accord {\n      ...AccordFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n    reviewer {\n      ...UserPreviewFragment\n    }\n  }\n"): (typeof documents)["\n  fragment AccordEditFragment on AccordEdit { \n    id\n    status\n    reason\n\n    proposedName\n    proposedColor\n    proposedDescription\n\n    accord {\n      ...AccordFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n    reviewer {\n      ...UserPreviewFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AccordRequestFragment on AccordRequest { \n    id\n    version\n    requestStatus\n    name\n    description\n    color\n\n    thumbnail {\n      ...AssetPreviewFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n  }\n"): (typeof documents)["\n  fragment AccordRequestFragment on AccordRequest { \n    id\n    version\n    requestStatus\n    name\n    description\n    color\n\n    thumbnail {\n      ...AssetPreviewFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateAccordEditMutation(\n    $input: CreateAccordEditInput!\n  ) {\n    createAccordEdit(input: $input) {\n      ...AccordEditFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateAccordEditMutation(\n    $input: CreateAccordEditInput!\n  ) {\n    createAccordEdit(input: $input) {\n      ...AccordEditFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ReviewAccordEditMutation(\n    $input: ReviewAccordEditInput!\n  ) {\n    reviewAccordEdit(input: $input) {\n      ...AccordEditFragment\n    }\n  }\n"): (typeof documents)["\n  mutation ReviewAccordEditMutation(\n    $input: ReviewAccordEditInput!\n  ) {\n    reviewAccordEdit(input: $input) {\n      ...AccordEditFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateAccordRequestMutation(\n    $input: CreateAccordRequestInput!\n  ) {\n    createAccordRequest(input: $input) {\n      ...AccordRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateAccordRequestMutation(\n    $input: CreateAccordRequestInput!\n  ) {\n    createAccordRequest(input: $input) {\n      ...AccordRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateAccordRequestMutation(\n    $input: UpdateAccordRequestInput!\n  ) {\n    updateAccordRequest(input: $input) {\n      ...AccordRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateAccordRequestMutation(\n    $input: UpdateAccordRequestInput!\n  ) {\n    updateAccordRequest(input: $input) {\n      ...AccordRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteAccordRequestMutation(\n    $input: DeleteAccordRequestInput!\n  ) {\n    deleteAccordRequest(input: $input) {\n      ...AccordRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteAccordRequestMutation(\n    $input: DeleteAccordRequestInput!\n  ) {\n    deleteAccordRequest(input: $input) {\n      ...AccordRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SubmitAccordRequestMutation(\n    $input: SubmitAccordRequestInput!\n  ) {\n    submitAccordRequest(input: $input) {\n      ...AccordRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation SubmitAccordRequestMutation(\n    $input: SubmitAccordRequestInput!\n  ) {\n    submitAccordRequest(input: $input) {\n      ...AccordRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VoteOnAccordRequestMutation(\n    $input: VoteOnAccordRequestInput!\n  ) {\n    voteOnAccordRequest(input: $input) {\n      ...AccordRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation VoteOnAccordRequestMutation(\n    $input: VoteOnAccordRequestInput!\n  ) {\n    voteOnAccordRequest(input: $input) {\n      ...AccordRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AccordQuery(\n    $id: ID!\n  ) {\n    accord(id: $id) {\n      ...AccordFragment\n    }\n  }\n"): (typeof documents)["\n  query AccordQuery(\n    $id: ID!\n  ) {\n    accord(id: $id) {\n      ...AccordFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AccordsQuery(\n    $input: AccordPaginationInput\n  ) {\n    accords(input: $input) {\n      edges {\n        node {\n          ...AccordFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query AccordsQuery(\n    $input: AccordPaginationInput\n  ) {\n    accords(input: $input) {\n      edges {\n        node {\n          ...AccordFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchAccordsQuery(\n    $input: SearchInput\n  ) {\n    searchAccords(input: $input) {\n      edges {\n        node {\n          ...AccordFragment \n        }\n      } \n      pageInfo {\n        ...SearchPageInfoFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchAccordsQuery(\n    $input: SearchInput\n  ) {\n    searchAccords(input: $input) {\n      edges {\n        node {\n          ...AccordFragment \n        }\n      } \n      pageInfo {\n        ...SearchPageInfoFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AccordEditQuery(\n    $id: ID!\n  ) {\n    accordEdit(id: $id) {\n      ...AccordEditFragment\n    }\n  }\n"): (typeof documents)["\n  query AccordEditQuery(\n    $id: ID!\n  ) {\n    accordEdit(id: $id) {\n      ...AccordEditFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AccordEditsQuery(\n    $input: AccordEditPaginationInput\n  ) {\n    accordEdits(input: $input) {\n      edges {\n        node {\n          ...AccordEditFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query AccordEditsQuery(\n    $input: AccordEditPaginationInput\n  ) {\n    accordEdits(input: $input) {\n      edges {\n        node {\n          ...AccordEditFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AccordRequestQuery(\n    $id: ID!\n  ) {\n    accordRequest(id: $id) {\n      ...AccordRequestFragment\n    }\n  }\n"): (typeof documents)["\n  query AccordRequestQuery(\n    $id: ID!\n  ) {\n    accordRequest(id: $id) {\n      ...AccordRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AccordRequestsQuery(\n    $input: RequestPaginationInput\n  ) {\n    accordRequests(input: $input) {\n      edges {\n        node {\n          ...AccordRequestFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query AccordRequestsQuery(\n    $input: RequestPaginationInput\n  ) {\n    accordRequests(input: $input) {\n      edges {\n        node {\n          ...AccordRequestFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AssetFragment on Asset {\n    id\n    url\n    name\n    contentType\n    contentSize\n    s3Key\n  }\n"): (typeof documents)["\n  fragment AssetFragment on Asset {\n    id\n    url\n    name\n    contentType\n    contentSize\n    s3Key\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AssetPreviewFragment on Asset {\n    id\n    url\n  }\n"): (typeof documents)["\n  fragment AssetPreviewFragment on Asset {\n    id\n    url\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment PresignedUploadFragment on PresignedUpload {\n    assetId\n    url\n    fields \n  }\n"): (typeof documents)["\n  fragment PresignedUploadFragment on PresignedUpload {\n    assetId\n    url\n    fields \n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation StageAsset(\n    $input: StageAssetInput!\n  ) {\n    stageAsset(input: $input) {\n      ...PresignedUploadFragment\n    }\n  }\n"): (typeof documents)["\n  mutation StageAsset(\n    $input: StageAssetInput!\n  ) {\n    stageAsset(input: $input) {\n      ...PresignedUploadFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteAsset(\n    $input: DeleteAssetInput!\n  ) {\n    deleteAsset(input: $input)\n  }\n"): (typeof documents)["\n  mutation DeleteAsset(\n    $input: DeleteAssetInput!\n  ) {\n    deleteAsset(input: $input)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AuthTokenPayloadFragment on AuthTokenPayload {\n    idToken \n    accessToken\n    expiresIn\n  }\n"): (typeof documents)["\n  fragment AuthTokenPayloadFragment on AuthTokenPayload {\n    idToken \n    accessToken\n    expiresIn\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AuthCodeDeliveryDetailsFragment on AuthCodeDeliveryDetails {\n    method\n    attribute\n    destination\n  }\n"): (typeof documents)["\n  fragment AuthCodeDeliveryDetailsFragment on AuthCodeDeliveryDetails {\n    method\n    attribute\n    destination\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AuthDeliveryResultFragment on AuthDeliveryResult {\n    isComplete \n    delivery {\n      ...AuthCodeDeliveryDetailsFragment\n    }\n  }\n"): (typeof documents)["\n  fragment AuthDeliveryResultFragment on AuthDeliveryResult {\n    isComplete \n    delivery {\n      ...AuthCodeDeliveryDetailsFragment\n    }\n  }\n"];
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
export function gql(source: "\n  fragment BrandFragment on Brand {\n    id\n    name\n    website\n    description\n    avatar {\n      ...AssetFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n  }\n"): (typeof documents)["\n  fragment BrandFragment on Brand {\n    id\n    name\n    website\n    description\n    avatar {\n      ...AssetFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment BrandPreviewFragment on Brand {\n    id\n    name\n    avatar {\n      ...AssetPreviewFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n  }\n"): (typeof documents)["\n  fragment BrandPreviewFragment on Brand {\n    id\n    name\n    avatar {\n      ...AssetPreviewFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment BrandEditFragment on BrandEdit { \n    id\n    status\n    reason\n\n    proposedName\n    proposedDescription\n    proposedWebsite\n    proposedAvatar {\n      ...AssetPreviewFragment\n    }\n\n    brand {\n      ...BrandFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n    reviewer {\n      ...UserPreviewFragment\n    }\n  }\n"): (typeof documents)["\n  fragment BrandEditFragment on BrandEdit { \n    id\n    status\n    reason\n\n    proposedName\n    proposedDescription\n    proposedWebsite\n    proposedAvatar {\n      ...AssetPreviewFragment\n    }\n\n    brand {\n      ...BrandFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n    reviewer {\n      ...UserPreviewFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment BrandRequestFragment on BrandRequest { \n    id\n    version\n    requestStatus\n    name\n    website\n    description\n\n    avatar {\n      ...AssetPreviewFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n  }\n"): (typeof documents)["\n  fragment BrandRequestFragment on BrandRequest { \n    id\n    version\n    requestStatus\n    name\n    website\n    description\n\n    avatar {\n      ...AssetPreviewFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VoteOnBrandMutation(\n    $input: VoteOnBrandInput!\n  ) {\n    voteOnBrand(input: $input) {\n      ...BrandPreviewFragment\n    }\n  }\n"): (typeof documents)["\n  mutation VoteOnBrandMutation(\n    $input: VoteOnBrandInput!\n  ) {\n    voteOnBrand(input: $input) {\n      ...BrandPreviewFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateBrandEditMutation(\n    $input: CreateBrandEditInput!\n  ) {\n    createBrandEdit(input: $input) {\n      ...BrandEditFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateBrandEditMutation(\n    $input: CreateBrandEditInput!\n  ) {\n    createBrandEdit(input: $input) {\n      ...BrandEditFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ReviewBrandEditMutation(\n    $input: ReviewBrandEditInput!\n  ) {\n    reviewBrandEdit(input: $input) {\n      ...BrandEditFragment\n    }\n  }\n"): (typeof documents)["\n  mutation ReviewBrandEditMutation(\n    $input: ReviewBrandEditInput!\n  ) {\n    reviewBrandEdit(input: $input) {\n      ...BrandEditFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateBrandRequestMutation(\n    $input: CreateBrandRequestInput!\n  ) {\n    createBrandRequest(input: $input) {\n      ...BrandRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateBrandRequestMutation(\n    $input: CreateBrandRequestInput!\n  ) {\n    createBrandRequest(input: $input) {\n      ...BrandRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateBrandRequestMutation(\n    $input: UpdateBrandRequestInput!\n  ) {\n    updateBrandRequest(input: $input) {\n      ...BrandRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateBrandRequestMutation(\n    $input: UpdateBrandRequestInput!\n  ) {\n    updateBrandRequest(input: $input) {\n      ...BrandRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteBrandRequestMutation(\n    $input: DeleteBrandRequestInput!\n  ) {\n    deleteBrandRequest(input: $input) {\n      ...BrandRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteBrandRequestMutation(\n    $input: DeleteBrandRequestInput!\n  ) {\n    deleteBrandRequest(input: $input) {\n      ...BrandRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SubmitBrandRequestMutation(\n    $input: SubmitBrandRequestInput!\n  ) {\n    submitBrandRequest(input: $input) {\n      ...BrandRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation SubmitBrandRequestMutation(\n    $input: SubmitBrandRequestInput!\n  ) {\n    submitBrandRequest(input: $input) {\n      ...BrandRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VoteOnBrandRequestMutation(\n    $input: VoteOnBrandRequestInput!\n  ) {\n    voteOnBrandRequest(input: $input) {\n      ...BrandRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation VoteOnBrandRequestMutation(\n    $input: VoteOnBrandRequestInput!\n  ) {\n    voteOnBrandRequest(input: $input) {\n      ...BrandRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Brand($id: ID!) {\n    brand(id: $id) {\n      ...BrandPreviewFragment\n    }\n  }\n"): (typeof documents)["\n  query Brand($id: ID!) {\n    brand(id: $id) {\n      ...BrandPreviewFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Brands($input: BrandPaginationInput) {\n    brands(input: $input) {\n      edges {\n        node {\n          ...BrandPreviewFragment\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query Brands($input: BrandPaginationInput) {\n    brands(input: $input) {\n      edges {\n        node {\n          ...BrandPreviewFragment\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchBrands($input: SearchInput) {\n    searchBrands(input: $input) {\n      edges {\n        node {\n          ...BrandPreviewFragment\n        }\n      }\n      pageInfo {\n        ...SearchPageInfoFragment\n      } \n    }\n  }\n"): (typeof documents)["\n  query SearchBrands($input: SearchInput) {\n    searchBrands(input: $input) {\n      edges {\n        node {\n          ...BrandPreviewFragment\n        }\n      }\n      pageInfo {\n        ...SearchPageInfoFragment\n      } \n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query BrandFragrances($id: ID!, $input: FragrancePaginationInput) {\n    brand(id: $id) {\n      id\n      fragrances(input: $input) {\n        edges {\n          node {\n            ...FragrancePreviewFragment\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query BrandFragrances($id: ID!, $input: FragrancePaginationInput) {\n    brand(id: $id) {\n      id\n      fragrances(input: $input) {\n        edges {\n          node {\n            ...FragrancePreviewFragment\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query BrandEdit($id: ID!) {\n    brandEdit(id: $id) {\n      ...BrandEditFragment\n    }\n  }\n"): (typeof documents)["\n  query BrandEdit($id: ID!) {\n    brandEdit(id: $id) {\n      ...BrandEditFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query BrandEdits($input: BrandEditPaginationInput) {\n    brandEdits(input: $input) {\n      edges {\n        node {\n          ...BrandEditFragment\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query BrandEdits($input: BrandEditPaginationInput) {\n    brandEdits(input: $input) {\n      edges {\n        node {\n          ...BrandEditFragment\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query BrandRequest($id: ID!) {\n    brandRequest(id: $id) {\n      ...BrandRequestFragment\n    }\n  }\n"): (typeof documents)["\n  query BrandRequest($id: ID!) {\n    brandRequest(id: $id) {\n      ...BrandRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query BrandRequests($input: RequestPaginationInput) {\n    brandRequests(input: $input) {\n      edges {\n        node {\n          ...BrandRequestFragment\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query BrandRequests($input: RequestPaginationInput) {\n    brandRequests(input: $input) {\n      edges {\n        node {\n          ...BrandRequestFragment\n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceFragment on Fragrance { \n    id\n    name\n    description\n    releaseYear\n    concentration\n    status\n\n    votes {\n      ...VoteInfoFragment\n    }\n\n    brand {\n      ...BrandPreviewFragment\n    }\n\n    images {\n      ...FragranceImageFragment\n    }\n\n    traits {\n      ...FragranceTraitFragment\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceFragment on Fragrance { \n    id\n    name\n    description\n    releaseYear\n    concentration\n    status\n\n    votes {\n      ...VoteInfoFragment\n    }\n\n    brand {\n      ...BrandPreviewFragment\n    }\n\n    images {\n      ...FragranceImageFragment\n    }\n\n    traits {\n      ...FragranceTraitFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragrancePreviewFragment on Fragrance { \n    id\n    name\n\n    votes {\n      ...VoteInfoFragment\n    }\n\n    brand {\n      ...BrandPreviewFragment\n    }\n\n    thumbnail {\n      ...FragranceImageFragment\n    }\n  }\n"): (typeof documents)["\n  fragment FragrancePreviewFragment on Fragrance { \n    id\n    name\n\n    votes {\n      ...VoteInfoFragment\n    }\n\n    brand {\n      ...BrandPreviewFragment\n    }\n\n    thumbnail {\n      ...FragranceImageFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceImageFragment on FragranceImage { \n    id\n    url\n    primaryColor\n    width\n    height\n  }\n"): (typeof documents)["\n  fragment FragranceImageFragment on FragranceImage { \n    id\n    url\n    primaryColor\n    width\n    height\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceAccordFragment on FragranceAccord { \n    id\n    accord {\n      ...AccordFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceAccordFragment on FragranceAccord { \n    id\n    accord {\n      ...AccordFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceNoteFragment on FragranceNote { \n    id\n    note {\n      ...NotePreviewFragment\n    }\n    layer\n    votes {\n      ...VoteInfoFragment\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceNoteFragment on FragranceNote { \n    id\n    note {\n      ...NotePreviewFragment\n    }\n    layer\n    votes {\n      ...VoteInfoFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceTraitFragment on FragranceTrait { \n    id\n    type\n    name\n    options {\n      ...TraitOptionFragment\n    } \n    stats {\n      ...TraitStatsFragment\n    }\n    myVote {\n      ...TraitVoteFragment\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceTraitFragment on FragranceTrait { \n    id\n    type\n    name\n    options {\n      ...TraitOptionFragment\n    } \n    stats {\n      ...TraitStatsFragment\n    }\n    myVote {\n      ...TraitVoteFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceEditFragment on FragranceEdit { \n    id\n    status\n    reason\n\n    proposedName\n    proposedDescription\n    proposedReleaseYear\n    proposedConcentration\n    proposedStatus\n    proposedBrand {\n      ...BrandPreviewFragment\n    }\n    proposedImage {\n      ...AssetPreviewFragment\n    }\n\n    fragrance {\n      ...FragrancePreviewFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n    reviewer {\n      ...UserPreviewFragment\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceEditFragment on FragranceEdit { \n    id\n    status\n    reason\n\n    proposedName\n    proposedDescription\n    proposedReleaseYear\n    proposedConcentration\n    proposedStatus\n    proposedBrand {\n      ...BrandPreviewFragment\n    }\n    proposedImage {\n      ...AssetPreviewFragment\n    }\n\n    fragrance {\n      ...FragrancePreviewFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n    reviewer {\n      ...UserPreviewFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceRequestFragment on FragranceRequest { \n    id\n    version\n    requestStatus\n\n    name\n    description\n    releaseYear\n    concentration\n    fragranceStatus\n\n    brand {\n      ...BrandPreviewFragment\n    }\n\n    image {\n      ...AssetPreviewFragment\n    }\n\n    traits {\n      ...FragranceRequestTraitFragment\n    }\n\n    votes {\n      ...VoteInfoFragment\n    }\n\n    user {\n      ...UserPreviewFragment\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceRequestFragment on FragranceRequest { \n    id\n    version\n    requestStatus\n\n    name\n    description\n    releaseYear\n    concentration\n    fragranceStatus\n\n    brand {\n      ...BrandPreviewFragment\n    }\n\n    image {\n      ...AssetPreviewFragment\n    }\n\n    traits {\n      ...FragranceRequestTraitFragment\n    }\n\n    votes {\n      ...VoteInfoFragment\n    }\n\n    user {\n      ...UserPreviewFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceRequestPreviewFragment on FragranceRequest { \n    id\n    version\n    requestStatus\n\n    name\n\n    brand {\n      ...BrandPreviewFragment\n    }\n\n    image {\n      ...AssetPreviewFragment\n    }\n\n    votes {\n      ...VoteInfoFragment\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceRequestPreviewFragment on FragranceRequest { \n    id\n    version\n    requestStatus\n\n    name\n\n    brand {\n      ...BrandPreviewFragment\n    }\n\n    image {\n      ...AssetPreviewFragment\n    }\n\n    votes {\n      ...VoteInfoFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceRequestTraitFragment on FragranceRequestTrait { \n    traitType\n    selectedOption {\n      ...TraitOptionFragment\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceRequestTraitFragment on FragranceRequestTrait { \n    traitType\n    selectedOption {\n      ...TraitOptionFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceRequestNoteFragment on FragranceRequestNote { \n    id\n    layer\n    note {\n      ...NotePreviewFragment\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceRequestNoteFragment on FragranceRequestNote { \n    id\n    layer\n    note {\n      ...NotePreviewFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VoteOnFragranceMutation(\n    $input: VoteOnFragranceInput!\n  ) {\n    voteOnFragrance(input: $input) {\n      ...FragrancePreviewFragment\n    }\n  }\n"): (typeof documents)["\n  mutation VoteOnFragranceMutation(\n    $input: VoteOnFragranceInput!\n  ) {\n    voteOnFragrance(input: $input) {\n      ...FragrancePreviewFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VoteOnFragranceAccordMutation(\n    $input: VoteOnFragranceAccordInput!\n  ) {\n    voteOnFragranceAccord(input: $input) {\n      ...AccordFragment\n    }\n  }\n"): (typeof documents)["\n  mutation VoteOnFragranceAccordMutation(\n    $input: VoteOnFragranceAccordInput!\n  ) {\n    voteOnFragranceAccord(input: $input) {\n      ...AccordFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VoteOnFragranceNoteMutation(\n    $input: VoteOnFragranceNoteInput!\n  ) {\n    voteOnFragranceNote(input: $input) {\n      ...NotePreviewFragment\n    }\n  }\n"): (typeof documents)["\n  mutation VoteOnFragranceNoteMutation(\n    $input: VoteOnFragranceNoteInput!\n  ) {\n    voteOnFragranceNote(input: $input) {\n      ...NotePreviewFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VoteOnFragranceTraitMutation(\n    $input: VoteOnFragranceTraitInput!\n  ) {\n    voteOnFragranceTrait(input: $input) {\n      ...TraitVoteFragment\n    }\n  }\n"): (typeof documents)["\n  mutation VoteOnFragranceTraitMutation(\n    $input: VoteOnFragranceTraitInput!\n  ) {\n    voteOnFragranceTrait(input: $input) {\n      ...TraitVoteFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateFragranceEditMutation(\n    $input: CreateFragranceEditInput!\n  ) {\n    createFragranceEdit(input: $input) {\n      ...FragranceEditFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateFragranceEditMutation(\n    $input: CreateFragranceEditInput!\n  ) {\n    createFragranceEdit(input: $input) {\n      ...FragranceEditFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ReviewFragranceEditMutation(\n    $input: ReviewFragranceEditInput!\n  ) {\n    reviewFragranceEdit(input: $input) {\n      ...FragranceEditFragment\n    }\n  }\n"): (typeof documents)["\n  mutation ReviewFragranceEditMutation(\n    $input: ReviewFragranceEditInput!\n  ) {\n    reviewFragranceEdit(input: $input) {\n      ...FragranceEditFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateFragranceRequestMutation(\n    $input: CreateFragranceRequestInput!\n  ) {\n    createFragranceRequest(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateFragranceRequestMutation(\n    $input: CreateFragranceRequestInput!\n  ) {\n    createFragranceRequest(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateFragranceRequestMutation(\n    $input: UpdateFragranceRequestInput!\n  ) {\n    updateFragranceRequest(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateFragranceRequestMutation(\n    $input: UpdateFragranceRequestInput!\n  ) {\n    updateFragranceRequest(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SetFragranceRequestBrandMutation(\n    $input: SetFragranceRequestBrandInput!\n  ) {\n    setFragranceRequestBrand(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation SetFragranceRequestBrandMutation(\n    $input: SetFragranceRequestBrandInput!\n  ) {\n    setFragranceRequestBrand(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SetFragranceRequestAccordsMutation(\n    $input: SetFragranceRequestAccordsInput!\n  ) {\n    setFragranceRequestAccords(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation SetFragranceRequestAccordsMutation(\n    $input: SetFragranceRequestAccordsInput!\n  ) {\n    setFragranceRequestAccords(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SetFragranceRequestNotesMutation(\n    $input: SetFragranceRequestNotesInput!\n  ) {\n    setFragranceRequestNotes(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation SetFragranceRequestNotesMutation(\n    $input: SetFragranceRequestNotesInput!\n  ) {\n    setFragranceRequestNotes(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SetFragranceRequestTraitMutation(\n    $input: SetFragranceRequestTraitInput!\n  ) {\n    setFragranceRequestTrait(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation SetFragranceRequestTraitMutation(\n    $input: SetFragranceRequestTraitInput!\n  ) {\n    setFragranceRequestTrait(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteFragranceRequestMutation(\n    $input: DeleteFragranceRequestInput!\n  ) {\n    deleteFragranceRequest(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteFragranceRequestMutation(\n    $input: DeleteFragranceRequestInput!\n  ) {\n    deleteFragranceRequest(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SubmitFragranceRequestMutation(\n    $input: SubmitFragranceRequestInput!\n  ) {\n    submitFragranceRequest(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation SubmitFragranceRequestMutation(\n    $input: SubmitFragranceRequestInput!\n  ) {\n    submitFragranceRequest(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VoteOnFragranceRequestMutation(\n    $input: VoteOnFragranceRequestInput!\n  ) {\n    voteOnFragranceRequest(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation VoteOnFragranceRequestMutation(\n    $input: VoteOnFragranceRequestInput!\n  ) {\n    voteOnFragranceRequest(input: $input) {\n      ...FragranceRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceQuery($id: ID!) {\n    fragrance(id: $id) {\n      ...FragranceFragment\n    }\n  }\n"): (typeof documents)["\n  query FragranceQuery($id: ID!) {\n    fragrance(id: $id) {\n      ...FragranceFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragrancesQuery(\n    $input: FragrancePaginationInput\n  ) {\n    fragrances(input: $input) {\n      edges {\n        node {\n          ...FragrancePreviewFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragrancesQuery(\n    $input: FragrancePaginationInput\n  ) {\n    fragrances(input: $input) {\n      edges {\n        node {\n          ...FragrancePreviewFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchFragrancesQuery(\n    $input: SearchInput\n  ) {\n    searchFragrances(input: $input) {\n      edges {\n        node {\n          ...FragrancePreviewFragment \n        }\n      }\n      pageInfo {\n        ...SearchPageInfoFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchFragrancesQuery(\n    $input: SearchInput\n  ) {\n    searchFragrances(input: $input) {\n      edges {\n        node {\n          ...FragrancePreviewFragment \n        }\n      }\n      pageInfo {\n        ...SearchPageInfoFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceImagesQuery (\n    $id: ID!\n  ) {\n    fragrance(id: $id) {\n      ...FragrancePreviewFragment\n      images {\n        ...FragranceImageFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragranceImagesQuery (\n    $id: ID!\n  ) {\n    fragrance(id: $id) {\n      ...FragrancePreviewFragment\n      images {\n        ...FragranceImageFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceAccordsQuery (\n    $id: ID!\n    $input: FragranceAccordPaginationInput\n  ) {\n    fragrance(id: $id) {\n      ...FragrancePreviewFragment\n      accords(input: $input) {\n        edges {\n          node {\n            ...FragranceAccordFragment\n            accord {\n              ...AccordFragment\n            }\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragranceAccordsQuery (\n    $id: ID!\n    $input: FragranceAccordPaginationInput\n  ) {\n    fragrance(id: $id) {\n      ...FragrancePreviewFragment\n      accords(input: $input) {\n        edges {\n          node {\n            ...FragranceAccordFragment\n            accord {\n              ...AccordFragment\n            }\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceNotesQuery (\n    $id: ID!\n  ) {\n    fragrance(id: $id) {\n      ...FragrancePreviewFragment\n      \n      topNotes: notes(input: { layer: TOP }) {\n        edges {\n          node {\n            ...FragranceNoteFragment\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n\n      middleNotes: notes(input: { layer: MIDDLE }) {\n        edges {\n          node {\n            ...FragranceNoteFragment\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n\n      baseNotes: notes(input: { layer: BASE }) {\n        edges {\n          node {\n            ...FragranceNoteFragment\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragranceNotesQuery (\n    $id: ID!\n  ) {\n    fragrance(id: $id) {\n      ...FragrancePreviewFragment\n      \n      topNotes: notes(input: { layer: TOP }) {\n        edges {\n          node {\n            ...FragranceNoteFragment\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n\n      middleNotes: notes(input: { layer: MIDDLE }) {\n        edges {\n          node {\n            ...FragranceNoteFragment\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n\n      baseNotes: notes(input: { layer: BASE }) {\n        edges {\n          node {\n            ...FragranceNoteFragment\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceNotesLayerQuery (\n    $id: ID!\n    $input: FragranceNotePaginationInput\n  ) {\n    fragrance(id: $id) {\n      ...FragrancePreviewFragment\n      notes(input: $input) {\n        edges {\n          node {\n            ...FragranceNoteFragment\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragranceNotesLayerQuery (\n    $id: ID!\n    $input: FragranceNotePaginationInput\n  ) {\n    fragrance(id: $id) {\n      ...FragrancePreviewFragment\n      notes(input: $input) {\n        edges {\n          node {\n            ...FragranceNoteFragment\n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceEditQuery(\n    $id: ID!\n  ) {\n    fragranceEdit(id: $id) {\n      ...FragranceEditFragment\n    }\n  }\n"): (typeof documents)["\n  query FragranceEditQuery(\n    $id: ID!\n  ) {\n    fragranceEdit(id: $id) {\n      ...FragranceEditFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceEditsQuery(\n    $input: FragranceEditPaginationInput\n  ) {\n    fragranceEdits(input: $input) {\n      edges {\n        node {\n          ...FragranceEditFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragranceEditsQuery(\n    $input: FragranceEditPaginationInput\n  ) {\n    fragranceEdits(input: $input) {\n      edges {\n        node {\n          ...FragranceEditFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceRequestQuery(\n    $id: ID!\n  ) {\n    fragranceRequest(id: $id) {\n      ...FragranceRequestFragment\n    }\n  }\n"): (typeof documents)["\n  query FragranceRequestQuery(\n    $id: ID!\n  ) {\n    fragranceRequest(id: $id) {\n      ...FragranceRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceRequestsQuery(\n    $input: RequestPaginationInput\n  ) {\n    fragranceRequests(input: $input) {\n      edges {\n        node {\n          ...FragranceRequestPreviewFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragranceRequestsQuery(\n    $input: RequestPaginationInput\n  ) {\n    fragranceRequests(input: $input) {\n      edges {\n        node {\n          ...FragranceRequestPreviewFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceRequestAccordsQuery (\n    $id: ID!\n  ) {\n    fragranceRequest(id: $id) {\n      ...FragranceRequestPreviewFragment\n      accords {\n        ...AccordFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragranceRequestAccordsQuery (\n    $id: ID!\n  ) {\n    fragranceRequest(id: $id) {\n      ...FragranceRequestPreviewFragment\n      accords {\n        ...AccordFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceRequestNotesQuery (\n    $id: ID!\n  ) {\n    fragranceRequest(id: $id) { \n      ...FragranceRequestPreviewFragment\n      \n      topNotes: notes(layer: TOP) {\n        ...FragranceRequestNoteFragment\n      }\n\n      middleNotes: notes(layer: MIDDLE) {\n        ...FragranceRequestNoteFragment\n      }\n\n      baseNotes: notes(layer: BASE) {\n        ...FragranceRequestNoteFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragranceRequestNotesQuery (\n    $id: ID!\n  ) {\n    fragranceRequest(id: $id) { \n      ...FragranceRequestPreviewFragment\n      \n      topNotes: notes(layer: TOP) {\n        ...FragranceRequestNoteFragment\n      }\n\n      middleNotes: notes(layer: MIDDLE) {\n        ...FragranceRequestNoteFragment\n      }\n\n      baseNotes: notes(layer: BASE) {\n        ...FragranceRequestNoteFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment NoteFragment on Note { \n    id\n    name\n    thumbnail {\n      ...AssetFragment\n    }\n  }\n"): (typeof documents)["\n  fragment NoteFragment on Note { \n    id\n    name\n    thumbnail {\n      ...AssetFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment NotePreviewFragment on Note { \n    id\n    name\n    thumbnail {\n      ...AssetPreviewFragment\n    }\n  }\n"): (typeof documents)["\n  fragment NotePreviewFragment on Note { \n    id\n    name\n    thumbnail {\n      ...AssetPreviewFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment NoteEditFragment on NoteEdit { \n    id\n    status\n    reason\n\n    proposedName\n    proposedDescription\n    proposedThumbnail {\n      ...AssetPreviewFragment\n    }\n\n    note {\n      ...NotePreviewFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n    reviewer {\n      ...UserPreviewFragment\n    }\n  }\n"): (typeof documents)["\n  fragment NoteEditFragment on NoteEdit { \n    id\n    status\n    reason\n\n    proposedName\n    proposedDescription\n    proposedThumbnail {\n      ...AssetPreviewFragment\n    }\n\n    note {\n      ...NotePreviewFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n    reviewer {\n      ...UserPreviewFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment NoteRequestFragment on NoteRequest { \n    id\n    version\n    requestStatus\n    name\n    description\n\n    thumbnail {\n      ...AssetPreviewFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n  }\n"): (typeof documents)["\n  fragment NoteRequestFragment on NoteRequest { \n    id\n    version\n    requestStatus\n    name\n    description\n\n    thumbnail {\n      ...AssetPreviewFragment\n    }\n    votes {\n      ...VoteInfoFragment\n    }\n    user {\n      ...UserPreviewFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateNoteEditMutation(\n    $input: CreateNoteEditInput!\n  ) {\n    createNoteEdit(input: $input) {\n      ...NoteEditFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateNoteEditMutation(\n    $input: CreateNoteEditInput!\n  ) {\n    createNoteEdit(input: $input) {\n      ...NoteEditFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ReviewNoteEditMutation(\n    $input: ReviewNoteEditInput!\n  ) {\n    reviewNoteEdit(input: $input) {\n      ...NoteEditFragment\n    }\n  }\n"): (typeof documents)["\n  mutation ReviewNoteEditMutation(\n    $input: ReviewNoteEditInput!\n  ) {\n    reviewNoteEdit(input: $input) {\n      ...NoteEditFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateNoteRequestMutation(\n    $input: CreateNoteRequestInput!\n  ) {\n    createNoteRequest(input: $input) {\n      ...NoteRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateNoteRequestMutation(\n    $input: CreateNoteRequestInput!\n  ) {\n    createNoteRequest(input: $input) {\n      ...NoteRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateNoteRequestMutation(\n    $input: UpdateNoteRequestInput!\n  ) {\n    updateNoteRequest(input: $input) {\n      ...NoteRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateNoteRequestMutation(\n    $input: UpdateNoteRequestInput!\n  ) {\n    updateNoteRequest(input: $input) {\n      ...NoteRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteNoteRequestMutation(\n    $input: DeleteNoteRequestInput!\n  ) {\n    deleteNoteRequest(input: $input) {\n      ...NoteRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteNoteRequestMutation(\n    $input: DeleteNoteRequestInput!\n  ) {\n    deleteNoteRequest(input: $input) {\n      ...NoteRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SubmitNoteRequestMutation(\n    $input: SubmitNoteRequestInput!\n  ) {\n    submitNoteRequest(input: $input) {\n      ...NoteRequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation SubmitNoteRequestMutation(\n    $input: SubmitNoteRequestInput!\n  ) {\n    submitNoteRequest(input: $input) {\n      ...NoteRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VoteOnNoteRequestMutation(\n    $input: VoteOnNoteRequestInput!\n  ) {\n    voteOnNoteRequest(input: $input) {\n      ...NoteRequestFragment\n    }\n  } \n"): (typeof documents)["\n  mutation VoteOnNoteRequestMutation(\n    $input: VoteOnNoteRequestInput!\n  ) {\n    voteOnNoteRequest(input: $input) {\n      ...NoteRequestFragment\n    }\n  } \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Note(\n    $id: ID!\n  ) {\n    note(id: $id) {\n      ...NotePreviewFragment\n    }\n  }\n"): (typeof documents)["\n  query Note(\n    $id: ID!\n  ) {\n    note(id: $id) {\n      ...NotePreviewFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Notes(\n    $input: NotePaginationInput\n  ) {\n    notes(input: $input) {\n      edges {\n        node {\n          ...NotePreviewFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query Notes(\n    $input: NotePaginationInput\n  ) {\n    notes(input: $input) {\n      edges {\n        node {\n          ...NotePreviewFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchNotes(\n    $input: SearchInput\n  ) {\n    searchNotes(input: $input) {\n      edges {\n        node {\n          ...NotePreviewFragment \n        }\n      }\n      pageInfo {\n        ...SearchPageInfoFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchNotes(\n    $input: SearchInput\n  ) {\n    searchNotes(input: $input) {\n      edges {\n        node {\n          ...NotePreviewFragment \n        }\n      }\n      pageInfo {\n        ...SearchPageInfoFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query NoteEdit(\n    $id: ID!\n  ) {\n    noteEdit(id: $id) {\n      ...NoteEditFragment\n    }\n  }\n"): (typeof documents)["\n  query NoteEdit(\n    $id: ID!\n  ) {\n    noteEdit(id: $id) {\n      ...NoteEditFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query NoteEdits(\n    $input: NoteEditPaginationInput\n  ) {\n    noteEdits(input: $input) {\n      edges {\n        node {\n          ...NoteEditFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query NoteEdits(\n    $input: NoteEditPaginationInput\n  ) {\n    noteEdits(input: $input) {\n      edges {\n        node {\n          ...NoteEditFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query NoteRequest(\n    $id: ID!\n  ) {\n    noteRequest(id: $id) {\n      ...NoteRequestFragment\n    }\n  }\n"): (typeof documents)["\n  query NoteRequest(\n    $id: ID!\n  ) {\n    noteRequest(id: $id) {\n      ...NoteRequestFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query NoteRequests(\n    $input: RequestPaginationInput\n  ) {\n    noteRequests(input: $input) {\n      edges {\n        node {\n          ...NoteRequestFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query NoteRequests(\n    $input: RequestPaginationInput\n  ) {\n    noteRequests(input: $input) {\n      edges {\n        node {\n          ...NoteRequestFragment \n        }\n      }\n      pageInfo {\n        ...PageInfoFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment TraitOptionFragment on TraitOption {\n    id\n    label\n    score\n  }\n"): (typeof documents)["\n  fragment TraitOptionFragment on TraitOption {\n    id\n    label\n    score\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment TraitVoteDistributionFragment on TraitVoteDistribution {\n    option {\n      ...TraitOptionFragment\n    }\n    votes\n  }\n"): (typeof documents)["\n  fragment TraitVoteDistributionFragment on TraitVoteDistribution {\n    option {\n      ...TraitOptionFragment\n    }\n    votes\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment TraitStatsFragment on TraitStats {\n    averageScore \n    totalVotes\n    distribution {\n      ...TraitVoteDistributionFragment\n    }\n  }\n"): (typeof documents)["\n  fragment TraitStatsFragment on TraitStats {\n    averageScore \n    totalVotes\n    distribution {\n      ...TraitVoteDistributionFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment TraitVoteFragment on TraitVote {\n    option {\n      ...TraitOptionFragment\n    } \n  }\n"): (typeof documents)["\n  fragment TraitVoteFragment on TraitVote {\n    option {\n      ...TraitOptionFragment\n    } \n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment UserFragment on User {\n    id\n    username\n    email\n    avatar {\n      ...AssetPreviewFragment\n    }\n  }\n"): (typeof documents)["\n  fragment UserFragment on User {\n    id\n    username\n    email\n    avatar {\n      ...AssetPreviewFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment UserPreviewFragment on User {\n    id\n    username\n    avatar {\n      ...AssetPreviewFragment\n    }\n  }\n"): (typeof documents)["\n  fragment UserPreviewFragment on User {\n    id\n    username\n    avatar {\n      ...AssetPreviewFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateUser(\n    $input: UpdateUserInput!\n  ) {\n    updateUser(input: $input) {\n      ...UserFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUser(\n    $input: UpdateUserInput!\n  ) {\n    updateUser(input: $input) {\n      ...UserFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SetUserAvatar(\n    $input: SetUserAvatarInput!\n  ) {\n    setUserAvatar(input: $input) {\n      ...UserFragment\n    }\n  } \n"): (typeof documents)["\n  mutation SetUserAvatar(\n    $input: SetUserAvatarInput!\n  ) {\n    setUserAvatar(input: $input) {\n      ...UserFragment\n    }\n  } \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Me {\n    me {\n      ...UserFragment\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    me {\n      ...UserFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MyFragranceRequests(\n    $input: RequestPaginationInput\n  ) {\n    me {\n      ...UserPreviewFragment\n      fragranceRequests(input: $input) {\n        edges {\n          node {\n            ...FragranceRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query MyFragranceRequests(\n    $input: RequestPaginationInput\n  ) {\n    me {\n      ...UserPreviewFragment\n      fragranceRequests(input: $input) {\n        edges {\n          node {\n            ...FragranceRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MyBrandRequests(\n    $input: RequestPaginationInput\n  ) {\n    me {\n      ...UserPreviewFragment\n      brandRequests(input: $input) {\n        edges {\n          node {\n            ...BrandRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query MyBrandRequests(\n    $input: RequestPaginationInput\n  ) {\n    me {\n      ...UserPreviewFragment\n      brandRequests(input: $input) {\n        edges {\n          node {\n            ...BrandRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MyAccordRequests(\n    $input: RequestPaginationInput\n  ) {\n    me {\n      ...UserPreviewFragment\n      accordRequests(input: $input) {\n        edges {\n          node {\n            ...AccordRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query MyAccordRequests(\n    $input: RequestPaginationInput\n  ) {\n    me {\n      ...UserPreviewFragment\n      accordRequests(input: $input) {\n        edges {\n          node {\n            ...AccordRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MyNoteRequests(\n    $input: RequestPaginationInput\n  ) {\n    me {\n      ...UserPreviewFragment\n      noteRequests(input: $input) {\n        edges {\n          node {\n            ...NoteRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query MyNoteRequests(\n    $input: RequestPaginationInput\n  ) {\n    me {\n      ...UserPreviewFragment\n      noteRequests(input: $input) {\n        edges {\n          node {\n            ...NoteRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query User(\n    $id: ID!\n  ) {\n    user(id: $id) {\n      ...UserPreviewFragment\n    }\n  }\n"): (typeof documents)["\n  query User(\n    $id: ID!\n  ) {\n    user(id: $id) {\n      ...UserPreviewFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserFragranceRequests(\n    $id: ID!\n    $input: RequestPaginationInput\n  ) {\n    user(id: $id) {\n      ...UserPreviewFragment\n      fragranceRequests(input: $input) {\n        edges {\n          node {\n            ...FragranceRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserFragranceRequests(\n    $id: ID!\n    $input: RequestPaginationInput\n  ) {\n    user(id: $id) {\n      ...UserPreviewFragment\n      fragranceRequests(input: $input) {\n        edges {\n          node {\n            ...FragranceRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserBrandRequests(\n    $id: ID!\n    $input: RequestPaginationInput\n  ) {\n    user(id: $id) {\n      ...UserPreviewFragment\n      brandRequests(input: $input) {\n        edges {\n          node {\n            ...BrandRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserBrandRequests(\n    $id: ID!\n    $input: RequestPaginationInput\n  ) {\n    user(id: $id) {\n      ...UserPreviewFragment\n      brandRequests(input: $input) {\n        edges {\n          node {\n            ...BrandRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserAccordRequests(\n    $id: ID!\n    $input: RequestPaginationInput\n  ) {\n    user(id: $id) {\n      ...UserPreviewFragment\n      accordRequests(input: $input) {\n        edges {\n          node {\n            ...AccordRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserAccordRequests(\n    $id: ID!\n    $input: RequestPaginationInput\n  ) {\n    user(id: $id) {\n      ...UserPreviewFragment\n      accordRequests(input: $input) {\n        edges {\n          node {\n            ...AccordRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserNoteRequests(\n    $id: ID!\n    $input: RequestPaginationInput\n  ) {\n    user(id: $id) {\n      ...UserPreviewFragment\n      noteRequests(input: $input) {\n        edges {\n          node {\n            ...NoteRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserNoteRequests(\n    $id: ID!\n    $input: RequestPaginationInput\n  ) {\n    user(id: $id) {\n      ...UserPreviewFragment\n      noteRequests(input: $input) {\n        edges {\n          node {\n            ...NoteRequestFragment \n          }\n        }\n        pageInfo {\n          ...PageInfoFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment PageInfoFragment on PageInfo {\n    hasPreviousPage\n    hasNextPage\n    startCursor\n    endCursor\n  }\n"): (typeof documents)["\n  fragment PageInfoFragment on PageInfo {\n    hasPreviousPage\n    hasNextPage\n    startCursor\n    endCursor\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment SearchPageInfoFragment on SearchPageInfo {\n    hasPreviousPage\n    hasNextPage\n    startOffset\n    endOffset\n    pageSize\n  }\n"): (typeof documents)["\n  fragment SearchPageInfoFragment on SearchPageInfo {\n    hasPreviousPage\n    hasNextPage\n    startOffset\n    endOffset\n    pageSize\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment VoteInfoFragment on VoteInfo {\n    upvotes \n    downvotes\n    score\n    myVote\n  }\n"): (typeof documents)["\n  fragment VoteInfoFragment on VoteInfo {\n    upvotes \n    downvotes\n    score\n    myVote\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;