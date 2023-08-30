import type { DateTime } from "luxon"

export type Administrator = {
    id: number
    firstName: string
    lastName: string
    email: string
    ethereumAddress: string
    telegramUsername: string
}

export type Client = {
    id: number
    firstName: string
    lastName: string | null
    email: string
    ethereumAddress?: string | null
    lastAccessedAt?: DateTime | null
    accessesInLast7Days?: number | null
    totalAccesses?: number | null
}

export type Bot = {
    id: number
    name: string
    ethereumAddress: string | null
    apiKey: string | null
    readOnly: boolean
}
