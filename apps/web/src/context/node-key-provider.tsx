'use client'
import type { PossibleTypesResultData } from "@/root/graphql.possibleTypes";
import { enableMapSet, produce } from "immer";
import { createContext, type ReactNode, useContext, useMemo } from "react";
import invariant from "tiny-invariant";
enableMapSet()

type NodeTypeSet = PossibleTypesResultData['possibleTypes']['Node'][number]

export type NodeKey<NodeType extends NodeTypeSet> = {
    __typename: NodeType
    id: string
}

const NodeKeyContextMap = createContext<Map<
    NodeTypeSet, 
    NodeKey<NodeTypeSet>
>>(new Map())

export const useNodeKey = <
    NodeType extends NodeTypeSet, 
    IsInvariant extends boolean=true
>(nodeType: NodeType, {isInvariant = true as IsInvariant} = {}) => {
    const nodeKeyContextMap = useContext(NodeKeyContextMap)
    const nodeKey = nodeKeyContextMap.get(nodeType)
    if (isInvariant) {
        invariant(nodeKey, `Node key for ${nodeType} not found`)
    }
    return nodeKey as IsInvariant extends true ? NodeKey<NodeType> : NodeKey<NodeType> | undefined
}


export const useNodeKeyContextMap = () => useContext(NodeKeyContextMap)  

export const NodeKeyProvider = <
    NodeType extends NodeTypeSet,
>({
    node,
    children
}: {
    node: NodeKey<NodeType> | null
    children: ReactNode
}) => {
    const nodeKeyContextMap = useContext(NodeKeyContextMap)
    const nodeKey = useMemo(() => {
        if (!node) return null
        return {
            __typename: node.__typename,
            id: node.id
        }
    }, [node])
    return (
        <NodeKeyContextMap.Provider value={produce(nodeKeyContextMap, draft => {
            if (nodeKey) {
                draft.set(nodeKey.__typename, nodeKey)
            }
        })}>
            {children}
        </NodeKeyContextMap.Provider>
    );
}