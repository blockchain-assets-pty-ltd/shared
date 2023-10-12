export type Job = {
    id: string
    name: string
    parameters: Record<string, any>
    progress: number
    error: string | null
    running: boolean
}
