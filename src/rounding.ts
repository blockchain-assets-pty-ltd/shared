import { Big } from "big.js"

export const UNITS_DP = 4
export const UNIT_PRICE_DP = 4
export const BASE_CURRENCY_DP = 2

export const toUnitsString = (value: Big): string => value.toFixed(UNITS_DP, Big.roundHalfEven)
export const toUnitPriceString = (value: Big): string => value.toFixed(UNIT_PRICE_DP, Big.roundHalfEven)
export const toBaseCurrencyString = (value: Big): string => value.toFixed(BASE_CURRENCY_DP, Big.roundHalfEven)
