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
  /** A date without time information */
  Date: { input: string; output: string; }
  /** A date and time */
  Datetime: { input: string; output: string; }
  File: { input: any; output: any; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: string; output: string; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: string; output: string; }
  UUID: { input: string; output: string; }
};

export type AiChatMessages = Node & {
  __typename?: 'AiChatMessages';
  annotations?: Maybe<Scalars['JSON']['output']>;
  attachments?: Maybe<Scalars['JSON']['output']>;
  chat?: Maybe<AiChats>;
  chatId: Scalars['UUID']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['Datetime']['output'];
  createdBy: Scalars['UUID']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  parts: Scalars['JSON']['output'];
  profiles?: Maybe<Profiles>;
  role: MessageRoles;
  updatedAt: Scalars['Datetime']['output'];
  updatedBy: Scalars['UUID']['output'];
};

export type AiChatMessagesConnection = {
  __typename?: 'AiChatMessagesConnection';
  edges: Array<AiChatMessagesEdge>;
  pageInfo: PageInfo;
};

export type AiChatMessagesDeleteResponse = {
  __typename?: 'AiChatMessagesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AiChatMessages>;
};

export type AiChatMessagesEdge = {
  __typename?: 'AiChatMessagesEdge';
  cursor: Scalars['String']['output'];
  node: AiChatMessages;
};

export type AiChatMessagesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AiChatMessagesFilter>>;
  chatId?: InputMaybe<UuidFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  createdBy?: InputMaybe<UuidFilter>;
  deletedAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<AiChatMessagesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AiChatMessagesFilter>>;
  role?: InputMaybe<MessageRolesFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  updatedBy?: InputMaybe<UuidFilter>;
};

export type AiChatMessagesInsertInput = {
  annotations?: InputMaybe<Scalars['JSON']['input']>;
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  chatId?: InputMaybe<Scalars['UUID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['UUID']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  parts?: InputMaybe<Scalars['JSON']['input']>;
  role?: InputMaybe<MessageRoles>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['UUID']['input']>;
};

export type AiChatMessagesInsertResponse = {
  __typename?: 'AiChatMessagesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AiChatMessages>;
};

export type AiChatMessagesOrderBy = {
  chatId?: InputMaybe<OrderByDirection>;
  content?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  createdBy?: InputMaybe<OrderByDirection>;
  deletedAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  role?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  updatedBy?: InputMaybe<OrderByDirection>;
};

export type AiChatMessagesUpdateInput = {
  annotations?: InputMaybe<Scalars['JSON']['input']>;
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  chatId?: InputMaybe<Scalars['UUID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['UUID']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  parts?: InputMaybe<Scalars['JSON']['input']>;
  role?: InputMaybe<MessageRoles>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['UUID']['input']>;
};

export type AiChatMessagesUpdateResponse = {
  __typename?: 'AiChatMessagesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AiChatMessages>;
};

export type AiChats = Node & {
  __typename?: 'AiChats';
  aiChatMessagesCollection?: Maybe<AiChatMessagesConnection>;
  component?: Maybe<Components>;
  componentId?: Maybe<Scalars['UUID']['output']>;
  createdAt: Scalars['Datetime']['output'];
  createdBy: Scalars['UUID']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  profiles?: Maybe<Profiles>;
  project?: Maybe<Projects>;
  projectId?: Maybe<Scalars['UUID']['output']>;
  updatedAt: Scalars['Datetime']['output'];
  updatedBy: Scalars['UUID']['output'];
};


export type AiChatsAiChatMessagesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AiChatMessagesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AiChatMessagesOrderBy>>;
};

export type AiChatsConnection = {
  __typename?: 'AiChatsConnection';
  edges: Array<AiChatsEdge>;
  pageInfo: PageInfo;
};

export type AiChatsDeleteResponse = {
  __typename?: 'AiChatsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AiChats>;
};

export type AiChatsEdge = {
  __typename?: 'AiChatsEdge';
  cursor: Scalars['String']['output'];
  node: AiChats;
};

export type AiChatsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AiChatsFilter>>;
  componentId?: InputMaybe<UuidFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  createdBy?: InputMaybe<UuidFilter>;
  deletedAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<AiChatsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AiChatsFilter>>;
  projectId?: InputMaybe<UuidFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  updatedBy?: InputMaybe<UuidFilter>;
};

