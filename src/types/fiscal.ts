import type { Big } from "big.js"
import type { DateTime } from "luxon"
import { AttributedDistributionsEntry } from "./ledgers"

export type FinancialYear = {
    startDate: DateTime
    endDate: DateTime
}

export type FinancialQuarter = {
    index: number
    startDate: DateTime
    endDate: DateTime
}

export type Distribution = {
	discountCapitalGains: Big
	nonDiscountCapitalGains: Big
	income: Big
	cash: Big
}

export type AttributionCalculation = {
    date: DateTime
    totalDistribution: Distribution
    attributions: AttributedDistributionsEntry[]
}
