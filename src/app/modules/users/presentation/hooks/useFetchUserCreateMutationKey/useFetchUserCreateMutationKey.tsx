import type { MutationKey } from "@tanstack/react-query";

interface UseFetchUserCreateMutationKeyReturn {
    mutationKey: MutationKey
}

export const FETCH_USER_CREATE_MUTATION_KEY = 'USER_CREATE'

export const useFetchUserCreateMutationKey = (): UseFetchUserCreateMutationKeyReturn  => {

    return {
        mutationKey: [FETCH_USER_CREATE_MUTATION_KEY]
    }
} 