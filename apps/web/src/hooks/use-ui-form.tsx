import { useCallback, useMemo, useRef, useState } from 'react'
import { ApolloError } from '@apollo/client'

export interface UseUIFormReturn<TData = unknown> {
    submit: (options?: {
        onSuccess?: () => void
        onError?: (error: ApolloError) => void
    }) => Promise<void>
    mutationLoading: boolean
    setSubmit: (fn: UseUIFormReturn<TData>['submit']) => void
    setMutationLoading: (loading: boolean) => void
}

export function useUIForm<TData = unknown>(): UseUIFormReturn<TData> {
    const [mutationLoading, setMutationLoading] = useState(false)
    const submitRef = useRef<UseUIFormReturn<TData>['submit']>(async () => {
        console.warn('Form submit not implemented')
    })

    const setSubmit = useCallback((fn: UseUIFormReturn<TData>['submit']) => {
        submitRef.current = fn
    }, [])

    const submit = useCallback<UseUIFormReturn<TData>['submit']>((options) => {
        return submitRef.current(options)
    }, [])

    return useMemo(() => ({
        submit,
        mutationLoading,
        setSubmit,
        setMutationLoading
    }), [
        setMutationLoading,
        mutationLoading, 
        setSubmit,
        submit
    ])
}
