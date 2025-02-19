import { z } from 'zod'
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
  BigFloat: { input: string; output: string; }
  BigInt: { input: string; output: string; }
  Cursor: { input: any; output: any; }
  Date: { input: string; output: string; }
  Datetime: { input: string; output: string; }
  File: { input: File; output: File; }
  JSON: { input: string; output: string; }
  Opaque: { input: any; output: any; }
  Time: { input: string; output: string; }
  UUID: { input: string; output: string; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eq?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Date']['input']>>;
  contains?: InputMaybe<Array<Scalars['Date']['input']>>;
  eq?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  contains?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  eq?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export type DeletedRecord = Node & {
  __typename?: 'DeletedRecord';
  data: Scalars['JSON']['output'];
  deletedAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  objectId: Scalars['UUID']['output'];
  tableName: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};

export type DeletedRecordConnection = {
  __typename?: 'DeletedRecordConnection';
  edges: Array<DeletedRecordEdge>;
  pageInfo: PageInfo;
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output'];
};

export type DeletedRecordDeleteResponse = {
  __typename?: 'DeletedRecordDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<DeletedRecord>;
};

export type DeletedRecordEdge = {
  __typename?: 'DeletedRecordEdge';
  cursor: Scalars['String']['output'];
  node: DeletedRecord;
};

export type DeletedRecordFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<DeletedRecordFilter>>;
  deletedAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<DeletedRecordFilter>;
  objectId?: InputMaybe<UuidFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<DeletedRecordFilter>>;
  tableName?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DeletedRecordInsertInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  objectId?: InputMaybe<Scalars['UUID']['input']>;
  tableName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type DeletedRecordInsertResponse = {
  __typename?: 'DeletedRecordInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<DeletedRecord>;
};

export type DeletedRecordOrderBy = {
  deletedAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  objectId?: InputMaybe<OrderByDirection>;
  tableName?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type DeletedRecordUpdateInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  objectId?: InputMaybe<Scalars['UUID']['input']>;
  tableName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type DeletedRecordUpdateResponse = {
  __typename?: 'DeletedRecordUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<DeletedRecord>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Float']['input']>>;
  contains?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Int']['input']>>;
  contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuditTrigger?: Maybe<Scalars['Opaque']['output']>;
  createDeleteTrigger?: Maybe<Scalars['Opaque']['output']>;
  /** Deletes zero or more records from the `DeletedRecord` collection */
  deleteFromDeletedRecordCollection: DeletedRecordDeleteResponse;
  /** Deletes zero or more records from the `OrganizationInvites` collection */
  deleteFromOrganizationInvitesCollection: OrganizationInvitesDeleteResponse;
  /** Deletes zero or more records from the `OrganizationMembers` collection */
  deleteFromOrganizationMembersCollection: OrganizationMembersDeleteResponse;
  /** Deletes zero or more records from the `Organizations` collection */
  deleteFromOrganizationsCollection: OrganizationsDeleteResponse;
  /** Deletes zero or more records from the `Profiles` collection */
  deleteFromProfilesCollection: ProfilesDeleteResponse;
  /** Adds one or more `DeletedRecord` records to the collection */
  insertIntoDeletedRecordCollection?: Maybe<DeletedRecordInsertResponse>;
  /** Adds one or more `OrganizationInvites` records to the collection */
  insertIntoOrganizationInvitesCollection?: Maybe<OrganizationInvitesInsertResponse>;
  /** Adds one or more `OrganizationMembers` records to the collection */
  insertIntoOrganizationMembersCollection?: Maybe<OrganizationMembersInsertResponse>;
  /** Adds one or more `Organizations` records to the collection */
  insertIntoOrganizationsCollection?: Maybe<OrganizationsInsertResponse>;
  /** Adds one or more `Profiles` records to the collection */
  insertIntoProfilesCollection?: Maybe<ProfilesInsertResponse>;
  organizationCreate?: Maybe<OrganizationCreateResult>;
  profileUpdate?: Maybe<ProfileUpdateResult>;
  /** Updates zero or more records in the `DeletedRecord` collection */
  updateDeletedRecordCollection: DeletedRecordUpdateResponse;
  /** Updates zero or more records in the `OrganizationInvites` collection */
  updateOrganizationInvitesCollection: OrganizationInvitesUpdateResponse;
  /** Updates zero or more records in the `OrganizationMembers` collection */
  updateOrganizationMembersCollection: OrganizationMembersUpdateResponse;
  /** Updates zero or more records in the `Organizations` collection */
  updateOrganizationsCollection: OrganizationsUpdateResponse;
  /** Updates zero or more records in the `Profiles` collection */
  updateProfilesCollection: ProfilesUpdateResponse;
};


export type MutationCreateAuditTriggerArgs = {
  targetTableName: Scalars['String']['input'];
};


export type MutationCreateDeleteTriggerArgs = {
  targetTableName: Scalars['String']['input'];
};


export type MutationDeleteFromDeletedRecordCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<DeletedRecordFilter>;
};


export type MutationDeleteFromOrganizationInvitesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrganizationInvitesFilter>;
};


export type MutationDeleteFromOrganizationMembersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrganizationMembersFilter>;
};


export type MutationDeleteFromOrganizationsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrganizationsFilter>;
};


export type MutationDeleteFromProfilesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProfilesFilter>;
};


export type MutationInsertIntoDeletedRecordCollectionArgs = {
  objects: Array<DeletedRecordInsertInput>;
};


export type MutationInsertIntoOrganizationInvitesCollectionArgs = {
  objects: Array<OrganizationInvitesInsertInput>;
};


export type MutationInsertIntoOrganizationMembersCollectionArgs = {
  objects: Array<OrganizationMembersInsertInput>;
};


export type MutationInsertIntoOrganizationsCollectionArgs = {
  objects: Array<OrganizationsInsertInput>;
};


export type MutationInsertIntoProfilesCollectionArgs = {
  objects: Array<ProfilesInsertInput>;
};


export type MutationOrganizationCreateArgs = {
  input: OrganizationCreateInput;
};


export type MutationProfileUpdateArgs = {
  input: ProfileUpdateInput;
};


export type MutationUpdateDeletedRecordCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<DeletedRecordFilter>;
  set: DeletedRecordUpdateInput;
};


export type MutationUpdateOrganizationInvitesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrganizationInvitesFilter>;
  set: OrganizationInvitesUpdateInput;
};


export type MutationUpdateOrganizationMembersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrganizationMembersFilter>;
  set: OrganizationMembersUpdateInput;
};


export type MutationUpdateOrganizationsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrganizationsFilter>;
  set: OrganizationsUpdateInput;
};


export type MutationUpdateProfilesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProfilesFilter>;
  set: ProfilesUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type OrganizationCreateInput = {
  name: Scalars['String']['input'];
  profilePicture?: InputMaybe<Scalars['File']['input']>;
};

export type OrganizationCreateResult = {
  __typename?: 'OrganizationCreateResult';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  profilePictureUrl?: Maybe<Scalars['String']['output']>;
};

export type OrganizationInvites = Node & {
  __typename?: 'OrganizationInvites';
  acceptedAt?: Maybe<Scalars['Datetime']['output']>;
  createdAt: Scalars['Datetime']['output'];
  createdBy: Scalars['UUID']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  email: Scalars['String']['output'];
  expiresAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  invitedBy: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  organization?: Maybe<Organizations>;
  organizationId: Scalars['UUID']['output'];
  organizationName: Scalars['String']['output'];
  profiles?: Maybe<Profiles>;
  role: OrganizationRoles;
  token: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
  updatedBy: Scalars['UUID']['output'];
};

export type OrganizationInvitesConnection = {
  __typename?: 'OrganizationInvitesConnection';
  edges: Array<OrganizationInvitesEdge>;
  pageInfo: PageInfo;
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output'];
};

export type OrganizationInvitesDeleteResponse = {
  __typename?: 'OrganizationInvitesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<OrganizationInvites>;
};

export type OrganizationInvitesEdge = {
  __typename?: 'OrganizationInvitesEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationInvites;
};

export type OrganizationInvitesFilter = {
  acceptedAt?: InputMaybe<DatetimeFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<OrganizationInvitesFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  createdBy?: InputMaybe<UuidFilter>;
  deletedAt?: InputMaybe<DatetimeFilter>;
  email?: InputMaybe<StringFilter>;
  expiresAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  invitedBy?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<OrganizationInvitesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<OrganizationInvitesFilter>>;
  organizationId?: InputMaybe<UuidFilter>;
  organizationName?: InputMaybe<StringFilter>;
  role?: InputMaybe<OrganizationRolesFilter>;
  token?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  updatedBy?: InputMaybe<UuidFilter>;
};

export type OrganizationInvitesInsertInput = {
  acceptedAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['UUID']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  invitedBy?: InputMaybe<Scalars['UUID']['input']>;
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  organizationName?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<OrganizationRoles>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['UUID']['input']>;
};

export type OrganizationInvitesInsertResponse = {
  __typename?: 'OrganizationInvitesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<OrganizationInvites>;
};

export type OrganizationInvitesOrderBy = {
  acceptedAt?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  createdBy?: InputMaybe<OrderByDirection>;
  deletedAt?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  expiresAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  invitedBy?: InputMaybe<OrderByDirection>;
  organizationId?: InputMaybe<OrderByDirection>;
  organizationName?: InputMaybe<OrderByDirection>;
  role?: InputMaybe<OrderByDirection>;
  token?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  updatedBy?: InputMaybe<OrderByDirection>;
};

export type OrganizationInvitesUpdateInput = {
  acceptedAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['UUID']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  invitedBy?: InputMaybe<Scalars['UUID']['input']>;
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  organizationName?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<OrganizationRoles>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['UUID']['input']>;
};

export type OrganizationInvitesUpdateResponse = {
  __typename?: 'OrganizationInvitesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<OrganizationInvites>;
};

export type OrganizationMembers = Node & {
  __typename?: 'OrganizationMembers';
  createdAt: Scalars['Datetime']['output'];
  createdBy: Scalars['UUID']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  organization?: Maybe<Organizations>;
  organizationId?: Maybe<Scalars['UUID']['output']>;
  profile?: Maybe<Profiles>;
  profileId?: Maybe<Scalars['UUID']['output']>;
  role: OrganizationRoles;
  updatedAt: Scalars['Datetime']['output'];
  updatedBy: Scalars['UUID']['output'];
};

