import { graphql } from "@/gql";




export const ComponentsCollectionFragment = graphql(`
    fragment ComponentsCollectionFragment on Projects {
        componentsCollection {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
`)