import { DateTime } from "luxon"

export type Job = {
    id: string
    type: string
    parameters: Record<string, any>
    progress: number
    error: string | null
    running: boolean
    startDate: DateTime
    finishDate: DateTime | null
}