export type AiChatsInsertInput = {
  componentId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['UUID']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['UUID']['input']>;
};

export type AiChatsInsertResponse = {
  __typename?: 'AiChatsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AiChats>;
};

export type AiChatsOrderBy = {
  componentId?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  createdBy?: InputMaybe<OrderByDirection>;
  deletedAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  projectId?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  updatedBy?: InputMaybe<OrderByDirection>;
};

export type AiChatsUpdateInput = {
  componentId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['UUID']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['UUID']['input']>;
};

export type AiChatsUpdateResponse = {
  __typename?: 'AiChatsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AiChats>;
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

export type Components = Node & {
  __typename?: 'Components';
  aiChatsCollection?: Maybe<AiChatsConnection>;
  createdAt: Scalars['Datetime']['output'];
  createdBy: Scalars['UUID']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  profiles?: Maybe<Profiles>;
  project?: Maybe<Projects>;
  projectId: Scalars['UUID']['output'];
  updatedAt: Scalars['Datetime']['output'];
  updatedBy: Scalars['UUID']['output'];
};


export type ComponentsAiChatsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AiChatsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AiChatsOrderBy>>;
};

export type ComponentsConnection = {
  __typename?: 'ComponentsConnection';
  edges: Array<ComponentsEdge>;
  pageInfo: PageInfo;
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output'];
};

export type ComponentsDeleteResponse = {
  __typename?: 'ComponentsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Components>;
};

export type ComponentsEdge = {
  __typename?: 'ComponentsEdge';
  cursor: Scalars['String']['output'];
  node: Components;
};

export type ComponentsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ComponentsFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  createdBy?: InputMaybe<UuidFilter>;
  deletedAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ComponentsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ComponentsFilter>>;
  projectId?: InputMaybe<UuidFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  updatedBy?: InputMaybe<UuidFilter>;
};

export type ComponentsInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['UUID']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['UUID']['input']>;
};

export type ComponentsInsertResponse = {
  __typename?: 'ComponentsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Components>;
};

export type ComponentsOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  createdBy?: InputMaybe<OrderByDirection>;
  deletedAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  projectId?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  updatedBy?: InputMaybe<OrderByDirection>;
};

export type ComponentsUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['UUID']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['UUID']['input']>;
};

