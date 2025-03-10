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
const documents = {
    "\n  query GetInviteDetails($token: String!) {\n    organizationInvitesCollection(filter: { token: { eq: $token } }) {\n      edges {\n        node {\n          id\n          email\n          role\n          organizationName\n        }\n      }\n    }\n  }\n": types.GetInviteDetailsDocument,
    "\n    query AuthenticationQuery {\n        viewer {\n            id\n            email\n            firstName\n            lastName\n            phoneNumber\n            createdAt\n            updatedAt\n            deletedAt\n        }\n    }\n": types.AuthenticationQueryDocument,
    "\n    query OrganizationsQuery {\n        organizationsCollection {\n            edges {\n                node {\n                    id\n                    name\n                    profilePictureUrl\n                }\n            }\n        }\n    }\n": types.OrganizationsQueryDocument,
    "\n    fragment OrganizationFormFragment on Organizations {\n        id\n        name\n        profilePictureUrl\n    }\n": types.OrganizationFormFragmentFragmentDoc,
    "\n    mutation CreateOrganization($name: String!, $profilePicture: File) {\n        organizationCreate(input: { name: $name, profilePicture: $profilePicture }) {\n            id,\n            name,\n            profilePictureUrl\n        }\n    }\n": types.CreateOrganizationDocument,
    "\n    mutation UpdateOrganization($id: UUID!, $name: String!) {\n        updateOrganizationsCollection(\n            filter: { id: { eq: $id } }\n            set: { \n                name: $name\n            }\n        ) {\n            records {\n                ...OrganizationFormFragment\n            }\n        }\n    }\n": types.UpdateOrganizationDocument,
    "\n    query OrganizationsIdSetQuery {\n        organizationsCollection {\n            edges {\n                node {\n                    id\n                }\n            }\n        }\n    }\n": types.OrganizationsIdSetQueryDocument,
    "\n    fragment ProfilesFormFragment on Profiles {\n        id\n        firstName\n        lastName\n        phoneNumber\n        profilePictureUrl\n    }\n": types.ProfilesFormFragmentFragmentDoc,
    "\n    mutation UpdateProfile(\n        $firstName: String\n        $lastName: String\n        $phoneNumber: String\n        $profilePicture: File\n    ) {\n        profileUpdate(input: {\n            firstName: $firstName\n            lastName: $lastName\n            phoneNumber: $phoneNumber\n            profilePicture: $profilePicture\n        }) {\n            id\n            firstName\n            lastName\n            phoneNumber\n            profilePictureUrl\n        }\n    }\n": types.UpdateProfileDocument,
    "\n    query ProfilesMenuQuery {\n        viewer {\n            id\n            email\n            firstName\n            lastName\n            profilePictureUrl\n        }\n    }\n": types.ProfilesMenuQueryDocument,
    "\n    query ProjectsQuery($organizationId: UUID, $profileId: UUID) {\n        projectsCollection(\n            filter: { \n                organizationId: { eq: $organizationId },\n                profileId: { eq: $profileId }\n            }\n        ) {\n            edges {\n                node {\n                    id\n                    name\n                }\n            }\n        }\n    }\n": types.ProjectsQueryDocument,
    "\n    mutation CreateProject($input: ProjectsInsertInput!) {\n        insertIntoProjectsCollection(objects: [$input]) {\n            records {\n                id\n                name\n                organizationId\n                profileId\n            }\n        }\n    }\n": types.CreateProjectDocument,
    "\n    query ProjectsIdSetQuery($organizationId: UUID, $profileId: UUID) {\n        projectsCollection(\n            filter: { \n                organizationId: { eq: $organizationId },\n                profileId: { eq: $profileId }\n            }\n        ) {\n            edges {\n                node {\n                    id\n                }\n            }\n        }\n    }\n": types.ProjectsIdSetQueryDocument,
    "\n    query OnboardingMiddlewareQuery {\n        viewer {\n            id\n            firstName\n            lastName\n            phoneNumber\n            organizationMembersCollection {\n                edges {\n                    node {\n                        organization {\n                            id\n                            name\n                        }\n                    }\n                }\n            }\n        }\n    }\n": types.OnboardingMiddlewareQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetInviteDetails($token: String!) {\n    organizationInvitesCollection(filter: { token: { eq: $token } }) {\n      edges {\n        node {\n          id\n          email\n          role\n          organizationName\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetInviteDetails($token: String!) {\n    organizationInvitesCollection(filter: { token: { eq: $token } }) {\n      edges {\n        node {\n          id\n          email\n          role\n          organizationName\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query AuthenticationQuery {\n        viewer {\n            id\n            email\n            firstName\n            lastName\n            phoneNumber\n            createdAt\n            updatedAt\n            deletedAt\n        }\n    }\n"): (typeof documents)["\n    query AuthenticationQuery {\n        viewer {\n            id\n            email\n            firstName\n            lastName\n            phoneNumber\n            createdAt\n            updatedAt\n            deletedAt\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query OrganizationsQuery {\n        organizationsCollection {\n            edges {\n                node {\n                    id\n                    name\n                    profilePictureUrl\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query OrganizationsQuery {\n        organizationsCollection {\n            edges {\n                node {\n                    id\n                    name\n                    profilePictureUrl\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment OrganizationFormFragment on Organizations {\n        id\n        name\n        profilePictureUrl\n    }\n"): (typeof documents)["\n    fragment OrganizationFormFragment on Organizations {\n        id\n        name\n        profilePictureUrl\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateOrganization($name: String!, $profilePicture: File) {\n        organizationCreate(input: { name: $name, profilePicture: $profilePicture }) {\n            id,\n            name,\n            profilePictureUrl\n        }\n    }\n"): (typeof documents)["\n    mutation CreateOrganization($name: String!, $profilePicture: File) {\n        organizationCreate(input: { name: $name, profilePicture: $profilePicture }) {\n            id,\n            name,\n            profilePictureUrl\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateOrganization($id: UUID!, $name: String!) {\n        updateOrganizationsCollection(\n            filter: { id: { eq: $id } }\n            set: { \n                name: $name\n            }\n        ) {\n            records {\n                ...OrganizationFormFragment\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateOrganization($id: UUID!, $name: String!) {\n        updateOrganizationsCollection(\n            filter: { id: { eq: $id } }\n            set: { \n                name: $name\n            }\n        ) {\n            records {\n                ...OrganizationFormFragment\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query OrganizationsIdSetQuery {\n        organizationsCollection {\n            edges {\n                node {\n                    id\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query OrganizationsIdSetQuery {\n        organizationsCollection {\n            edges {\n                node {\n                    id\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment ProfilesFormFragment on Profiles {\n        id\n        firstName\n        lastName\n        phoneNumber\n        profilePictureUrl\n    }\n"): (typeof documents)["\n    fragment ProfilesFormFragment on Profiles {\n        id\n        firstName\n        lastName\n        phoneNumber\n        profilePictureUrl\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateProfile(\n        $firstName: String\n        $lastName: String\n        $phoneNumber: String\n        $profilePicture: File\n    ) {\n        profileUpdate(input: {\n            firstName: $firstName\n            lastName: $lastName\n            phoneNumber: $phoneNumber\n            profilePicture: $profilePicture\n        }) {\n            id\n            firstName\n            lastName\n            phoneNumber\n            profilePictureUrl\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateProfile(\n        $firstName: String\n        $lastName: String\n        $phoneNumber: String\n        $profilePicture: File\n    ) {\n        profileUpdate(input: {\n            firstName: $firstName\n            lastName: $lastName\n            phoneNumber: $phoneNumber\n            profilePicture: $profilePicture\n        }) {\n            id\n            firstName\n            lastName\n            phoneNumber\n            profilePictureUrl\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query ProfilesMenuQuery {\n        viewer {\n            id\n            email\n            firstName\n            lastName\n            profilePictureUrl\n        }\n    }\n"): (typeof documents)["\n    query ProfilesMenuQuery {\n        viewer {\n            id\n            email\n            firstName\n            lastName\n            profilePictureUrl\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query ProjectsQuery($organizationId: UUID, $profileId: UUID) {\n        projectsCollection(\n            filter: { \n                organizationId: { eq: $organizationId },\n                profileId: { eq: $profileId }\n            }\n        ) {\n            edges {\n                node {\n                    id\n                    name\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query ProjectsQuery($organizationId: UUID, $profileId: UUID) {\n        projectsCollection(\n            filter: { \n                organizationId: { eq: $organizationId },\n                profileId: { eq: $profileId }\n            }\n        ) {\n            edges {\n                node {\n                    id\n                    name\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateProject($input: ProjectsInsertInput!) {\n        insertIntoProjectsCollection(objects: [$input]) {\n            records {\n                id\n                name\n                organizationId\n                profileId\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation CreateProject($input: ProjectsInsertInput!) {\n        insertIntoProjectsCollection(objects: [$input]) {\n            records {\n                id\n                name\n                organizationId\n                profileId\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query ProjectsIdSetQuery($organizationId: UUID, $profileId: UUID) {\n        projectsCollection(\n            filter: { \n                organizationId: { eq: $organizationId },\n                profileId: { eq: $profileId }\n            }\n        ) {\n            edges {\n                node {\n                    id\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query ProjectsIdSetQuery($organizationId: UUID, $profileId: UUID) {\n        projectsCollection(\n            filter: { \n                organizationId: { eq: $organizationId },\n                profileId: { eq: $profileId }\n            }\n        ) {\n            edges {\n                node {\n                    id\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query OnboardingMiddlewareQuery {\n        viewer {\n            id\n            firstName\n            lastName\n            phoneNumber\n            organizationMembersCollection {\n                edges {\n                    node {\n                        organization {\n                            id\n                            name\n                        }\n                    }\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query OnboardingMiddlewareQuery {\n        viewer {\n            id\n            firstName\n            lastName\n            phoneNumber\n            organizationMembersCollection {\n                edges {\n                    node {\n                        organization {\n                            id\n                            name\n                        }\n                    }\n                }\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;