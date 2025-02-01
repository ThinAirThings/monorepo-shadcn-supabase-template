export function generateNodeId(type: string, id: number | string): string {
    return Buffer.from(`${type}:${id}`).toString('base64')
}