export type ComponentsUpdateResponse = {
  __typename?: 'ComponentsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Components>;
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

export type MessagePartTypes =
  | 'reasoning'
  | 'text'
  | 'tool_invocation';

/** Boolean expression comparing fields on type "MessagePartTypes" */
export type MessagePartTypesFilter = {
  eq?: InputMaybe<MessagePartTypes>;
  in?: InputMaybe<Array<MessagePartTypes>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<MessagePartTypes>;
};

export type MessageRoles =
  | 'assistant'
  | 'data'
  | 'system'
  | 'user';

/** Boolean expression comparing fields on type "MessageRoles" */
export type MessageRolesFilter = {
  eq?: InputMaybe<MessageRoles>;
  in?: InputMaybe<Array<MessageRoles>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<MessageRoles>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuditTrigger?: Maybe<Scalars['Opaque']['output']>;
  createDeleteTrigger?: Maybe<Scalars['Opaque']['output']>;
  /** Deletes zero or more records from the `AiChatMessages` collection */
  deleteFromAiChatMessagesCollection: AiChatMessagesDeleteResponse;
  /** Deletes zero or more records from the `AiChats` collection */
  deleteFromAiChatsCollection: AiChatsDeleteResponse;
  /** Deletes zero or more records from the `Components` collection */
  deleteFromComponentsCollection: ComponentsDeleteResponse;
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
  /** Deletes zero or more records from the `Projects` collection */
  deleteFromProjectsCollection: ProjectsDeleteResponse;
  /** Adds one or more `AiChatMessages` records to the collection */
  insertIntoAiChatMessagesCollection?: Maybe<AiChatMessagesInsertResponse>;
  /** Adds one or more `AiChats` records to the collection */
  insertIntoAiChatsCollection?: Maybe<AiChatsInsertResponse>;
  /** Adds one or more `Components` records to the collection */
  insertIntoComponentsCollection?: Maybe<ComponentsInsertResponse>;
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
  /** Adds one or more `Projects` records to the collection */
  insertIntoProjectsCollection?: Maybe<ProjectsInsertResponse>;
  organizationCreate?: Maybe<OrganizationCreateResult>;
  profileUpdate?: Maybe<ProfileUpdateResult>;
  /** Updates zero or more records in the `AiChatMessages` collection */
  updateAiChatMessagesCollection: AiChatMessagesUpdateResponse;
  /** Updates zero or more records in the `AiChats` collection */
  updateAiChatsCollection: AiChatsUpdateResponse;
  /** Updates zero or more records in the `Components` collection */
  updateComponentsCollection: ComponentsUpdateResponse;
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
  /** Updates zero or more records in the `Projects` collection */
  updateProjectsCollection: ProjectsUpdateResponse;
};


export type MutationCreateAuditTriggerArgs = {
  targetTableName: Scalars['String']['input'];
};


export type MutationCreateDeleteTriggerArgs = {
  targetTableName: Scalars['String']['input'];
};


export type MutationDeleteFromAiChatMessagesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AiChatMessagesFilter>;
};


export type MutationDeleteFromAiChatsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AiChatsFilter>;
};


export type MutationDeleteFromComponentsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ComponentsFilter>;
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


export type MutationDeleteFromProjectsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjectsFilter>;
};


export type MutationInsertIntoAiChatMessagesCollectionArgs = {
  objects: Array<AiChatMessagesInsertInput>;
};


export type MutationInsertIntoAiChatsCollectionArgs = {
  objects: Array<AiChatsInsertInput>;
};


export type MutationInsertIntoComponentsCollectionArgs = {
  objects: Array<ComponentsInsertInput>;
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


export type MutationInsertIntoProjectsCollectionArgs = {
  objects: Array<ProjectsInsertInput>;
};


export type MutationOrganizationCreateArgs = {
  input: OrganizationCreateInput;
};


export type MutationProfileUpdateArgs = {
  input: ProfileUpdateInput;
};


export type MutationUpdateAiChatMessagesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AiChatMessagesFilter>;
  set: AiChatMessagesUpdateInput;
};


export type MutationUpdateAiChatsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AiChatsFilter>;
  set: AiChatsUpdateInput;
};


export type MutationUpdateComponentsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ComponentsFilter>;
  set: ComponentsUpdateInput;
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


export type MutationUpdateProjectsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjectsFilter>;
  set: ProjectsUpdateInput;
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
  profiles?: Maybe<Profiles>;
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
  organizationInvitesCollection?: Maybe<OrganizationInvitesConnection>;
  organizationMembersCollection?: Maybe<OrganizationMembersConnection>;
  profilePictureUrl?: Maybe<Scalars['String']['output']>;
  profiles?: Maybe<Profiles>;
  projectsCollection?: Maybe<ProjectsConnection>;
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


export type OrganizationsProjectsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjectsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
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
  aiChatMessagesCollection?: Maybe<AiChatMessagesConnection>;
  aiChatsCollection?: Maybe<AiChatsConnection>;
  componentsCollection?: Maybe<ComponentsConnection>;
  createdAt: Scalars['Datetime']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  organizationInvitesCollection?: Maybe<OrganizationInvitesConnection>;
  organizationMembersCollection?: Maybe<OrganizationMembersConnection>;
  organizationsCollection?: Maybe<OrganizationsConnection>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  profilePictureUrl?: Maybe<Scalars['String']['output']>;
  projectsCollection?: Maybe<ProjectsConnection>;
  updatedAt: Scalars['Datetime']['output'];
};


export type ProfilesAiChatMessagesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AiChatMessagesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AiChatMessagesOrderBy>>;
};


export type ProfilesAiChatsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AiChatsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AiChatsOrderBy>>;
};


export type ProfilesComponentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ComponentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ComponentsOrderBy>>;
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


export type ProfilesOrganizationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrganizationsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
};


export type ProfilesProjectsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjectsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
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
};

export type ProfilesInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  profilePictureUrl?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
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
  email?: InputMaybe<OrderByDirection>;
  firstName?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  lastName?: InputMaybe<OrderByDirection>;
  phoneNumber?: InputMaybe<OrderByDirection>;
  profilePictureUrl?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type ProfilesUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  profilePictureUrl?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ProfilesUpdateResponse = {
  __typename?: 'ProfilesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type Projects = Node & {
  __typename?: 'Projects';
  aiChatsCollection?: Maybe<AiChatsConnection>;
  componentsCollection?: Maybe<ComponentsConnection>;
  createdAt: Scalars['Datetime']['output'];
  createdBy: Scalars['UUID']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  organization?: Maybe<Organizations>;
  organizationId?: Maybe<Scalars['UUID']['output']>;
  profile?: Maybe<Profiles>;
  profileId?: Maybe<Scalars['UUID']['output']>;
  profiles?: Maybe<Profiles>;
  updatedAt: Scalars['Datetime']['output'];
  updatedBy: Scalars['UUID']['output'];
};


export type ProjectsAiChatsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AiChatsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AiChatsOrderBy>>;
};


export type ProjectsComponentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ComponentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ComponentsOrderBy>>;
};

export type ProjectsConnection = {
  __typename?: 'ProjectsConnection';
  edges: Array<ProjectsEdge>;
  pageInfo: PageInfo;
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output'];
};

export type ProjectsDeleteResponse = {
  __typename?: 'ProjectsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Projects>;
};

export type ProjectsEdge = {
  __typename?: 'ProjectsEdge';
  cursor: Scalars['String']['output'];
  node: Projects;
};

export type ProjectsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjectsFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  createdBy?: InputMaybe<UuidFilter>;
  deletedAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProjectsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjectsFilter>>;
  organizationId?: InputMaybe<UuidFilter>;
  profileId?: InputMaybe<UuidFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  updatedBy?: InputMaybe<UuidFilter>;
};

export type ProjectsInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['UUID']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  profileId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['UUID']['input']>;
};

export type ProjectsInsertResponse = {
  __typename?: 'ProjectsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Projects>;
};

export type ProjectsOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  createdBy?: InputMaybe<OrderByDirection>;
  deletedAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  organizationId?: InputMaybe<OrderByDirection>;
  profileId?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  updatedBy?: InputMaybe<OrderByDirection>;
};

export type ProjectsUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['UUID']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  profileId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['UUID']['input']>;
};

export type ProjectsUpdateResponse = {
  __typename?: 'ProjectsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Projects>;
};

export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `AiChatMessages` */
  aiChatMessagesCollection?: Maybe<AiChatMessagesConnection>;
  /** A pagable collection of type `AiChats` */
  aiChatsCollection?: Maybe<AiChatsConnection>;
  /** A pagable collection of type `Components` */
  componentsCollection?: Maybe<ComponentsConnection>;
  /** A pagable collection of type `DeletedRecord` */
  deletedRecordCollection?: Maybe<DeletedRecordConnection>;
  isOrgManager?: Maybe<Scalars['Boolean']['output']>;
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
  /** A pagable collection of type `Projects` */
  projectsCollection?: Maybe<ProjectsConnection>;
  viewer?: Maybe<Profiles>;
};


export type QueryAiChatMessagesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AiChatMessagesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AiChatMessagesOrderBy>>;
};


export type QueryAiChatsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AiChatsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AiChatsOrderBy>>;
};


