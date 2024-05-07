import type { Big } from "big.js"
import type { DateTime } from "luxon"
import { ENTITY_TYPES } from "../legal"

export type Account = {
    id: number
    name: string
    entityType: typeof ENTITY_TYPES[number]
    addressLine1: string
    addressLine2: string | null
    suburb: string
    state: string
    postcode: string
    country: string
    distributionReinvestmentPercentage: Big
    oldId?: string | null
    unitsHeld?: Big | null
    netRemainingCapital?: Big | null
    initialInvestmentDate?: DateTime | null
    tfnProvided?: boolean
}

export type AccountPartition = {
    accountId: number
    order: number
    units: Big
    name: string
}

export type TaxFileNumber = {
    taxFileNumber: string
    accountId: number
    clientId: number | null
}
