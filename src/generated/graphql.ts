/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date; output: Date; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: JSON; output: JSON; }
};

export type Accord = {
  __typename?: 'Accord';
  color: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type AccordConnection = {
  __typename?: 'AccordConnection';
  edges: Array<AccordEdge>;
  pageInfo: PageInfo;
};

export type AccordEdge = {
  __typename?: 'AccordEdge';
  cursor: Scalars['String']['output'];
  node: Accord;
};

export type AccordPaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<AccordSortInput>;
};

export const AccordSortBy = {
  Recent: 'RECENT'
} as const;

export type AccordSortBy = typeof AccordSortBy[keyof typeof AccordSortBy];
export type AccordSortInput = {
  by?: InputMaybe<AccordSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export type Asset = {
  __typename?: 'Asset';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  type: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type AuthCodeDeliveryDetails = {
  __typename?: 'AuthCodeDeliveryDetails';
  attribute?: Maybe<Scalars['String']['output']>;
  destination?: Maybe<Scalars['String']['output']>;
  method?: Maybe<Scalars['String']['output']>;
};

export type AuthDeliveryResult = {
  __typename?: 'AuthDeliveryResult';
  delivery?: Maybe<AuthCodeDeliveryDetails>;
  isComplete: Scalars['Boolean']['output'];
};

export type AuthTokenPayload = {
  __typename?: 'AuthTokenPayload';
  accessToken: Scalars['String']['output'];
  expiresIn: Scalars['Int']['output'];
  idToken: Scalars['String']['output'];
};

export const AvatarStatus = {
  Failed: 'FAILED',
  Pending: 'PENDING',
  Processing: 'PROCESSING',
  Ready: 'READY'
} as const;

export type AvatarStatus = typeof AvatarStatus[keyof typeof AvatarStatus];
export const Concentration = {
  BodyMist: 'BODY_MIST',
  EauFraiche: 'EAU_FRAICHE',
  Edc: 'EDC',
  Edp: 'EDP',
  Edt: 'EDT',
  Oil: 'OIL',
  Other: 'OTHER',
  Parfum: 'PARFUM'
} as const;

export type Concentration = typeof Concentration[keyof typeof Concentration];
export type ConfirmForgotPasswordInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type ConfirmSignUpInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type CreateFragranceDraftInput = {
  concentration?: InputMaybe<Concentration>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  releaseYear?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<FragranceStatus>;
};

export type DeleteFragranceDraftImageInput = {
  assetId: Scalars['ID']['input'];
  draftId: Scalars['ID']['input'];
  version: Scalars['Int']['input'];
};

export type DeleteFragranceDraftInput = {
  id: Scalars['ID']['input'];
};

export type Draft = {
  id: Scalars['ID']['output'];
  user: User;
};

export type DraftPaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<DraftSortInput>;
};

export const DraftSortBy = {
  Recent: 'RECENT'
} as const;

export type DraftSortBy = typeof DraftSortBy[keyof typeof DraftSortBy];
export type DraftSortInput = {
  by?: InputMaybe<DraftSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export type FinalizeFragranceDraftImageInput = {
  assetId: Scalars['ID']['input'];
  draftId: Scalars['ID']['input'];
  version: Scalars['Int']['input'];
};

export type ForgotPasswordInput = {
  email: Scalars['String']['input'];
};

export type Fragrance = {
  __typename?: 'Fragrance';
  brand: Scalars['String']['output'];
  concentration: Concentration;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: FragranceImageConnection;
  name: Scalars['String']['output'];
  releaseYear: Scalars['Int']['output'];
  status: FragranceStatus;
};

export type FragranceConnection = {
  __typename?: 'FragranceConnection';
  edges: Array<FragranceEdge>;
  pageInfo: PageInfo;
};

export type FragranceDraft = {
  __typename?: 'FragranceDraft';
  accords: Array<Accord>;
  concentration?: Maybe<Concentration>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<FragranceDraftImage>;
  name?: Maybe<Scalars['String']['output']>;
  notes: Array<Note>;
  releaseYear?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<FragranceStatus>;
  trait: FragranceDraftTrait;
  traits: Array<FragranceDraftTrait>;
  user: User;
  version: Scalars['Int']['output'];
};


export type FragranceDraftNotesArgs = {
  layer: NoteLayer;
};


export type FragranceDraftTraitArgs = {
  type: TraitTypeEnum;
};

export type FragranceDraftConnection = {
  __typename?: 'FragranceDraftConnection';
  edges: Array<FragranceDraftEdge>;
  pageInfo: PageInfo;
};

export type FragranceDraftEdge = {
  __typename?: 'FragranceDraftEdge';
  cursor: Scalars['String']['output'];
  node: FragranceDraft;
};

export type FragranceDraftImage = {
  __typename?: 'FragranceDraftImage';
  draft: FragranceDraft;
  id: Scalars['ID']['output'];
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type FragranceDraftImageConnection = {
  __typename?: 'FragranceDraftImageConnection';
  edges: Array<FragranceDraftImageEdge>;
  pageInfo: PageInfo;
};

export type FragranceDraftImageEdge = {
  __typename?: 'FragranceDraftImageEdge';
  cursor: Scalars['String']['output'];
  node: FragranceDraftImage;
};

export type FragranceDraftTrait = {
  __typename?: 'FragranceDraftTrait';
  selectedOption?: Maybe<TraitOption>;
  traitType: TraitTypeEnum;
};

export type FragranceEdge = {
  __typename?: 'FragranceEdge';
  cursor: Scalars['String']['output'];
  node: Fragrance;
};

export type FragranceImage = {
  __typename?: 'FragranceImage';
  bg?: Maybe<Scalars['String']['output']>;
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type FragranceImageConnection = {
  __typename?: 'FragranceImageConnection';
  edges: Array<FragranceImageEdge>;
  pageInfo: PageInfo;
};

export type FragranceImageEdge = {
  __typename?: 'FragranceImageEdge';
  cursor: Scalars['String']['output'];
  node: FragranceImage;
};

export const FragranceStatus = {
  Current: 'CURRENT',
  Discontinued: 'DISCONTINUED',
  Reformulated: 'REFORMULATED'
} as const;

export type FragranceStatus = typeof FragranceStatus[keyof typeof FragranceStatus];
export type LogInInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  confirmForgotPassword: Scalars['Boolean']['output'];
  confirmSignUp: Scalars['Boolean']['output'];
  createFragranceDraft: FragranceDraft;
  deleteFragranceDraft: FragranceDraft;
  deleteFragranceDraftImage: FragranceDraft;
  finalizeFragranceDraftImage: FragranceDraft;
  forgotPassword: AuthDeliveryResult;
  logIn: AuthTokenPayload;
  logOut: Scalars['Boolean']['output'];
  refresh?: Maybe<AuthTokenPayload>;
  resendSignUpCode: AuthDeliveryResult;
  setFragranceDraftAccords: FragranceDraft;
  setFragranceDraftNotes: FragranceDraft;
  setFragranceDraftTrait: FragranceDraft;
  signUp: AuthDeliveryResult;
  stageFragranceDraftImage: PresignedUpload;
  updateFragranceDraft: FragranceDraft;
  updateUser: User;
  updateUserAvatar: PresignedUpload;
};


export type MutationConfirmForgotPasswordArgs = {
  input: ConfirmForgotPasswordInput;
};


export type MutationConfirmSignUpArgs = {
  input: ConfirmSignUpInput;
};


export type MutationCreateFragranceDraftArgs = {
  input: CreateFragranceDraftInput;
};


export type MutationDeleteFragranceDraftArgs = {
  input: DeleteFragranceDraftInput;
};


export type MutationDeleteFragranceDraftImageArgs = {
  input: DeleteFragranceDraftImageInput;
};


export type MutationFinalizeFragranceDraftImageArgs = {
  input: FinalizeFragranceDraftImageInput;
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationLogInArgs = {
  input: LogInInput;
};


export type MutationResendSignUpCodeArgs = {
  input: ResendSignUpCodeInput;
};


export type MutationSetFragranceDraftAccordsArgs = {
  input: SetFragranceDraftAccordsInput;
};


export type MutationSetFragranceDraftNotesArgs = {
  input: SetFragranceDraftNotesInput;
};


export type MutationSetFragranceDraftTraitArgs = {
  input: SetFragranceDraftTraitInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationStageFragranceDraftImageArgs = {
  input: StageAssetInput;
};


export type MutationUpdateFragranceDraftArgs = {
  input: UpdateFragranceDraftInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateUserAvatarArgs = {
  input: StageAssetInput;
};

export type Note = {
  __typename?: 'Note';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  thumbnailUrl: Scalars['String']['output'];
};

export type NoteConnection = {
  __typename?: 'NoteConnection';
  edges: Array<NoteEdge>;
  pageInfo: PageInfo;
};

export type NoteEdge = {
  __typename?: 'NoteEdge';
  cursor: Scalars['String']['output'];
  node: Note;
};

export const NoteLayer = {
  Base: 'BASE',
  Middle: 'MIDDLE',
  Top: 'TOP'
} as const;

export type NoteLayer = typeof NoteLayer[keyof typeof NoteLayer];
export type NotePaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<NoteSortInput>;
};

export const NoteSortBy = {
  Recent: 'RECENT'
} as const;

export type NoteSortBy = typeof NoteSortBy[keyof typeof NoteSortBy];
export type NoteSortInput = {
  by?: InputMaybe<NoteSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PresignedUpload = {
  __typename?: 'PresignedUpload';
  fields: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  accords: AccordConnection;
  fragranceDraft: FragranceDraft;
  fragranceDrafts: FragranceDraftConnection;
  me: User;
  notes: NoteConnection;
  user: User;
};


export type QueryAccordsArgs = {
  input?: InputMaybe<AccordPaginationInput>;
};


export type QueryFragranceDraftArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFragranceDraftsArgs = {
  input?: InputMaybe<DraftPaginationInput>;
};


export type QueryNotesArgs = {
  input?: InputMaybe<NotePaginationInput>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type ResendSignUpCodeInput = {
  email: Scalars['String']['input'];
};

export type SetFragranceDraftAccordsInput = {
  accordIds: Array<Scalars['ID']['input']>;
  draftId: Scalars['ID']['input'];
  version: Scalars['Int']['input'];
};

export type SetFragranceDraftNotesInput = {
  draftId: Scalars['ID']['input'];
  layer: NoteLayer;
  noteIds: Array<Scalars['ID']['input']>;
  version: Scalars['Int']['input'];
};

export type SetFragranceDraftTraitInput = {
  draftId: Scalars['ID']['input'];
  score: Scalars['Int']['input'];
  traitType: TraitTypeEnum;
  version: Scalars['Int']['input'];
};

export type SignUpInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export const SortDirection = {
  Ascending: 'ASCENDING',
  Descending: 'DESCENDING'
} as const;

export type SortDirection = typeof SortDirection[keyof typeof SortDirection];
export type StageAssetInput = {
  contentSize: Scalars['Int']['input'];
  contentType: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type Trait = {
  __typename?: 'Trait';
  myVote?: Maybe<TraitVote>;
  options: Array<TraitOption>;
  stats?: Maybe<TraitStats>;
  traitType: TraitTypeEnum;
};

export type TraitOption = {
  __typename?: 'TraitOption';
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  score: Scalars['Int']['output'];
};

export type TraitStats = {
  __typename?: 'TraitStats';
  averageScore: Scalars['Float']['output'];
  distribution: Array<TraitVoteDistribution>;
  totalVotes: Scalars['Int']['output'];
};

export const TraitTypeEnum = {
  Appeal: 'APPEAL',
  Balance: 'BALANCE',
  Complexity: 'COMPLEXITY',
  Gender: 'GENDER',
  Longevity: 'LONGEVITY',
  Projection: 'PROJECTION'
} as const;

export type TraitTypeEnum = typeof TraitTypeEnum[keyof typeof TraitTypeEnum];
export type TraitVote = {
  __typename?: 'TraitVote';
  option: TraitOption;
};

export type TraitVoteDistribution = {
  __typename?: 'TraitVoteDistribution';
  option: TraitOption;
  votes: Scalars['Int']['output'];
};

export type UpdateFragranceDraftInput = {
  concentration?: InputMaybe<Concentration>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  releaseYear?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<FragranceStatus>;
  version: Scalars['Int']['input'];
};

export type UpdateUserInput = {
  id: Scalars['ID']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  avatarSrc?: Maybe<Scalars['String']['output']>;
  avatarStatus: AvatarStatus;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type AccordSummaryFragmentFragment = { __typename?: 'Accord', id: string, name: string, color: string };

export type AccordsQueryQueryVariables = Exact<{
  input?: InputMaybe<AccordPaginationInput>;
}>;


export type AccordsQueryQuery = { __typename?: 'Query', accords: { __typename?: 'AccordConnection', edges: Array<{ __typename?: 'AccordEdge', node: { __typename?: 'Accord', id: string, name: string, color: string } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type AuthDeliveryResultFragmentFragment = { __typename?: 'AuthDeliveryResult', isComplete: boolean, delivery?: { __typename?: 'AuthCodeDeliveryDetails', attribute?: string | null, destination?: string | null, method?: string | null } | null };

export type AuthTokenPayloadFragmentFragment = { __typename?: 'AuthTokenPayload', idToken: string, accessToken: string, expiresIn: number };

export type RefreshMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshMutation = { __typename?: 'Mutation', refresh?: { __typename?: 'AuthTokenPayload', idToken: string, accessToken: string, expiresIn: number } | null };

export type LogInMutationVariables = Exact<{
  input: LogInInput;
}>;


export type LogInMutation = { __typename?: 'Mutation', logIn: { __typename?: 'AuthTokenPayload', idToken: string, accessToken: string, expiresIn: number } };

export type LogOutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogOutMutation = { __typename?: 'Mutation', logOut: boolean };

export type SignUpMutationVariables = Exact<{
  input: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'AuthDeliveryResult', isComplete: boolean, delivery?: { __typename?: 'AuthCodeDeliveryDetails', attribute?: string | null, destination?: string | null, method?: string | null } | null } };

export type ConfirmSignUpMutationVariables = Exact<{
  input: ConfirmSignUpInput;
}>;


export type ConfirmSignUpMutation = { __typename?: 'Mutation', confirmSignUp: boolean };

export type ResendSignUpCodeMutationVariables = Exact<{
  input: ResendSignUpCodeInput;
}>;


export type ResendSignUpCodeMutation = { __typename?: 'Mutation', resendSignUpCode: { __typename?: 'AuthDeliveryResult', isComplete: boolean, delivery?: { __typename?: 'AuthCodeDeliveryDetails', attribute?: string | null, destination?: string | null, method?: string | null } | null } };

export type ForgotPasswordMutationVariables = Exact<{
  input: ForgotPasswordInput;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'AuthDeliveryResult', isComplete: boolean, delivery?: { __typename?: 'AuthCodeDeliveryDetails', attribute?: string | null, destination?: string | null, method?: string | null } | null } };

export type ConfirmForgotPasswordMutationVariables = Exact<{
  input: ConfirmForgotPasswordInput;
}>;


export type ConfirmForgotPasswordMutation = { __typename?: 'Mutation', confirmForgotPassword: boolean };

export type FragranceDraftShellFragment = { __typename?: 'FragranceDraft', id: string, version: number };

export type FragranceDraftSummaryFragment = { __typename?: 'FragranceDraft', id: string, version: number, name?: string | null, description?: string | null, releaseYear?: number | null, concentration?: Concentration | null, status?: FragranceStatus | null };

export type FragranceDraftPreviewFragment = { __typename?: 'FragranceDraft', id: string, version: number, image?: { __typename?: 'FragranceDraftImage', id: string, url: string, type: string } | null };

export type FragranceDraftTraitsFragmentFragment = { __typename?: 'FragranceDraft', id: string, version: number, traits: Array<{ __typename?: 'FragranceDraftTrait', traitType: TraitTypeEnum, selectedOption?: { __typename?: 'TraitOption', id: string, label: string, score: number } | null }> };

export type FragranceDraftAccordsFragmentFragment = { __typename?: 'FragranceDraft', id: string, version: number, accords: Array<{ __typename?: 'Accord', id: string, name: string, color: string }> };

export type FragranceDraftNotesFragmentFragment = { __typename?: 'FragranceDraft', id: string, version: number, notes: Array<{ __typename?: 'Note', id: string, name: string, thumbnailUrl: string }> };

export type FragranceDraftImageSummaryFragment = { __typename?: 'FragranceDraftImage', id: string, url: string, type: string };

export type FragranceDraftTraitFragmentFragment = { __typename?: 'FragranceDraftTrait', traitType: TraitTypeEnum, selectedOption?: { __typename?: 'TraitOption', id: string, label: string, score: number } | null };

export type CreateFragranceDraftMutationVariables = Exact<{
  input: CreateFragranceDraftInput;
}>;


export type CreateFragranceDraftMutation = { __typename?: 'Mutation', createFragranceDraft: { __typename?: 'FragranceDraft', id: string, version: number, name?: string | null, description?: string | null, releaseYear?: number | null, concentration?: Concentration | null, status?: FragranceStatus | null } };

export type UpdateFragranceDraftMutationVariables = Exact<{
  input: UpdateFragranceDraftInput;
}>;


export type UpdateFragranceDraftMutation = { __typename?: 'Mutation', updateFragranceDraft: { __typename?: 'FragranceDraft', id: string, version: number, name?: string | null, description?: string | null, releaseYear?: number | null, concentration?: Concentration | null, status?: FragranceStatus | null } };

export type DeleteFragranceDraftMutationVariables = Exact<{
  input: DeleteFragranceDraftInput;
}>;


export type DeleteFragranceDraftMutation = { __typename?: 'Mutation', deleteFragranceDraft: { __typename?: 'FragranceDraft', id: string, version: number, name?: string | null, description?: string | null, releaseYear?: number | null, concentration?: Concentration | null, status?: FragranceStatus | null } };

export type StageFragranceDraftImageMutationVariables = Exact<{
  input: StageAssetInput;
}>;


export type StageFragranceDraftImageMutation = { __typename?: 'Mutation', stageFragranceDraftImage: { __typename?: 'PresignedUpload', id: string, url: string, fields: JSON } };

export type FinalizeFragranceDraftImageMutationVariables = Exact<{
  input: FinalizeFragranceDraftImageInput;
}>;


export type FinalizeFragranceDraftImageMutation = { __typename?: 'Mutation', finalizeFragranceDraftImage: { __typename?: 'FragranceDraft', id: string, version: number, image?: { __typename?: 'FragranceDraftImage', id: string, url: string, type: string } | null } };

export type SetFragranceDraftTraitMutationVariables = Exact<{
  input: SetFragranceDraftTraitInput;
}>;


export type SetFragranceDraftTraitMutation = { __typename?: 'Mutation', setFragranceDraftTrait: { __typename?: 'FragranceDraft', id: string, version: number, traits: Array<{ __typename?: 'FragranceDraftTrait', traitType: TraitTypeEnum, selectedOption?: { __typename?: 'TraitOption', id: string, label: string, score: number } | null }> } };

export type SetFragranceDraftAccordsMutationVariables = Exact<{
  input: SetFragranceDraftAccordsInput;
}>;


export type SetFragranceDraftAccordsMutation = { __typename?: 'Mutation', setFragranceDraftAccords: { __typename?: 'FragranceDraft', id: string, version: number, accords: Array<{ __typename?: 'Accord', id: string, name: string, color: string }> } };

export type SetFragranceDraftNotesMutationVariables = Exact<{
  input: SetFragranceDraftNotesInput;
  layer: NoteLayer;
}>;


export type SetFragranceDraftNotesMutation = { __typename?: 'Mutation', setFragranceDraftNotes: { __typename?: 'FragranceDraft', id: string, version: number, notes: Array<{ __typename?: 'Note', id: string, name: string, thumbnailUrl: string }> } };

export type FragranceDraftShellQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FragranceDraftShellQuery = { __typename?: 'Query', fragranceDraft: { __typename?: 'FragranceDraft', id: string, version: number } };

export type FragranceDraftQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FragranceDraftQuery = { __typename?: 'Query', fragranceDraft: { __typename?: 'FragranceDraft', id: string, version: number, name?: string | null, description?: string | null, releaseYear?: number | null, concentration?: Concentration | null, status?: FragranceStatus | null } };

export type FragranceDraftPreviewQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FragranceDraftPreviewQuery = { __typename?: 'Query', fragranceDraft: { __typename?: 'FragranceDraft', id: string, version: number, image?: { __typename?: 'FragranceDraftImage', id: string, url: string, type: string } | null } };

export type FragranceDraftsQueryVariables = Exact<{
  input?: InputMaybe<DraftPaginationInput>;
}>;


export type FragranceDraftsQuery = { __typename?: 'Query', fragranceDrafts: { __typename?: 'FragranceDraftConnection', edges: Array<{ __typename?: 'FragranceDraftEdge', node: { __typename?: 'FragranceDraft', id: string, version: number, image?: { __typename?: 'FragranceDraftImage', id: string, url: string, type: string } | null } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type FragranceDraftTraitQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  type: TraitTypeEnum;
}>;


export type FragranceDraftTraitQuery = { __typename?: 'Query', fragranceDraft: { __typename?: 'FragranceDraft', id: string, version: number, trait: { __typename?: 'FragranceDraftTrait', traitType: TraitTypeEnum, selectedOption?: { __typename?: 'TraitOption', id: string, label: string, score: number } | null } } };

export type FragranceDraftTraitsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FragranceDraftTraitsQuery = { __typename?: 'Query', fragranceDraft: { __typename?: 'FragranceDraft', id: string, version: number, traits: Array<{ __typename?: 'FragranceDraftTrait', traitType: TraitTypeEnum, selectedOption?: { __typename?: 'TraitOption', id: string, label: string, score: number } | null }> } };

export type FragranceDraftAccordsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FragranceDraftAccordsQuery = { __typename?: 'Query', fragranceDraft: { __typename?: 'FragranceDraft', id: string, version: number, accords: Array<{ __typename?: 'Accord', id: string, name: string, color: string }> } };

export type FragranceDraftNotesQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  layer: NoteLayer;
}>;


export type FragranceDraftNotesQuery = { __typename?: 'Query', fragranceDraft: { __typename?: 'FragranceDraft', id: string, version: number, notes: Array<{ __typename?: 'Note', id: string, name: string, thumbnailUrl: string }> } };

export type NoteSummaryFragmentFragment = { __typename?: 'Note', id: string, name: string, thumbnailUrl: string };

export type NotesQueryVariables = Exact<{
  input?: InputMaybe<NotePaginationInput>;
}>;


export type NotesQuery = { __typename?: 'Query', notes: { __typename?: 'NoteConnection', edges: Array<{ __typename?: 'NoteEdge', node: { __typename?: 'Note', id: string, name: string, thumbnailUrl: string } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type TraitOptionFragmentFragment = { __typename?: 'TraitOption', id: string, label: string, score: number };

export type UserSummaryFragmentFragment = { __typename?: 'User', id: string, username: string, email: string, avatarSrc?: string | null, avatarStatus: AvatarStatus };

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, username: string, email: string, avatarSrc?: string | null, avatarStatus: AvatarStatus } };

export type UpdateUserAvatarMutationVariables = Exact<{
  input: StageAssetInput;
}>;


export type UpdateUserAvatarMutation = { __typename?: 'Mutation', updateUserAvatar: { __typename?: 'PresignedUpload', id: string, url: string, fields: JSON } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, username: string, email: string, avatarSrc?: string | null, avatarStatus: AvatarStatus } };

export type UserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, username: string, email: string, avatarSrc?: string | null, avatarStatus: AvatarStatus } };

export type PageInfoFragmentFragment = { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null };

export type PresignedUploadFragmentFragment = { __typename?: 'PresignedUpload', id: string, url: string, fields: JSON };

export type AssetFragmentFragment = { __typename?: 'Asset', id: string, url?: string | null, name: string, size: number, type: string };

export const AuthDeliveryResultFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthDeliveryResultFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthDeliveryResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isComplete"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"destination"}},{"kind":"Field","name":{"kind":"Name","value":"method"}}]}}]}}]} as unknown as DocumentNode<AuthDeliveryResultFragmentFragment, unknown>;
export const AuthTokenPayloadFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthTokenPayloadFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthTokenPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"idToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"expiresIn"}}]}}]} as unknown as DocumentNode<AuthTokenPayloadFragmentFragment, unknown>;
export const FragranceDraftSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]} as unknown as DocumentNode<FragranceDraftSummaryFragment, unknown>;
export const FragranceDraftShellFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}}]} as unknown as DocumentNode<FragranceDraftShellFragment, unknown>;
export const FragranceDraftImageSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraftImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<FragranceDraftImageSummaryFragment, unknown>;
export const FragranceDraftPreviewFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftShell"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftImageSummary"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraftImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<FragranceDraftPreviewFragment, unknown>;
export const TraitOptionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TraitOptionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitOption"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]} as unknown as DocumentNode<TraitOptionFragmentFragment, unknown>;
export const FragranceDraftTraitFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftTraitFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraftTrait"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"selectedOption"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TraitOptionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TraitOptionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitOption"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]} as unknown as DocumentNode<FragranceDraftTraitFragmentFragment, unknown>;
export const FragranceDraftTraitsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftTraitsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftShell"}},{"kind":"Field","name":{"kind":"Name","value":"traits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftTraitFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TraitOptionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitOption"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftTraitFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraftTrait"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"selectedOption"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TraitOptionFragment"}}]}}]}}]} as unknown as DocumentNode<FragranceDraftTraitsFragmentFragment, unknown>;
export const AccordSummaryFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccordSummaryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Accord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]} as unknown as DocumentNode<AccordSummaryFragmentFragment, unknown>;
export const FragranceDraftAccordsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftAccordsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftShell"}},{"kind":"Field","name":{"kind":"Name","value":"accords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccordSummaryFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccordSummaryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Accord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]} as unknown as DocumentNode<FragranceDraftAccordsFragmentFragment, unknown>;
export const NoteSummaryFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NoteSummaryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}}]}}]} as unknown as DocumentNode<NoteSummaryFragmentFragment, unknown>;
export const FragranceDraftNotesFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftNotesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftShell"}},{"kind":"Field","name":{"kind":"Name","value":"notes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"layer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"layer"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NoteSummaryFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NoteSummaryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}}]}}]} as unknown as DocumentNode<FragranceDraftNotesFragmentFragment, unknown>;
export const UserSummaryFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummaryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}},{"kind":"Field","name":{"kind":"Name","value":"avatarStatus"}}]}}]} as unknown as DocumentNode<UserSummaryFragmentFragment, unknown>;
export const PageInfoFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<PageInfoFragmentFragment, unknown>;
export const PresignedUploadFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PresignedUploadFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PresignedUpload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"fields"}}]}}]} as unknown as DocumentNode<PresignedUploadFragmentFragment, unknown>;
export const AssetFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<AssetFragmentFragment, unknown>;
export const AccordsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AccordsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AccordPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accords"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccordSummaryFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccordSummaryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Accord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<AccordsQueryQuery, AccordsQueryQueryVariables>;
export const RefreshDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Refresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthTokenPayloadFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthTokenPayloadFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthTokenPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"idToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"expiresIn"}}]}}]} as unknown as DocumentNode<RefreshMutation, RefreshMutationVariables>;
export const LogInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LogInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthTokenPayloadFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthTokenPayloadFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthTokenPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"idToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"expiresIn"}}]}}]} as unknown as DocumentNode<LogInMutation, LogInMutationVariables>;
export const LogOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logOut"}}]}}]} as unknown as DocumentNode<LogOutMutation, LogOutMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthDeliveryResultFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthDeliveryResultFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthDeliveryResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isComplete"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"destination"}},{"kind":"Field","name":{"kind":"Name","value":"method"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const ConfirmSignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConfirmSignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ConfirmSignUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmSignUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ConfirmSignUpMutation, ConfirmSignUpMutationVariables>;
export const ResendSignUpCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResendSignUpCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResendSignUpCodeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resendSignUpCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthDeliveryResultFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthDeliveryResultFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthDeliveryResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isComplete"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"destination"}},{"kind":"Field","name":{"kind":"Name","value":"method"}}]}}]}}]} as unknown as DocumentNode<ResendSignUpCodeMutation, ResendSignUpCodeMutationVariables>;
export const ForgotPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ForgotPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ForgotPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forgotPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthDeliveryResultFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthDeliveryResultFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthDeliveryResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isComplete"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"destination"}},{"kind":"Field","name":{"kind":"Name","value":"method"}}]}}]}}]} as unknown as DocumentNode<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const ConfirmForgotPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConfirmForgotPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ConfirmForgotPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmForgotPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ConfirmForgotPasswordMutation, ConfirmForgotPasswordMutationVariables>;
export const CreateFragranceDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFragranceDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFragranceDraftInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFragranceDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftSummary"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]} as unknown as DocumentNode<CreateFragranceDraftMutation, CreateFragranceDraftMutationVariables>;
export const UpdateFragranceDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFragranceDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateFragranceDraftInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFragranceDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftSummary"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]} as unknown as DocumentNode<UpdateFragranceDraftMutation, UpdateFragranceDraftMutationVariables>;
export const DeleteFragranceDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFragranceDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteFragranceDraftInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFragranceDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftSummary"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]} as unknown as DocumentNode<DeleteFragranceDraftMutation, DeleteFragranceDraftMutationVariables>;
export const StageFragranceDraftImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StageFragranceDraftImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"StageAssetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stageFragranceDraftImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PresignedUploadFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PresignedUploadFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PresignedUpload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"fields"}}]}}]} as unknown as DocumentNode<StageFragranceDraftImageMutation, StageFragranceDraftImageMutationVariables>;
export const FinalizeFragranceDraftImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FinalizeFragranceDraftImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FinalizeFragranceDraftImageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finalizeFragranceDraftImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraftImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftShell"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftImageSummary"}}]}}]}}]} as unknown as DocumentNode<FinalizeFragranceDraftImageMutation, FinalizeFragranceDraftImageMutationVariables>;
export const SetFragranceDraftTraitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetFragranceDraftTrait"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetFragranceDraftTraitInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setFragranceDraftTrait"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftTraitsFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TraitOptionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitOption"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftTraitFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraftTrait"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"selectedOption"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TraitOptionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftTraitsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftShell"}},{"kind":"Field","name":{"kind":"Name","value":"traits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftTraitFragment"}}]}}]}}]} as unknown as DocumentNode<SetFragranceDraftTraitMutation, SetFragranceDraftTraitMutationVariables>;
export const SetFragranceDraftAccordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetFragranceDraftAccords"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetFragranceDraftAccordsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setFragranceDraftAccords"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftAccordsFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccordSummaryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Accord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftAccordsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftShell"}},{"kind":"Field","name":{"kind":"Name","value":"accords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccordSummaryFragment"}}]}}]}}]} as unknown as DocumentNode<SetFragranceDraftAccordsMutation, SetFragranceDraftAccordsMutationVariables>;
export const SetFragranceDraftNotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetFragranceDraftNotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetFragranceDraftNotesInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"layer"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NoteLayer"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setFragranceDraftNotes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftNotesFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NoteSummaryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftNotesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftShell"}},{"kind":"Field","name":{"kind":"Name","value":"notes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"layer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"layer"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NoteSummaryFragment"}}]}}]}}]} as unknown as DocumentNode<SetFragranceDraftNotesMutation, SetFragranceDraftNotesMutationVariables>;
export const FragranceDraftShellDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceDraftShell"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragranceDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftShell"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}}]} as unknown as DocumentNode<FragranceDraftShellQuery, FragranceDraftShellQueryVariables>;
export const FragranceDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragranceDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftSummary"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]} as unknown as DocumentNode<FragranceDraftQuery, FragranceDraftQueryVariables>;
export const FragranceDraftPreviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceDraftPreview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragranceDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraftImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftShell"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftImageSummary"}}]}}]}}]} as unknown as DocumentNode<FragranceDraftPreviewQuery, FragranceDraftPreviewQueryVariables>;
export const FragranceDraftsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceDrafts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DraftPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragranceDrafts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftPreview"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraftImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftShell"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftImageSummary"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<FragranceDraftsQuery, FragranceDraftsQueryVariables>;
export const FragranceDraftTraitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceDraftTrait"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TraitTypeEnum"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragranceDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"trait"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftTraitFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TraitOptionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitOption"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftTraitFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraftTrait"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"selectedOption"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TraitOptionFragment"}}]}}]}}]} as unknown as DocumentNode<FragranceDraftTraitQuery, FragranceDraftTraitQueryVariables>;
export const FragranceDraftTraitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceDraftTraits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragranceDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftTraitsFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TraitOptionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitOption"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftTraitFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraftTrait"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"selectedOption"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TraitOptionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftTraitsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftShell"}},{"kind":"Field","name":{"kind":"Name","value":"traits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftTraitFragment"}}]}}]}}]} as unknown as DocumentNode<FragranceDraftTraitsQuery, FragranceDraftTraitsQueryVariables>;
export const FragranceDraftAccordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceDraftAccords"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragranceDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftAccordsFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccordSummaryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Accord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftAccordsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftShell"}},{"kind":"Field","name":{"kind":"Name","value":"accords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccordSummaryFragment"}}]}}]}}]} as unknown as DocumentNode<FragranceDraftAccordsQuery, FragranceDraftAccordsQueryVariables>;
export const FragranceDraftNotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceDraftNotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"layer"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NoteLayer"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragranceDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftNotesFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NoteSummaryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDraftNotesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDraftShell"}},{"kind":"Field","name":{"kind":"Name","value":"notes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"layer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"layer"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NoteSummaryFragment"}}]}}]}}]} as unknown as DocumentNode<FragranceDraftNotesQuery, FragranceDraftNotesQueryVariables>;
export const NotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Notes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NotePaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NoteSummaryFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NoteSummaryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<NotesQuery, NotesQueryVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummaryFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummaryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}},{"kind":"Field","name":{"kind":"Name","value":"avatarStatus"}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateUserAvatarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserAvatar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"StageAssetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserAvatar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PresignedUploadFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PresignedUploadFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PresignedUpload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"fields"}}]}}]} as unknown as DocumentNode<UpdateUserAvatarMutation, UpdateUserAvatarMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummaryFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummaryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}},{"kind":"Field","name":{"kind":"Name","value":"avatarStatus"}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummaryFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummaryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}},{"kind":"Field","name":{"kind":"Name","value":"avatarStatus"}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;