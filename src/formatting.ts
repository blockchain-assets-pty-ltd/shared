import { Big } from "big.js"

export const UNITS_DP = 4
export const UNIT_PRICE_DP = 4
export const BASE_CURRENCY_DP = 2

export const THOUSANDS_SEPARATOR = ","
export const DECIMAL_SEPARATOR = "."

export const BASE_CURRENCY_SYMBOL = "$"
export const BASE_CURRENCY_CODE = "AUD"

function format(value: Big, thousandsSeparator: string, decimalSeparator: string, decimalPlaces: number) {
    var arr = value.toFixed(decimalPlaces, Big.roundHalfEven).split(".")
    arr[0] = arr[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator == null ? "," : thousandsSeparator + "")
    return arr.join(decimalSeparator == null ? "." : decimalSeparator + "")
}

interface FormattingOptions {
    commaSeparated?: boolean
}

type CurrencyMark = "Symbol" | "Code"

interface CurrencyFormattingOptions extends FormattingOptions {
    prependCurrencyMark?: CurrencyMark
}

const getPrefix = (currencyMark: CurrencyMark | undefined): string => currencyMark === "Symbol" ? BASE_CURRENCY_SYMBOL : currencyMark === "Code" ? BASE_CURRENCY_CODE + " " : ""

export const toUnitsString = (value: Big, options?: FormattingOptions): string =>
    format(value, options?.commaSeparated ? THOUSANDS_SEPARATOR : "", DECIMAL_SEPARATOR, UNITS_DP)
export const toUnitPriceString = (value: Big, options?: CurrencyFormattingOptions): string =>
    getPrefix(options?.prependCurrencyMark) + format(value, options?.commaSeparated ? THOUSANDS_SEPARATOR : "", DECIMAL_SEPARATOR, UNIT_PRICE_DP)
export const toBaseCurrencyString = (value: Big, options?: CurrencyFormattingOptions): string =>
    getPrefix(options?.prependCurrencyMark) + format(value, options?.commaSeparated ? THOUSANDS_SEPARATOR : "", DECIMAL_SEPARATOR, BASE_CURRENCY_DP)
