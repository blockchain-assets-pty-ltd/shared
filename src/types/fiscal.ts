import type { Big } from "big.js"
import type { DateTime } from "luxon"

export type FinancialYear = {
    startDate: DateTime
    endDate: DateTime
}

export type FinancialQuarter = {
    index: number
    startDate: DateTime
    endDate: DateTime
}

export type TaxDistribution = {
    discountCapitalGains: Big,
    nonDiscountCapitalGains: Big,
    income: Big
}

export type TaxCalculation = {
    financialYear: FinancialYear,
    totalTaxDistribution: TaxDistribution,
    totalCashDistribution: Big,
    attributions: {
        [memberId: string]: {
            taxDistribution: TaxDistribution,
            cashDistribution: Big
        }
    }
}
