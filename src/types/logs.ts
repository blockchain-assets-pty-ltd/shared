import type { DateTime } from "luxon"

export type InvestorPortalAccessLogEntry = {
    sessionStartedAt: DateTime
    clientId: number
    lastActivityAt: DateTime
    deviceType: string | null
    os: string | null
    browser: string | null
}

export type ModificationLogEntry = {
    date: DateTime
    adminId: number | null
    clientId: number | null
    botId: number | null
    data: string
    signature: string
}
