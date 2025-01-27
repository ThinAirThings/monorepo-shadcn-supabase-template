


export type AnyErrType = ErrType<any, any>
export type ErrType<
    Type extends string,
    Data extends Record<string, any> | undefined = undefined,
> = {
    type: Type
    message: string
    data: Data
}

export type Result<T, E extends AnyErrType> = {
    data: T
    error: null
} | {
    data: null
    error: E
}

export const Ok = <T>(data: T): Result<T, never> => ({
    data,
    error: null,
})

export const Err = <
    Type extends string,
    Data extends Record<string, any> | undefined = undefined,
>({
    type,
    message,
    data
}: {
    type: Type,
    message: string,
    data?: Data
}): Result<never, ErrType<Type,  Data>> => {
    console.error({ type, message, ...data })

    return {
        data: null,
        error: {
            type,
            message,
            data: data as Data
        }
    }
}