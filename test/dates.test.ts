import { DateTime } from "luxon"
import { TIMEZONE, normaliseDate, getElapsedPercentage, getFinancialYear, getFiscalQuarter, FinancialYear, FiscalQuarter } from "../src/dates"

describe("normalise date", () => {
    const now = DateTime.fromObject({ year: 2000, month: 1, day: 1 }, { zone: TIMEZONE })

    test("zeroes out time component", () => {
        const nowNormalised = normaliseDate(now)

        expect(nowNormalised.year == now.year)
        expect(nowNormalised.month == now.month)
        expect(nowNormalised.day == now.day)
        expect(nowNormalised.hour == 0)
        expect(nowNormalised.minute == 0)
        expect(nowNormalised.second == 0)
        expect(nowNormalised.millisecond == 0)
    })

    test("adjusts for timezones", () => {
        const behindTZ = "America/New_York"
        const aheadTZ = "Pacific/Kiritimati"

        const behind = DateTime.fromObject({ year: 2000, month: 1, day: 1 }, { zone: behindTZ })
        const ahead = DateTime.fromObject({ year: 2000, month: 1, day: 1 }, { zone: aheadTZ })

        const behindNormalised = normaliseDate(behind)
        const aheadNormalised = normaliseDate(ahead)

        expect(behindNormalised.day != behind.day)
        expect(aheadNormalised.day == ahead.day)

        expect(normaliseDate(now) > normaliseDate(behind))
        expect(normaliseDate(now) < normaliseDate(ahead))
    })
})

describe("get elapsed percentage", () => {
    const periodStart = DateTime.fromObject({ year: 2000, month: 1, day: 1 }, { zone: TIMEZONE })
    const periodEnd = DateTime.fromObject({ year: 2000, month: 3, day: 31 }, { zone: TIMEZONE })

    test("range is [0, 1]", () => {
        expect(getElapsedPercentage(periodStart, periodStart, periodEnd)).toEqual(0)
        expect(getElapsedPercentage(periodEnd, periodStart, periodEnd)).toEqual(1)
    })

    test("ignores time component", () => {
        expect(getElapsedPercentage(periodStart.plus({ hours: 12 }), periodStart, periodEnd)).toEqual(0)
        expect(getElapsedPercentage(periodStart.plus({ minutes: 30 }), periodStart, periodEnd)).toEqual(0)
        expect(getElapsedPercentage(periodStart.plus({ seconds: 30 }), periodStart, periodEnd)).toEqual(0)
        expect(getElapsedPercentage(periodStart.plus({ milliseconds: 500 }), periodStart, periodEnd)).toEqual(0)
    })
})

describe("fiscal", () => {
    test("get financial year", () => {
        const financialYear: FinancialYear = {
            startDate: DateTime.fromObject({ year: 2000, month: 7, day: 1 }, { zone: TIMEZONE }),
            endDate: DateTime.fromObject({ year: 2001, month: 6, day: 30 }, { zone: TIMEZONE })
        }

        expect(getFinancialYear(financialYear.startDate.minus({ days: 1 }))).not.toMatchObject(financialYear)
        expect(getFinancialYear(financialYear.startDate)).toMatchObject(financialYear)
        expect(getFinancialYear(financialYear.endDate)).toMatchObject(financialYear)
        expect(getFinancialYear(financialYear.endDate.plus({ days: 1 }))).not.toMatchObject(financialYear)
    })

    test("get fiscal quarter", () => {
        const Q1: FiscalQuarter = {
            index: 1,
            startDate: DateTime.fromObject({ year: 2000, month: 7, day: 1 }, { zone: TIMEZONE }),
            endDate: DateTime.fromObject({ year: 2000, month: 9, day: 30 }, { zone: TIMEZONE })
        }
        const Q2: FiscalQuarter = {
            index: 2,
            startDate: DateTime.fromObject({ year: 2000, month: 10, day: 1 }, { zone: TIMEZONE }),
            endDate: DateTime.fromObject({ year: 2000, month: 12, day: 31 }, { zone: TIMEZONE })
        }
        const Q3: FiscalQuarter = {
            index: 3,
            startDate: DateTime.fromObject({ year: 2000, month: 1, day: 1 }, { zone: TIMEZONE }),
            endDate: DateTime.fromObject({ year: 2000, month: 3, day: 31 }, { zone: TIMEZONE })
        }
        const Q4: FiscalQuarter = {
            index: 4,
            startDate: DateTime.fromObject({ year: 2000, month: 4, day: 1 }, { zone: TIMEZONE }),
            endDate: DateTime.fromObject({ year: 2000, month: 6, day: 30 }, { zone: TIMEZONE })
        }

        expect(getFiscalQuarter(Q1.startDate.minus({ days: 1 }))).not.toMatchObject(Q1)
        expect(getFiscalQuarter(Q1.startDate)).toMatchObject(Q1)
        expect(getFiscalQuarter(Q2.startDate.minus({ days: 1 }))).not.toMatchObject(Q2)
        expect(getFiscalQuarter(Q2.startDate)).toMatchObject(Q2)
        expect(getFiscalQuarter(Q3.startDate.minus({ days: 1 }))).not.toMatchObject(Q3)
        expect(getFiscalQuarter(Q3.startDate)).toMatchObject(Q3)
        expect(getFiscalQuarter(Q4.startDate.minus({ days: 1 }))).not.toMatchObject(Q4)
        expect(getFiscalQuarter(Q4.startDate)).toMatchObject(Q4)
    })
})
