import { Big } from "big.js"

export const UNITS_DP = 4
export const UNIT_PRICE_DP = 4
export const BASE_CURRENCY_DP = 2

export const THOUSANDS_SEPARATOR = ","
export const DECIMAL_SEPARATOR = "."

export const BASE_CURRENCY_SYMBOL = "$"
export const BASE_CURRENCY_CODE = "AUD"

function format(value: Big, thousandsSeparator: string, decimalSeparator: string, decimalPlaces: number, prefix?: string, bracketsForNegatives?: boolean) {
    var arr = value.abs().toFixed(decimalPlaces, Big.roundHalfEven).split(".")
    arr[0] = arr[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator == null ? "," : thousandsSeparator + "")
    const str = prefix + arr.join(decimalSeparator == null ? "." : decimalSeparator + "")
    return value.lt(0) ? bracketsForNegatives ? `(${str})` : `-${str}` : str
}

interface FormattingOptions {
    commaSeparated?: boolean,
    bracketsForNegatives?: boolean
}

type CurrencyMark = "Symbol" | "Code"

interface CurrencyFormattingOptions extends FormattingOptions {
    prependCurrencyMark?: CurrencyMark
}

const getPrefix = (currencyMark: CurrencyMark | undefined): string => currencyMark === "Symbol" ? BASE_CURRENCY_SYMBOL : currencyMark === "Code" ? BASE_CURRENCY_CODE + " " : ""

export const toUnitsString = (value: Big, options?: FormattingOptions): string =>
    format(value, options?.commaSeparated ? THOUSANDS_SEPARATOR : "", DECIMAL_SEPARATOR, UNITS_DP, "", options?.bracketsForNegatives)
export const toUnitPriceString = (value: Big, options?: CurrencyFormattingOptions): string =>
    format(value, options?.commaSeparated ? THOUSANDS_SEPARATOR : "", DECIMAL_SEPARATOR, UNIT_PRICE_DP, getPrefix(options?.prependCurrencyMark), options?.bracketsForNegatives)
export const toBaseCurrencyString = (value: Big, options?: CurrencyFormattingOptions): string =>
    format(value, options?.commaSeparated ? THOUSANDS_SEPARATOR : "", DECIMAL_SEPARATOR, BASE_CURRENCY_DP, getPrefix(options?.prependCurrencyMark), options?.bracketsForNegatives)
