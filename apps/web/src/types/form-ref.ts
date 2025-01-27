import { ApolloError } from "@apollo/client";


export type FormRef = {
    submit: (options: { onSuccess?: () => void; onError?: (error: ApolloError) => void }) => void;
    mutationLoading: boolean;
}