export type QueryComponentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ComponentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ComponentsOrderBy>>;
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


export type QueryIsOrgManagerArgs = {
  organizationId: Scalars['UUID']['input'];
  profileId: Scalars['UUID']['input'];
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


export type QueryProjectsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjectsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
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

export type ToolInvocationStates =
  | 'call'
  | 'partial_call'
  | 'result';

/** Boolean expression comparing fields on type "ToolInvocationStates" */
export type ToolInvocationStatesFilter = {
  eq?: InputMaybe<ToolInvocationStates>;
  in?: InputMaybe<Array<ToolInvocationStates>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<ToolInvocationStates>;
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

export type ComponentEditorPageQueryQueryVariables = Exact<{
  componentId: Scalars['UUID']['input'];
}>;


export type ComponentEditorPageQueryQuery = { __typename: 'Query', componentsCollection?: { __typename: 'ComponentsConnection', edges: Array<{ __typename: 'ComponentsEdge', node: { __typename: 'Components', id: string, name: string, aiChatsCollection?: { __typename: 'AiChatsConnection', edges: Array<{ __typename: 'AiChatsEdge', node: (
              { __typename: 'AiChats', id: string }
              & { ' $fragmentRefs'?: { 'ComponentChatFragmentFragment': ComponentChatFragmentFragment } }
            ) }> } | null } }> } | null };

export type ComponentEditorQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type ComponentEditorQuery = { __typename: 'Query', projectsCollection?: { __typename: 'ProjectsConnection', edges: Array<{ __typename: 'ProjectsEdge', node: (
        { __typename: 'Projects', id: string }
        & { ' $fragmentRefs'?: { 'ComponentsListFragmentFragment': ComponentsListFragmentFragment } }
      ) }> } | null };

export type GetInviteDetailsQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type GetInviteDetailsQuery = { __typename: 'Query', organizationInvitesCollection?: { __typename: 'OrganizationInvitesConnection', edges: Array<{ __typename: 'OrganizationInvitesEdge', node: { __typename: 'OrganizationInvites', id: string, email: string, role: OrganizationRoles, organizationName: string } }> } | null };

export type AiChatMessageFragmentFragment = { __typename: 'AiChatMessages', id: string, content: string, role: MessageRoles } & { ' $fragmentName'?: 'AiChatMessageFragmentFragment' };

export type AuthenticationQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthenticationQueryQuery = { __typename: 'Query', viewer?: { __typename: 'Profiles', id: string, email: string, firstName?: string | null, lastName?: string | null, phoneNumber?: string | null, createdAt: string, updatedAt: string } | null };

export type ComponentChatFragmentFragment = { __typename: 'AiChats', id: string, aiChatMessagesCollection?: { __typename: 'AiChatMessagesConnection', edges: Array<{ __typename: 'AiChatMessagesEdge', node: { __typename: 'AiChatMessages', id: string, content: string, role: MessageRoles } }> } | null } & { ' $fragmentName'?: 'ComponentChatFragmentFragment' };

export type CreateComponentMutationVariables = Exact<{
  input: ComponentsInsertInput;
}>;


export type CreateComponentMutation = { __typename: 'Mutation', insertIntoComponentsCollection?: { __typename: 'ComponentsInsertResponse', records: Array<{ __typename: 'Components', id: string, name: string, projectId: string }> } | null };

export type ComponentsListFragmentFragment = { __typename: 'Projects', id: string, componentsCollection?: { __typename: 'ComponentsConnection', edges: Array<{ __typename: 'ComponentsEdge', node: { __typename: 'Components', id: string, name: string } }> } | null } & { ' $fragmentName'?: 'ComponentsListFragmentFragment' };

export type OrganizationsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type OrganizationsQueryQuery = { __typename: 'Query', organizationsCollection?: { __typename: 'OrganizationsConnection', edges: Array<{ __typename: 'OrganizationsEdge', node: { __typename: 'Organizations', id: string, name: string, profilePictureUrl?: string | null } }> } | null };

export type OrganizationFormFragmentFragment = { __typename: 'Organizations', id: string, name: string, profilePictureUrl?: string | null } & { ' $fragmentName'?: 'OrganizationFormFragmentFragment' };

export type CreateOrganizationMutationVariables = Exact<{
  name: Scalars['String']['input'];
  profilePicture?: InputMaybe<Scalars['File']['input']>;
}>;


export type CreateOrganizationMutation = { __typename: 'Mutation', organizationCreate?: { __typename: 'OrganizationCreateResult', id: string, name: string, profilePictureUrl?: string | null } | null };

export type UpdateOrganizationMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  name: Scalars['String']['input'];
}>;


export type UpdateOrganizationMutation = { __typename: 'Mutation', updateOrganizationsCollection: { __typename: 'OrganizationsUpdateResponse', records: Array<(
      { __typename: 'Organizations' }
      & { ' $fragmentRefs'?: { 'OrganizationFormFragmentFragment': OrganizationFormFragmentFragment } }
    )> } };

export type OrganizationsIdSetQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type OrganizationsIdSetQueryQuery = { __typename: 'Query', organizationsCollection?: { __typename: 'OrganizationsConnection', edges: Array<{ __typename: 'OrganizationsEdge', node: { __typename: 'Organizations', id: string } }> } | null };

export type ProfilesFormFragmentFragment = { __typename: 'Profiles', id: string, firstName?: string | null, lastName?: string | null, phoneNumber?: string | null, profilePictureUrl?: string | null } & { ' $fragmentName'?: 'ProfilesFormFragmentFragment' };

export type UpdateProfileMutationVariables = Exact<{
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Scalars['File']['input']>;
}>;


export type UpdateProfileMutation = { __typename: 'Mutation', profileUpdate?: { __typename: 'ProfileUpdateResult', id: string, firstName?: string | null, lastName?: string | null, phoneNumber?: string | null, profilePictureUrl?: string | null } | null };

export type ProfilesMenuQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfilesMenuQueryQuery = { __typename: 'Query', viewer?: { __typename: 'Profiles', id: string, email: string, firstName?: string | null, lastName?: string | null, profilePictureUrl?: string | null } | null };

export type ProjectsQueryQueryVariables = Exact<{
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  profileId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type ProjectsQueryQuery = { __typename: 'Query', projectsCollection?: { __typename: 'ProjectsConnection', edges: Array<{ __typename: 'ProjectsEdge', node: { __typename: 'Projects', id: string, name: string } }> } | null };

export type CreateProjectMutationVariables = Exact<{
  input: ProjectsInsertInput;
}>;


export type CreateProjectMutation = { __typename: 'Mutation', insertIntoProjectsCollection?: { __typename: 'ProjectsInsertResponse', records: Array<{ __typename: 'Projects', id: string, name: string, organizationId?: string | null, profileId?: string | null }> } | null };

export type ProjectsIdSetQueryQueryVariables = Exact<{
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  profileId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type ProjectsIdSetQueryQuery = { __typename: 'Query', projectsCollection?: { __typename: 'ProjectsConnection', edges: Array<{ __typename: 'ProjectsEdge', node: { __typename: 'Projects', id: string } }> } | null };

export type ComponentsCollectionFragmentFragment = { __typename: 'Projects', componentsCollection?: { __typename: 'ComponentsConnection', edges: Array<{ __typename: 'ComponentsEdge', node: { __typename: 'Components', id: string, name: string } }> } | null } & { ' $fragmentName'?: 'ComponentsCollectionFragmentFragment' };

export type OnboardingMiddlewareQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type OnboardingMiddlewareQueryQuery = { __typename: 'Query', viewer?: { __typename: 'Profiles', id: string, firstName?: string | null, lastName?: string | null, phoneNumber?: string | null, organizationMembersCollection?: { __typename: 'OrganizationMembersConnection', edges: Array<{ __typename: 'OrganizationMembersEdge', node: { __typename: 'OrganizationMembers', organization?: { __typename: 'Organizations', id: string, name: string } | null } }> } | null } | null };

export const AiChatMessageFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AiChatMessageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AiChatMessages"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]} as unknown as DocumentNode<AiChatMessageFragmentFragment, unknown>;
export const ComponentChatFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ComponentChatFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AiChats"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"aiChatMessagesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ComponentChatFragmentFragment, unknown>;
export const ComponentsListFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ComponentsListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Projects"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"componentsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ComponentsListFragmentFragment, unknown>;
export const OrganizationFormFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationFormFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organizations"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profilePictureUrl"}}]}}]} as unknown as DocumentNode<OrganizationFormFragmentFragment, unknown>;
export const ProfilesFormFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfilesFormFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Profiles"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"profilePictureUrl"}}]}}]} as unknown as DocumentNode<ProfilesFormFragmentFragment, unknown>;
export const ComponentsCollectionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ComponentsCollectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Projects"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"componentsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ComponentsCollectionFragmentFragment, unknown>;
export const ComponentEditorPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ComponentEditorPageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"componentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"componentsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"componentId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"aiChatsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ComponentChatFragment"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ComponentChatFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AiChats"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"aiChatMessagesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ComponentEditorPageQueryQuery, ComponentEditorPageQueryQueryVariables>;
export const ComponentEditorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ComponentEditor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"projectsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ComponentsListFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ComponentsListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Projects"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"componentsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ComponentEditorQuery, ComponentEditorQueryVariables>;
export const GetInviteDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInviteDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"organizationInvitesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"token"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetInviteDetailsQuery, GetInviteDetailsQueryVariables>;
export const AuthenticationQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AuthenticationQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<AuthenticationQueryQuery, AuthenticationQueryQueryVariables>;
export const CreateComponentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateComponent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentsInsertInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"insertIntoComponentsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"input"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}}]}}]}}]}}]} as unknown as DocumentNode<CreateComponentMutation, CreateComponentMutationVariables>;
export const OrganizationsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OrganizationsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"organizationsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profilePictureUrl"}}]}}]}}]}}]}}]} as unknown as DocumentNode<OrganizationsQueryQuery, OrganizationsQueryQueryVariables>;
export const CreateOrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOrganization"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profilePicture"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"File"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"organizationCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"profilePicture"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profilePicture"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profilePictureUrl"}}]}}]}}]} as unknown as DocumentNode<CreateOrganizationMutation, CreateOrganizationMutationVariables>;
export const UpdateOrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOrganization"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"updateOrganizationsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationFormFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationFormFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organizations"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profilePictureUrl"}}]}}]} as unknown as DocumentNode<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>;
export const OrganizationsIdSetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OrganizationsIdSetQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"organizationsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<OrganizationsIdSetQueryQuery, OrganizationsIdSetQueryQueryVariables>;
export const UpdateProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profilePicture"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"File"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"profileUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"phoneNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"profilePicture"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profilePicture"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"profilePictureUrl"}}]}}]}}]} as unknown as DocumentNode<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const ProfilesMenuQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProfilesMenuQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"profilePictureUrl"}}]}}]}}]} as unknown as DocumentNode<ProfilesMenuQueryQuery, ProfilesMenuQueryQueryVariables>;
export const ProjectsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProjectsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"projectsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"profileId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProjectsQueryQuery, ProjectsQueryQueryVariables>;
export const CreateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectsInsertInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"insertIntoProjectsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"input"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"organizationId"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}}]}}]}}]}}]} as unknown as DocumentNode<CreateProjectMutation, CreateProjectMutationVariables>;
export const ProjectsIdSetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProjectsIdSetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"projectsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"profileId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProjectsIdSetQueryQuery, ProjectsIdSetQueryQueryVariables>;
export const OnboardingMiddlewareQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OnboardingMiddlewareQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"organizationMembersCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<OnboardingMiddlewareQueryQuery, OnboardingMiddlewareQueryQueryVariables>;