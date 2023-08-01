import { DateTime, Settings } from "luxon"

Settings.throwOnInvalid = true

export const TIMEZONE = "Australia/Perth"

export function normaliseDate(date: DateTime): DateTime {
    return date.setZone(TIMEZONE).startOf("day")
}

export function getElapsedPercentage(currentDate: DateTime, startDate: DateTime, endDate: DateTime): number {
    return currentDate.startOf("day").diff(startDate.startOf("day"), "days").days / endDate.startOf("day").diff(startDate.startOf("day"), "days").days
}

export const toDateString = (dateTime: DateTime) => dateTime.setZone(TIMEZONE).toFormat("yyyy-MM-dd")
export const toDateTimeString = (dateTime: DateTime) => dateTime.setZone(TIMEZONE).toFormat("yyyy-MM-dd HH:mm:ss")
export const toDateTimeMillisString = (dateTime: DateTime) => dateTime.setZone(TIMEZONE).toFormat("yyyy-MM-dd HH:mm:ss.SSS")

export const fromDateString = (val: string): DateTime => DateTime.fromFormat(val, "yyyy-MM-dd", { zone: TIMEZONE })
export const fromDateTimeString = (val: string): DateTime => DateTime.fromFormat(val, "yyyy-MM-dd HH:mm:ss", { zone: TIMEZONE })
export const fromDateTimeMillisString = (val: string): DateTime => DateTime.fromFormat(val, "yyyy-MM-dd HH:mm:ss.SSS", { zone: TIMEZONE })

const QUARTER_ORDERING = [3, 4, 1, 2]
const QUARTER_START_MONTHS = [1, 4, 7, 10]
const QUARTER_END_MONTHS = [3, 6, 9, 12]
const QUARTER_END_DAYS = [31, 30, 30, 31]

export type FinancialYear = {
    startDate: DateTime
    endDate: DateTime
}

export function getFinancialYear(date: DateTime): FinancialYear {
    const Q1Index = QUARTER_ORDERING.indexOf(1)
    const startFYMonth = QUARTER_START_MONTHS[Q1Index]
    const Q4Index = QUARTER_ORDERING.indexOf(4)
    const endFYMonth = QUARTER_END_MONTHS[Q4Index]
    const endFYDay = QUARTER_END_DAYS[Q4Index]
    const fyStartYear = date.month > endFYMonth ? date.year : date.plus({ years: -1 }).year
    const fyEndYear = date.month > endFYMonth ? date.plus({ years: 1 }).year : date.year
    return {
        startDate: DateTime.fromObject({ year: fyStartYear, month: startFYMonth, day: 1 }, { zone: TIMEZONE }),
        endDate: DateTime.fromObject({ year: fyEndYear, month: endFYMonth, day: endFYDay }, { zone: TIMEZONE }),
    }
}

export type FiscalQuarter = {
    index: number
    startDate: DateTime
    endDate: DateTime
}

export function getFiscalQuarter(date: DateTime): FiscalQuarter {
    const i = Math.floor((date.month + 2) / 3) - 1
    return {
        index: QUARTER_ORDERING[i],
        startDate: DateTime.fromObject({ year: date.year, month: QUARTER_START_MONTHS[i], day: 1 }, { zone: TIMEZONE }),
        endDate: DateTime.fromObject({ year: date.year, month: QUARTER_END_MONTHS[i], day: QUARTER_END_DAYS[i] }, { zone: TIMEZONE })
    }
}
