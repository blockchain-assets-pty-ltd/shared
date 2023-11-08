import type { Big } from "big.js"
import type { DateTime } from "luxon"
import { TaxLedgerEntry } from "./ledgers"

export type FinancialYear = {
    startDate: DateTime
    endDate: DateTime
}

export type FinancialQuarter = {
    index: number
    startDate: DateTime
    endDate: DateTime
}

export type TaxAttribution = {
	discountedCapitalGains: Big
	otherCapitalGains: Big
	otherIncome: Big
}

export type CashDistribution = {
    cashRedeemed: Big
    cashReinvested: Big
    cashPaidOut: Big
}

export type AttributionCalculation = {
    date: DateTime
    taxPool: TaxAttribution
    cashPool: Big,
    streamedTax: ({ accountId: number } & TaxAttribution)[]
    attributions: TaxLedgerEntry[]
}
