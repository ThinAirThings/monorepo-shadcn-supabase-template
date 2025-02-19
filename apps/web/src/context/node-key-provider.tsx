'use client'
import type { PossibleTypesResultData } from "@/root/graphql.possibleTypes";
import { enableMapSet, produce } from "immer";
import { createContext, type ReactNode, useContext, useMemo } from "react";
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

export const useNodeKey = <NodeType extends NodeTypeSet>(nodeType: NodeType) => {
    const nodeKeyContextMap = useContext(NodeKeyContextMap)
    return nodeKeyContextMap.get(nodeType) as NodeKey<NodeType>
}

export const useNodeKeyContextMap = () => useContext(NodeKeyContextMap)  

export const NodeKeyProvider = <
    NodeType extends NodeTypeSet
>({
    node,
    children
}: {
    node: NodeKey<NodeType>
    children: ReactNode
}) => {
    const nodeKeyContextMap = useContext(NodeKeyContextMap)
    const nodeKey = useMemo(() => ({
        __typename: node.__typename,
        id: node.id
    }), [node.id, node.__typename])
    return (
        <NodeKeyContextMap.Provider value={produce(nodeKeyContextMap, draft => {
            draft.set(node.__typename, nodeKey)
        })}>
            {children}
        </NodeKeyContextMap.Provider>
    );
}