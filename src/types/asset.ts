import type { Big } from "big.js"
import type { DateTime } from "luxon"

export type Asset = {
    assetName: string
    assetSymbol: string | null
    balance: Big | null
    price: Big | null
}

export type AssetBalance = {
    assetName: string
    sourceId: number
    balance: Big
    lastUpdatedAt: DateTime
}

export type AssetPrice = {
    assetName: string
    price: Big
    lastUpdatedAt: DateTime
}

export type AssetSettings = {
    assetName: string
    assetSymbol: string | null
    manualBalance: Big | null
    manualPrice: Big | null
    displayRank?: number | null
    cmcId?: number | null
}

export type AssetSource = {
    id: number
    name: string
    type: string
    description: string | null
    readBalances: boolean
    address: string | null
    network: string | null
}