export type OrganizationMembersConnection = {
  __typename?: 'OrganizationMembersConnection';
  edges: Array<OrganizationMembersEdge>;
  pageInfo: PageInfo;
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output'];
};

export type OrganizationMembersDeleteResponse = {
  __typename?: 'OrganizationMembersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<OrganizationMembers>;
};

export type OrganizationMembersEdge = {
  __typename?: 'OrganizationMembersEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationMembers;
};

export type OrganizationMembersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<OrganizationMembersFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  createdBy?: InputMaybe<UuidFilter>;
  deletedAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<OrganizationMembersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<OrganizationMembersFilter>>;
  organizationId?: InputMaybe<UuidFilter>;
  profileId?: InputMaybe<UuidFilter>;
  role?: InputMaybe<OrganizationRolesFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  updatedBy?: InputMaybe<UuidFilter>;
};

export type OrganizationMembersInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['UUID']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  profileId?: InputMaybe<Scalars['UUID']['input']>;
  role?: InputMaybe<OrganizationRoles>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['UUID']['input']>;
};

export type OrganizationMembersInsertResponse = {
  __typename?: 'OrganizationMembersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<OrganizationMembers>;
};

export type OrganizationMembersOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  createdBy?: InputMaybe<OrderByDirection>;
  deletedAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  organizationId?: InputMaybe<OrderByDirection>;
  profileId?: InputMaybe<OrderByDirection>;
  role?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  updatedBy?: InputMaybe<OrderByDirection>;
};

export type OrganizationMembersUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['UUID']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  profileId?: InputMaybe<Scalars['UUID']['input']>;
  role?: InputMaybe<OrganizationRoles>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['UUID']['input']>;
};

export type OrganizationMembersUpdateResponse = {
  __typename?: 'OrganizationMembersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<OrganizationMembers>;
};

export enum OrganizationRoles {
  Administrator = 'Administrator',
  Member = 'Member',
  Owner = 'Owner'
}

/** Boolean expression comparing fields on type "OrganizationRoles" */
export type OrganizationRolesFilter = {
  eq?: InputMaybe<OrganizationRoles>;
  in?: InputMaybe<Array<OrganizationRoles>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<OrganizationRoles>;
};

export type Organizations = Node & {
  __typename?: 'Organizations';
  createdAt: Scalars['Datetime']['output'];
  createdBy: Scalars['UUID']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  organizationInvitesCollection?: Maybe<OrganizationInvitesConnection>;
  organizationMembersCollection?: Maybe<OrganizationMembersConnection>;
  profilePictureUrl?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Datetime']['output'];
  updatedBy: Scalars['UUID']['output'];
};


export type OrganizationsOrganizationInvitesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrganizationInvitesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationInvitesOrderBy>>;
};


export type OrganizationsOrganizationMembersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrganizationMembersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationMembersOrderBy>>;
};

export type OrganizationsConnection = {
  __typename?: 'OrganizationsConnection';
  edges: Array<OrganizationsEdge>;
  pageInfo: PageInfo;
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output'];
};

export type OrganizationsDeleteResponse = {
  __typename?: 'OrganizationsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Organizations>;
};

export type OrganizationsEdge = {
  __typename?: 'OrganizationsEdge';
  cursor: Scalars['String']['output'];
  node: Organizations;
};

export type OrganizationsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<OrganizationsFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  createdBy?: InputMaybe<UuidFilter>;
  deletedAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<OrganizationsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<OrganizationsFilter>>;
  profilePictureUrl?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  updatedBy?: InputMaybe<UuidFilter>;
};

export type OrganizationsInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['UUID']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profilePictureUrl?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['UUID']['input']>;
};

export type OrganizationsInsertResponse = {
  __typename?: 'OrganizationsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Organizations>;
};

export type OrganizationsOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  createdBy?: InputMaybe<OrderByDirection>;
  deletedAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  profilePictureUrl?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  updatedBy?: InputMaybe<OrderByDirection>;
};

export type OrganizationsUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['UUID']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profilePictureUrl?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['UUID']['input']>;
};

export type OrganizationsUpdateResponse = {
  __typename?: 'OrganizationsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Organizations>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type ProfileUpdateInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Scalars['File']['input']>;
};

export type ProfileUpdateResult = {
  __typename?: 'ProfileUpdateResult';
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  profilePictureUrl?: Maybe<Scalars['String']['output']>;
};

export type Profiles = Node & {
  __typename?: 'Profiles';
  createdAt: Scalars['Datetime']['output'];
  createdBy: Scalars['UUID']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  organizationInvitesCollection?: Maybe<OrganizationInvitesConnection>;
  organizationMembersCollection?: Maybe<OrganizationMembersConnection>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  profilePictureUrl?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Datetime']['output'];
  updatedBy: Scalars['UUID']['output'];
};


export type ProfilesOrganizationInvitesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrganizationInvitesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationInvitesOrderBy>>;
};


export type ProfilesOrganizationMembersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrganizationMembersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationMembersOrderBy>>;
};

export type ProfilesConnection = {
  __typename?: 'ProfilesConnection';
  edges: Array<ProfilesEdge>;
  pageInfo: PageInfo;
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output'];
};

export type ProfilesDeleteResponse = {
  __typename?: 'ProfilesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesEdge = {
  __typename?: 'ProfilesEdge';
  cursor: Scalars['String']['output'];
  node: Profiles;
};

export type ProfilesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProfilesFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  createdBy?: InputMaybe<UuidFilter>;
  deletedAt?: InputMaybe<DatetimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  lastName?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProfilesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProfilesFilter>>;
  phoneNumber?: InputMaybe<StringFilter>;
  profilePictureUrl?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  updatedBy?: InputMaybe<UuidFilter>;
};

export type ProfilesInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['UUID']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  profilePictureUrl?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['UUID']['input']>;
};

export type ProfilesInsertResponse = {
  __typename?: 'ProfilesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  createdBy?: InputMaybe<OrderByDirection>;
  deletedAt?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  firstName?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  lastName?: InputMaybe<OrderByDirection>;
  phoneNumber?: InputMaybe<OrderByDirection>;
  profilePictureUrl?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  updatedBy?: InputMaybe<OrderByDirection>;
};

export type ProfilesUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['UUID']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  profilePictureUrl?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['UUID']['input']>;
};

export type ProfilesUpdateResponse = {
  __typename?: 'ProfilesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `DeletedRecord` */
  deletedRecordCollection?: Maybe<DeletedRecordConnection>;
  isOrgMember?: Maybe<Scalars['Boolean']['output']>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `OrganizationInvites` */
  organizationInvitesCollection?: Maybe<OrganizationInvitesConnection>;
  /** A pagable collection of type `OrganizationMembers` */
  organizationMembersCollection?: Maybe<OrganizationMembersConnection>;
  /** A pagable collection of type `Organizations` */
  organizationsCollection?: Maybe<OrganizationsConnection>;
  placeholder?: Maybe<Scalars['String']['output']>;
  /** A pagable collection of type `Profiles` */
  profilesCollection?: Maybe<ProfilesConnection>;
  viewer?: Maybe<Profiles>;
};


export type QueryDeletedRecordCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<DeletedRecordFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DeletedRecordOrderBy>>;
};


export type QueryIsOrgMemberArgs = {
  organizationId: Scalars['UUID']['input'];
  profileId: Scalars['UUID']['input'];
};


export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryOrganizationInvitesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrganizationInvitesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationInvitesOrderBy>>;
};


export type QueryOrganizationMembersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrganizationMembersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationMembersOrderBy>>;
};


export type QueryOrganizationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrganizationsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
};


export type QueryProfilesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProfilesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfilesOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Time']['input']>>;
  contains?: InputMaybe<Array<Scalars['Time']['input']>>;
  eq?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Time']['input']>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
  containedBy?: InputMaybe<Array<Scalars['UUID']['input']>>;
  contains?: InputMaybe<Array<Scalars['UUID']['input']>>;
  eq?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['UUID']['input']>>;
};


type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export const FilterIsSchema = z.nativeEnum(FilterIs);

export const OrderByDirectionSchema = z.nativeEnum(OrderByDirection);

export const OrganizationRolesSchema = z.nativeEnum(OrganizationRoles);

export function BigFloatFilterSchema(): z.ZodObject<Properties<BigFloatFilter>> {
  return z.object({
    eq: z.string().nullish(),
    gt: z.string().nullish(),
    gte: z.string().nullish(),
    in: z.array(z.string()).nullish(),
    is: FilterIsSchema.nullish(),
    lt: z.string().nullish(),
    lte: z.string().nullish(),
    neq: z.string().nullish()
  })
}

export function BigFloatListFilterSchema(): z.ZodObject<Properties<BigFloatListFilter>> {
  return z.object({
    containedBy: z.array(z.string()).nullish(),
    contains: z.array(z.string()).nullish(),
    eq: z.array(z.string()).nullish(),
    is: FilterIsSchema.nullish(),
    overlaps: z.array(z.string()).nullish()
  })
}

export function BigIntFilterSchema(): z.ZodObject<Properties<BigIntFilter>> {
  return z.object({
    eq: z.string().nullish(),
    gt: z.string().nullish(),
    gte: z.string().nullish(),
    in: z.array(z.string()).nullish(),
    is: FilterIsSchema.nullish(),
    lt: z.string().nullish(),
    lte: z.string().nullish(),
    neq: z.string().nullish()
  })
}

export function BigIntListFilterSchema(): z.ZodObject<Properties<BigIntListFilter>> {
  return z.object({
    containedBy: z.array(z.string()).nullish(),
    contains: z.array(z.string()).nullish(),
    eq: z.array(z.string()).nullish(),
    is: FilterIsSchema.nullish(),
    overlaps: z.array(z.string()).nullish()
  })
}

export function BooleanFilterSchema(): z.ZodObject<Properties<BooleanFilter>> {
  return z.object({
    eq: z.boolean().nullish(),
    is: FilterIsSchema.nullish()
  })
}

