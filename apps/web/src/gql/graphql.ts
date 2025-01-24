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
  /** A high precision floating point value represented as a string */
  BigFloat: { input: string; output: string; }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: string; output: string; }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any; }
  /** A date wihout time information */
  Date: { input: string; output: string; }
  /** A date and time */
  Datetime: { input: string; output: string; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: string; output: string; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: string; output: string; }
  /** A universally unique identifier */
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

export type FilterIs =
  | 'NOT_NULL'
  | 'NULL';

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
  createOrganization?: Maybe<Organization>;
  /** Deletes zero or more records from the `OrganizationMembers` collection */
  deleteFromOrganizationMembersCollection: OrganizationMembersDeleteResponse;
  /** Deletes zero or more records from the `Organizations` collection */
  deleteFromOrganizationsCollection: OrganizationsDeleteResponse;
  /** Deletes zero or more records from the `Profiles` collection */
  deleteFromProfilesCollection: ProfilesDeleteResponse;
  /** Adds one or more `OrganizationMembers` records to the collection */
  insertIntoOrganizationMembersCollection?: Maybe<OrganizationMembersInsertResponse>;
  /** Adds one or more `Organizations` records to the collection */
  insertIntoOrganizationsCollection?: Maybe<OrganizationsInsertResponse>;
  /** Adds one or more `Profiles` records to the collection */
  insertIntoProfilesCollection?: Maybe<ProfilesInsertResponse>;
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


export type MutationCreateOrganizationArgs = {
  name: Scalars['String']['input'];
  website?: InputMaybe<Scalars['String']['input']>;
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


export type MutationInsertIntoOrganizationMembersCollectionArgs = {
  objects: Array<OrganizationMembersInsertInput>;
};


export type MutationInsertIntoOrganizationsCollectionArgs = {
  objects: Array<OrganizationsInsertInput>;
};


export type MutationInsertIntoProfilesCollectionArgs = {
  objects: Array<ProfilesInsertInput>;
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
export type OrderByDirection =
  /** Ascending order, nulls first */
  | 'AscNullsFirst'
  /** Ascending order, nulls last */
  | 'AscNullsLast'
  /** Descending order, nulls first */
  | 'DescNullsFirst'
  /** Descending order, nulls last */
  | 'DescNullsLast';

export type Organization = {
  __typename?: 'Organization';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
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
  role: OrganizationRoles;
  updatedAt: Scalars['Datetime']['output'];
  updatedBy: Scalars['UUID']['output'];
  user?: Maybe<Profiles>;
  userId?: Maybe<Scalars['UUID']['output']>;
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
  role?: InputMaybe<OrganizationRolesFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  updatedBy?: InputMaybe<UuidFilter>;
  userId?: InputMaybe<UuidFilter>;
};

export type OrganizationMembersInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['UUID']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  role?: InputMaybe<OrganizationRoles>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['UUID']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
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
  role?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  updatedBy?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type OrganizationMembersUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['UUID']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  role?: InputMaybe<OrganizationRoles>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['UUID']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type OrganizationMembersUpdateResponse = {
  __typename?: 'OrganizationMembersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<OrganizationMembers>;
};

export type OrganizationRoles =
  | 'Administrator'
  | 'Member'
  | 'Owner';

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
  organizationMembersCollection?: Maybe<OrganizationMembersConnection>;
  updatedAt: Scalars['Datetime']['output'];
  updatedBy: Scalars['UUID']['output'];
  website?: Maybe<Scalars['String']['output']>;
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
  updatedAt?: InputMaybe<DatetimeFilter>;
  updatedBy?: InputMaybe<UuidFilter>;
  website?: InputMaybe<StringFilter>;
};

export type OrganizationsInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['UUID']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['UUID']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
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
  updatedAt?: InputMaybe<OrderByDirection>;
  updatedBy?: InputMaybe<OrderByDirection>;
  website?: InputMaybe<OrderByDirection>;
};

export type OrganizationsUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['UUID']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['UUID']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
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
  organizationMembersCollection?: Maybe<OrganizationMembersConnection>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Datetime']['output'];
  updatedBy: Scalars['UUID']['output'];
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
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `OrganizationMembers` */
  organizationMembersCollection?: Maybe<OrganizationMembersConnection>;
  /** A pagable collection of type `Organizations` */
  organizationsCollection?: Maybe<OrganizationsConnection>;
  placeholder?: Maybe<Scalars['String']['output']>;
  /** A pagable collection of type `Profiles` */
  profilesCollection?: Maybe<ProfilesConnection>;
  viewer?: Maybe<Profiles>;
};


export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
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

export type AuthenticatedUserQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthenticatedUserQueryQuery = { __typename: 'Query', viewer?: { __typename: 'Profiles', id: string, email: string, firstName?: string | null, lastName?: string | null, phoneNumber?: string | null, createdAt: string, updatedAt: string, deletedAt?: string | null } | null };

export type OnboardingMiddlewareQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type OnboardingMiddlewareQueryQuery = { __typename: 'Query', viewer?: { __typename: 'Profiles', id: string, firstName?: string | null, lastName?: string | null, phoneNumber?: string | null, organizationMembersCollection?: { __typename: 'OrganizationMembersConnection', edges: Array<{ __typename: 'OrganizationMembersEdge', node: { __typename: 'OrganizationMembers', organization?: { __typename: 'Organizations', id: string, name: string } | null } }> } | null } | null };


export const AuthenticatedUserQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AuthenticatedUserQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]} as unknown as DocumentNode<AuthenticatedUserQueryQuery, AuthenticatedUserQueryQueryVariables>;
export const OnboardingMiddlewareQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OnboardingMiddlewareQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"organizationMembersCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<OnboardingMiddlewareQueryQuery, OnboardingMiddlewareQueryQueryVariables>;