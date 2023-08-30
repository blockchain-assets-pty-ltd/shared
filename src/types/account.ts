import type { Big } from "big.js"
import type { DateTime } from "luxon"

export type Account = {
    id: number
    name: string
    entityType: string
    address: string
    suburb: string
    state: string
    postcode: string
    country: string
    oldId?: string | null
    unitsHeld?: Big | null
    totalInvested?: Big | null
    initialInvestmentDate?: DateTime | null
    tfnProvided?: boolean
}

export type TaxFileNumber = {
    taxFileNumber: string
    accountId: number
    clientId: number | null
}