export function BooleanListFilterSchema(): z.ZodObject<Properties<BooleanListFilter>> {
  return z.object({
    containedBy: z.array(z.boolean()).nullish(),
    contains: z.array(z.boolean()).nullish(),
    eq: z.array(z.boolean()).nullish(),
    is: FilterIsSchema.nullish(),
    overlaps: z.array(z.boolean()).nullish()
  })
}

export function DateFilterSchema(): z.ZodObject<Properties<DateFilter>> {
  return z.object({
    eq: z.string().nullish(),
    gt: z.string().nullish(),
    gte: z.string().nullish(),
    in: z.array(z.string()).nullish(),
    is: FilterIsSchema.nullish(),
    lt: z.string().nullish(),
    lte: z.string().nullish(),
    neq: z.string().nullish()
  })
}

export function DateListFilterSchema(): z.ZodObject<Properties<DateListFilter>> {
  return z.object({
    containedBy: z.array(z.string()).nullish(),
    contains: z.array(z.string()).nullish(),
    eq: z.array(z.string()).nullish(),
    is: FilterIsSchema.nullish(),
    overlaps: z.array(z.string()).nullish()
  })
}

export function DatetimeFilterSchema(): z.ZodObject<Properties<DatetimeFilter>> {
  return z.object({
    eq: z.string().nullish(),
    gt: z.string().nullish(),
    gte: z.string().nullish(),
    in: z.array(z.string()).nullish(),
    is: FilterIsSchema.nullish(),
    lt: z.string().nullish(),
    lte: z.string().nullish(),
    neq: z.string().nullish()
  })
}

export function DatetimeListFilterSchema(): z.ZodObject<Properties<DatetimeListFilter>> {
  return z.object({
    containedBy: z.array(z.string()).nullish(),
    contains: z.array(z.string()).nullish(),
    eq: z.array(z.string()).nullish(),
    is: FilterIsSchema.nullish(),
    overlaps: z.array(z.string()).nullish()
  })
}

export function DeletedRecordFilterSchema(): z.ZodObject<Properties<DeletedRecordFilter>> {
  return z.object({
    and: z.array(DeletedRecordFilterSchema()).nullish(),
    deletedAt: DatetimeFilterSchema().nullish(),
    id: UuidFilterSchema().nullish(),
    nodeId: IdFilterSchema().nullish(),
    not: DeletedRecordFilterSchema().nullish(),
    objectId: UuidFilterSchema().nullish(),
    or: z.array(DeletedRecordFilterSchema()).nullish(),
    tableName: StringFilterSchema().nullish(),
    updatedAt: DatetimeFilterSchema().nullish()
  })
}

export function DeletedRecordInsertInputSchema(): z.ZodObject<Properties<DeletedRecordInsertInput>> {
  return z.object({
    data: z.string().nullish(),
    deletedAt: z.string().nullish(),
    id: z.string().nullish(),
    objectId: z.string().nullish(),
    tableName: z.string().nullish(),
    updatedAt: z.string().nullish()
  })
}

export function DeletedRecordOrderBySchema(): z.ZodObject<Properties<DeletedRecordOrderBy>> {
  return z.object({
    deletedAt: OrderByDirectionSchema.nullish(),
    id: OrderByDirectionSchema.nullish(),
    objectId: OrderByDirectionSchema.nullish(),
    tableName: OrderByDirectionSchema.nullish(),
    updatedAt: OrderByDirectionSchema.nullish()
  })
}

export function DeletedRecordUpdateInputSchema(): z.ZodObject<Properties<DeletedRecordUpdateInput>> {
  return z.object({
    data: z.string().nullish(),
    deletedAt: z.string().nullish(),
    id: z.string().nullish(),
    objectId: z.string().nullish(),
    tableName: z.string().nullish(),
    updatedAt: z.string().nullish()
  })
}

export function FloatFilterSchema(): z.ZodObject<Properties<FloatFilter>> {
  return z.object({
    eq: z.number().nullish(),
    gt: z.number().nullish(),
    gte: z.number().nullish(),
    in: z.array(z.number()).nullish(),
    is: FilterIsSchema.nullish(),
    lt: z.number().nullish(),
    lte: z.number().nullish(),
    neq: z.number().nullish()
  })
}

export function FloatListFilterSchema(): z.ZodObject<Properties<FloatListFilter>> {
  return z.object({
    containedBy: z.array(z.number()).nullish(),
    contains: z.array(z.number()).nullish(),
    eq: z.array(z.number()).nullish(),
    is: FilterIsSchema.nullish(),
    overlaps: z.array(z.number()).nullish()
  })
}

export function IdFilterSchema(): z.ZodObject<Properties<IdFilter>> {
  return z.object({
    eq: z.string().nullish()
  })
}

export function IntFilterSchema(): z.ZodObject<Properties<IntFilter>> {
  return z.object({
    eq: z.number().nullish(),
    gt: z.number().nullish(),
    gte: z.number().nullish(),
    in: z.array(z.number()).nullish(),
    is: FilterIsSchema.nullish(),
    lt: z.number().nullish(),
    lte: z.number().nullish(),
    neq: z.number().nullish()
  })
}

