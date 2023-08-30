import type { DateTime } from "luxon"

export type InvestorPortalAccessLogEntry = {
    date: DateTime
    clientId: number
}

export type ModificationLogEntry = {
    date: DateTime
    adminId: number | null
    clientId: number | null
    botId: number | null
    data: string
    signature: string
}
