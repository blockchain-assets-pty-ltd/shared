import type { Big } from "big.js"
import type { DateTime } from "luxon"
import type { Distribution } from "./fiscal"

export type UnitHoldersRegisterEntry = {
    date: DateTime
    vintage: number
    accountId: number
    type: "Acquisition" | "Redemption" | "Distribution Reinvestment"
    unitsAcquiredOrRedeemed: Big
    unitPrice: Big
    fundsInOrOut: Big
}

export type FeeCapitalisationsEntry = {
    date: DateTime
    vintage: number
    valueAtCapitalisationDate: Big
    managementFee: Big
    highWaterMark: Big
    performanceFee: Big
}

export type AttributedDistributionsEntry = {
    date: DateTime
    accountId: number
} & Distribution

export type FundMetricsEntry = {
    date: DateTime
    unitPrice: Big | null
    aum: Big | null
}

export type AssetSnapshotsEntry = {
    date: DateTime
    assetName: string
    balance: Big
    price: Big
}