export function IntListFilterSchema(): z.ZodObject<Properties<IntListFilter>> {
  return z.object({
    containedBy: z.array(z.number()).nullish(),
    contains: z.array(z.number()).nullish(),
    eq: z.array(z.number()).nullish(),
    is: FilterIsSchema.nullish(),
    overlaps: z.array(z.number()).nullish()
  })
}

export function OpaqueFilterSchema(): z.ZodObject<Properties<OpaqueFilter>> {
  return z.object({
    eq: definedNonNullAnySchema.nullish(),
    is: FilterIsSchema.nullish()
  })
}

export function OrganizationCreateInputSchema(): z.ZodObject<Properties<OrganizationCreateInput>> {
  return z.object({
    name: z.string(),
    profilePicture: z.custom<File>(file => file instanceof File).nullish()
  })
}

export function OrganizationInvitesFilterSchema(): z.ZodObject<Properties<OrganizationInvitesFilter>> {
  return z.object({
    acceptedAt: DatetimeFilterSchema().nullish(),
    and: z.array(OrganizationInvitesFilterSchema()).nullish(),
    createdAt: DatetimeFilterSchema().nullish(),
    createdBy: UuidFilterSchema().nullish(),
    deletedAt: DatetimeFilterSchema().nullish(),
    email: StringFilterSchema().nullish(),
    expiresAt: DatetimeFilterSchema().nullish(),
    id: UuidFilterSchema().nullish(),
    invitedBy: UuidFilterSchema().nullish(),
    nodeId: IdFilterSchema().nullish(),
    not: OrganizationInvitesFilterSchema().nullish(),
    or: z.array(OrganizationInvitesFilterSchema()).nullish(),
    organizationId: UuidFilterSchema().nullish(),
    organizationName: StringFilterSchema().nullish(),
    role: OrganizationRolesFilterSchema().nullish(),
    token: StringFilterSchema().nullish(),
    updatedAt: DatetimeFilterSchema().nullish(),
    updatedBy: UuidFilterSchema().nullish()
  })
}

export function OrganizationInvitesInsertInputSchema(): z.ZodObject<Properties<OrganizationInvitesInsertInput>> {
  return z.object({
    acceptedAt: z.string().nullish(),
    createdAt: z.string().nullish(),
    createdBy: z.string().nullish(),
    deletedAt: z.string().nullish(),
    email: z.string().nullish(),
    expiresAt: z.string().nullish(),
    id: z.string().nullish(),
    invitedBy: z.string().nullish(),
    organizationId: z.string().nullish(),
    organizationName: z.string().nullish(),
    role: OrganizationRolesSchema.nullish(),
    token: z.string().nullish(),
    updatedAt: z.string().nullish(),
    updatedBy: z.string().nullish()
  })
}

export function OrganizationInvitesOrderBySchema(): z.ZodObject<Properties<OrganizationInvitesOrderBy>> {
  return z.object({
    acceptedAt: OrderByDirectionSchema.nullish(),
    createdAt: OrderByDirectionSchema.nullish(),
    createdBy: OrderByDirectionSchema.nullish(),
    deletedAt: OrderByDirectionSchema.nullish(),
    email: OrderByDirectionSchema.nullish(),
    expiresAt: OrderByDirectionSchema.nullish(),
    id: OrderByDirectionSchema.nullish(),
    invitedBy: OrderByDirectionSchema.nullish(),
    organizationId: OrderByDirectionSchema.nullish(),
    organizationName: OrderByDirectionSchema.nullish(),
    role: OrderByDirectionSchema.nullish(),
    token: OrderByDirectionSchema.nullish(),
    updatedAt: OrderByDirectionSchema.nullish(),
    updatedBy: OrderByDirectionSchema.nullish()
  })
}

export function OrganizationInvitesUpdateInputSchema(): z.ZodObject<Properties<OrganizationInvitesUpdateInput>> {
  return z.object({
    acceptedAt: z.string().nullish(),
    createdAt: z.string().nullish(),
    createdBy: z.string().nullish(),
    deletedAt: z.string().nullish(),
    email: z.string().nullish(),
    expiresAt: z.string().nullish(),
    id: z.string().nullish(),
    invitedBy: z.string().nullish(),
    organizationId: z.string().nullish(),
    organizationName: z.string().nullish(),
    role: OrganizationRolesSchema.nullish(),
    token: z.string().nullish(),
    updatedAt: z.string().nullish(),
    updatedBy: z.string().nullish()
  })
}

export function OrganizationMembersFilterSchema(): z.ZodObject<Properties<OrganizationMembersFilter>> {
  return z.object({
    and: z.array(OrganizationMembersFilterSchema()).nullish(),
    createdAt: DatetimeFilterSchema().nullish(),
    createdBy: UuidFilterSchema().nullish(),
    deletedAt: DatetimeFilterSchema().nullish(),
    id: UuidFilterSchema().nullish(),
    nodeId: IdFilterSchema().nullish(),
    not: OrganizationMembersFilterSchema().nullish(),
    or: z.array(OrganizationMembersFilterSchema()).nullish(),
    organizationId: UuidFilterSchema().nullish(),
    profileId: UuidFilterSchema().nullish(),
    role: OrganizationRolesFilterSchema().nullish(),
    updatedAt: DatetimeFilterSchema().nullish(),
    updatedBy: UuidFilterSchema().nullish()
  })
}

