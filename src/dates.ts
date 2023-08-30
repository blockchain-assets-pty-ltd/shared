import { DateTime, Settings } from "luxon"
import type { FinancialYear, FinancialQuarter } from "./types"

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

export const QUARTER_ORDERING = [3, 4, 1, 2]
export const QUARTERS = [
    { start: { day: 1, month: 1 }, end: { day: 31, month: 3 } },
    { start: { day: 1, month: 4 }, end: { day: 30, month: 6 } },
    { start: { day: 1, month: 7 }, end: { day: 30, month: 9 } },
    { start: { day: 1, month: 10 }, end: { day: 31, month: 12 } }
]

export function getFinancialYear(date: DateTime): FinancialYear {
    const Q1Index = QUARTER_ORDERING.indexOf(1)
    const startFYMonth = QUARTERS[Q1Index].start.month
    const startFYDay = QUARTERS[Q1Index].start.day
    const Q4Index = QUARTER_ORDERING.indexOf(4)
    const endFYMonth = QUARTERS[Q4Index].end.month
    const endFYDay = QUARTERS[Q4Index].end.day
    const fyStartYear = date.month > endFYMonth ? date.year : date.plus({ years: -1 }).year
    const fyEndYear = date.month > endFYMonth ? date.plus({ years: 1 }).year : date.year
    return {
        startDate: DateTime.fromObject({ year: fyStartYear, month: startFYMonth, day: startFYDay }, { zone: TIMEZONE }),
        endDate: DateTime.fromObject({ year: fyEndYear, month: endFYMonth, day: endFYDay }, { zone: TIMEZONE })
    }
}

export function getFinancialQuarter(date: DateTime): FinancialQuarter {
    const i = Math.floor((date.month + 2) / 3) - 1
    return {
        index: QUARTER_ORDERING[i],
        startDate: DateTime.fromObject({ year: date.year, month: QUARTERS[i].start.month, day: QUARTERS[i].start.day }, { zone: TIMEZONE }),
        endDate: DateTime.fromObject({ year: date.year, month: QUARTERS[i].end.month, day: QUARTERS[i].end.day }, { zone: TIMEZONE })
    }
}
