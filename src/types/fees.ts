import type { Big } from "big.js"
import type { DateTime } from "luxon"
import { UnitHoldersRegisterEntry, FeeCapitalisationsEntry } from "./ledgers"

export type VintageData = {
    id: number
    creationDate: DateTime

    uhrEntries: UnitHoldersRegisterEntry[]
    initialCapitalInvested: Big
    initialUnitsAcquired: Big
    unitsRemainingAtValuationDate: Big
    unitsRedeemedOnValuationDate: Big

    latestFcEntry: FeeCapitalisationsEntry | undefined
    previousMoneyRedeemedOnValuationDate: Big
    previousNetValueBeforePF: Big
    previousNetValueAfterPF: Big
    previousHighWaterMark: Big
    wasPreviousPerformanceFeePaidOut?: boolean

    valueAtValuationDate: Big

    accruedManagementFeeGstExclusive: Big
    accruedManagementFeeGstInclusive: Big
    redeemedUnitsManagementFeeGstExclusive: Big
    redeemedUnitsManagementFeeGstInclusive: Big
    payableManagementFeeGstExclusive: Big
    payableManagementFeeGstInclusive: Big

    netValueBeforePF: Big

    highWaterMark: Big

    preTaxInvestmentReturn: Big

    benchmarkPortfolio: Big
    benchmarkReturnOnCapital: Big
    benchmarkInvestmentReturn: Big

    outPerformance: Big

    indicativePerformanceFeeGstExclusive: Big
    indicativePerformanceFeeGstInclusive: Big
    redeemedUnitsPerformanceFeeGstExclusive: Big
    redeemedUnitsPerformanceFeeGstInclusive: Big
    payablePerformanceFeeGstExclusive: Big
    payablePerformanceFeeGstInclusive: Big

    netValueAfterPF: Big
    unitsOutstandingAtBeginningOfNextValuationPeriod: Big
}

export type FeeCalculation = {
    valuationDate: DateTime,
    aum: Big,
    rates: {
        managementFee: Big,
        benchmarkReturn: Big,
        performanceFee: Big,
        gst: Big
    }
    vintages: VintageData[]
}