export function OrganizationMembersInsertInputSchema(): z.ZodObject<Properties<OrganizationMembersInsertInput>> {
  return z.object({
    createdAt: z.string().nullish(),
    createdBy: z.string().nullish(),
    deletedAt: z.string().nullish(),
    id: z.string().nullish(),
    organizationId: z.string().nullish(),
    profileId: z.string().nullish(),
    role: OrganizationRolesSchema.nullish(),
    updatedAt: z.string().nullish(),
    updatedBy: z.string().nullish()
  })
}

export function OrganizationMembersOrderBySchema(): z.ZodObject<Properties<OrganizationMembersOrderBy>> {
  return z.object({
    createdAt: OrderByDirectionSchema.nullish(),
    createdBy: OrderByDirectionSchema.nullish(),
    deletedAt: OrderByDirectionSchema.nullish(),
    id: OrderByDirectionSchema.nullish(),
    organizationId: OrderByDirectionSchema.nullish(),
    profileId: OrderByDirectionSchema.nullish(),
    role: OrderByDirectionSchema.nullish(),
    updatedAt: OrderByDirectionSchema.nullish(),
    updatedBy: OrderByDirectionSchema.nullish()
  })
}

export function OrganizationMembersUpdateInputSchema(): z.ZodObject<Properties<OrganizationMembersUpdateInput>> {
  return z.object({
    createdAt: z.string().nullish(),
    createdBy: z.string().nullish(),
    deletedAt: z.string().nullish(),
    id: z.string().nullish(),
    organizationId: z.string().nullish(),
    profileId: z.string().nullish(),
    role: OrganizationRolesSchema.nullish(),
    updatedAt: z.string().nullish(),
    updatedBy: z.string().nullish()
  })
}

export function OrganizationRolesFilterSchema(): z.ZodObject<Properties<OrganizationRolesFilter>> {
  return z.object({
    eq: OrganizationRolesSchema.nullish(),
    in: z.array(OrganizationRolesSchema).nullish(),
    is: FilterIsSchema.nullish(),
    neq: OrganizationRolesSchema.nullish()
  })
}

export function OrganizationsFilterSchema(): z.ZodObject<Properties<OrganizationsFilter>> {
  return z.object({
    and: z.array(OrganizationsFilterSchema()).nullish(),
    createdAt: DatetimeFilterSchema().nullish(),
    createdBy: UuidFilterSchema().nullish(),
    deletedAt: DatetimeFilterSchema().nullish(),
    id: UuidFilterSchema().nullish(),
    name: StringFilterSchema().nullish(),
    nodeId: IdFilterSchema().nullish(),
    not: OrganizationsFilterSchema().nullish(),
    or: z.array(OrganizationsFilterSchema()).nullish(),
    profilePictureUrl: StringFilterSchema().nullish(),
    updatedAt: DatetimeFilterSchema().nullish(),
    updatedBy: UuidFilterSchema().nullish()
  })
}

export function OrganizationsInsertInputSchema(): z.ZodObject<Properties<OrganizationsInsertInput>> {
  return z.object({
    createdAt: z.string().nullish(),
    createdBy: z.string().nullish(),
    deletedAt: z.string().nullish(),
    id: z.string().nullish(),
    name: z.string().nullish(),
    profilePictureUrl: z.string().nullish(),
    updatedAt: z.string().nullish(),
    updatedBy: z.string().nullish()
  })
}

export function OrganizationsOrderBySchema(): z.ZodObject<Properties<OrganizationsOrderBy>> {
  return z.object({
    createdAt: OrderByDirectionSchema.nullish(),
    createdBy: OrderByDirectionSchema.nullish(),
    deletedAt: OrderByDirectionSchema.nullish(),
    id: OrderByDirectionSchema.nullish(),
    name: OrderByDirectionSchema.nullish(),
    profilePictureUrl: OrderByDirectionSchema.nullish(),
    updatedAt: OrderByDirectionSchema.nullish(),
    updatedBy: OrderByDirectionSchema.nullish()
  })
}

export function OrganizationsUpdateInputSchema(): z.ZodObject<Properties<OrganizationsUpdateInput>> {
  return z.object({
    createdAt: z.string().nullish(),
    createdBy: z.string().nullish(),
    deletedAt: z.string().nullish(),
    id: z.string().nullish(),
    name: z.string().nullish(),
    profilePictureUrl: z.string().nullish(),
    updatedAt: z.string().nullish(),
    updatedBy: z.string().nullish()
  })
}

export function ProfileUpdateInputSchema(): z.ZodObject<Properties<ProfileUpdateInput>> {
  return z.object({
    firstName: z.string().nullish(),
    lastName: z.string().nullish(),
    phoneNumber: z.string().nullish(),
    profilePicture: z.custom<File>(file => file instanceof File).nullish()
  })
}

export function ProfilesFilterSchema(): z.ZodObject<Properties<ProfilesFilter>> {
  return z.object({
    and: z.array(ProfilesFilterSchema()).nullish(),
    createdAt: DatetimeFilterSchema().nullish(),
    createdBy: UuidFilterSchema().nullish(),
    deletedAt: DatetimeFilterSchema().nullish(),
    email: StringFilterSchema().nullish(),
    firstName: StringFilterSchema().nullish(),
    id: UuidFilterSchema().nullish(),
    lastName: StringFilterSchema().nullish(),
    nodeId: IdFilterSchema().nullish(),
    not: ProfilesFilterSchema().nullish(),
    or: z.array(ProfilesFilterSchema()).nullish(),
    phoneNumber: StringFilterSchema().nullish(),
    profilePictureUrl: StringFilterSchema().nullish(),
    updatedAt: DatetimeFilterSchema().nullish(),
    updatedBy: UuidFilterSchema().nullish()
  })
}

export function ProfilesInsertInputSchema(): z.ZodObject<Properties<ProfilesInsertInput>> {
  return z.object({
    createdAt: z.string().nullish(),
    createdBy: z.string().nullish(),
    deletedAt: z.string().nullish(),
    email: z.string().nullish(),
    firstName: z.string().nullish(),
    id: z.string().nullish(),
    lastName: z.string().nullish(),
    phoneNumber: z.string().nullish(),
    profilePictureUrl: z.string().nullish(),
    updatedAt: z.string().nullish(),
    updatedBy: z.string().nullish()
  })
}

export function ProfilesOrderBySchema(): z.ZodObject<Properties<ProfilesOrderBy>> {
  return z.object({
    createdAt: OrderByDirectionSchema.nullish(),
    createdBy: OrderByDirectionSchema.nullish(),
    deletedAt: OrderByDirectionSchema.nullish(),
    email: OrderByDirectionSchema.nullish(),
    firstName: OrderByDirectionSchema.nullish(),
    id: OrderByDirectionSchema.nullish(),
    lastName: OrderByDirectionSchema.nullish(),
    phoneNumber: OrderByDirectionSchema.nullish(),
    profilePictureUrl: OrderByDirectionSchema.nullish(),
    updatedAt: OrderByDirectionSchema.nullish(),
    updatedBy: OrderByDirectionSchema.nullish()
  })
}

export function ProfilesUpdateInputSchema(): z.ZodObject<Properties<ProfilesUpdateInput>> {
  return z.object({
    createdAt: z.string().nullish(),
    createdBy: z.string().nullish(),
    deletedAt: z.string().nullish(),
    email: z.string().nullish(),
    firstName: z.string().nullish(),
    id: z.string().nullish(),
    lastName: z.string().nullish(),
    phoneNumber: z.string().nullish(),
    profilePictureUrl: z.string().nullish(),
    updatedAt: z.string().nullish(),
    updatedBy: z.string().nullish()
  })
}

export function StringFilterSchema(): z.ZodObject<Properties<StringFilter>> {
  return z.object({
    eq: z.string().nullish(),
    gt: z.string().nullish(),
    gte: z.string().nullish(),
    ilike: z.string().nullish(),
    in: z.array(z.string()).nullish(),
    iregex: z.string().nullish(),
    is: FilterIsSchema.nullish(),
    like: z.string().nullish(),
    lt: z.string().nullish(),
    lte: z.string().nullish(),
    neq: z.string().nullish(),
    regex: z.string().nullish(),
    startsWith: z.string().nullish()
  })
}

export function StringListFilterSchema(): z.ZodObject<Properties<StringListFilter>> {
  return z.object({
    containedBy: z.array(z.string()).nullish(),
    contains: z.array(z.string()).nullish(),
    eq: z.array(z.string()).nullish(),
    is: FilterIsSchema.nullish(),
    overlaps: z.array(z.string()).nullish()
  })
}

export function TimeFilterSchema(): z.ZodObject<Properties<TimeFilter>> {
  return z.object({
    eq: z.string().nullish(),
    gt: z.string().nullish(),
    gte: z.string().nullish(),
    in: z.array(z.string()).nullish(),
    is: FilterIsSchema.nullish(),
    lt: z.string().nullish(),
    lte: z.string().nullish(),
    neq: z.string().nullish()
  })
}

export function TimeListFilterSchema(): z.ZodObject<Properties<TimeListFilter>> {
  return z.object({
    containedBy: z.array(z.string()).nullish(),
    contains: z.array(z.string()).nullish(),
    eq: z.array(z.string()).nullish(),
    is: FilterIsSchema.nullish(),
    overlaps: z.array(z.string()).nullish()
  })
}

export function UuidFilterSchema(): z.ZodObject<Properties<UuidFilter>> {
  return z.object({
    eq: z.string().nullish(),
    in: z.array(z.string()).nullish(),
    is: FilterIsSchema.nullish(),
    neq: z.string().nullish()
  })
}

export function UuidListFilterSchema(): z.ZodObject<Properties<UuidListFilter>> {
  return z.object({
    containedBy: z.array(z.string()).nullish(),
    contains: z.array(z.string()).nullish(),
    eq: z.array(z.string()).nullish(),
    is: FilterIsSchema.nullish(),
    overlaps: z.array(z.string()).nullish()
  })
}
