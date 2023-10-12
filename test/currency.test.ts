import { Big } from "big.js"
import { toUnitsString, toUnitPriceString, toBaseCurrencyString } from "../src/currency"

const val1 = new Big("1.55555")
const val2 = new Big("100.56565")
const val3 = new Big("1000.555")
const val4 = new Big("10000.565")

const commaSeparatedOptions = { commaSeparated: true }
const currencySymbolOptions: { prependCurrencyMark: "Symbol" } = { prependCurrencyMark: "Symbol" }
const currencyCodeOptions: { prependCurrencyMark: "Code" } = { prependCurrencyMark: "Code" }

describe("to units string", () => {
    test("rounding", () => {
        expect(toUnitsString(val1)).toEqual("1.5556")
        expect(toUnitsString(val2)).toEqual("100.5656")
        expect(toUnitsString(val3)).toEqual("1000.5550")
        expect(toUnitsString(val4)).toEqual("10000.5650")
    })

    test("comma separating", () => {
        expect(toUnitsString(val1, commaSeparatedOptions)).toEqual("1.5556")
        expect(toUnitsString(val2, commaSeparatedOptions)).toEqual("100.5656")
        expect(toUnitsString(val3, commaSeparatedOptions)).toEqual("1,000.5550")
        expect(toUnitsString(val4, commaSeparatedOptions)).toEqual("10,000.5650")
    })
})

describe("to unit price string", () => {
    test("rounding", () => {
        expect(toUnitPriceString(val1)).toEqual("1.5556")
        expect(toUnitPriceString(val2)).toEqual("100.5656")
        expect(toUnitPriceString(val3)).toEqual("1000.5550")
        expect(toUnitPriceString(val4)).toEqual("10000.5650")
    })

    test("comma separating", () => {
        expect(toUnitPriceString(val1, commaSeparatedOptions)).toEqual("1.5556")
        expect(toUnitPriceString(val2, commaSeparatedOptions)).toEqual("100.5656")
        expect(toUnitPriceString(val3, commaSeparatedOptions)).toEqual("1,000.5550")
        expect(toUnitPriceString(val4, commaSeparatedOptions)).toEqual("10,000.5650")
    })

    test("currency symbol", () => {
        expect(toUnitPriceString(val1, currencySymbolOptions)).toEqual("$1.5556")
        expect(toUnitPriceString(val2, currencySymbolOptions)).toEqual("$100.5656")
        expect(toUnitPriceString(val3, currencySymbolOptions)).toEqual("$1000.5550")
        expect(toUnitPriceString(val4, currencySymbolOptions)).toEqual("$10000.5650")
    })

    test("currency code", () => {
        expect(toUnitPriceString(val1, currencyCodeOptions)).toEqual("AUD 1.5556")
        expect(toUnitPriceString(val2, currencyCodeOptions)).toEqual("AUD 100.5656")
        expect(toUnitPriceString(val3, currencyCodeOptions)).toEqual("AUD 1000.5550")
        expect(toUnitPriceString(val4, currencyCodeOptions)).toEqual("AUD 10000.5650")
    })
})

describe("to base currency string", () => {
    test("rounding", () => {
        expect(toBaseCurrencyString(val1)).toEqual("1.56")
        expect(toBaseCurrencyString(val2)).toEqual("100.57")
        expect(toBaseCurrencyString(val3)).toEqual("1000.56")
        expect(toBaseCurrencyString(val4)).toEqual("10000.56")
    })

    test("comma separating", () => {
        expect(toBaseCurrencyString(val1, commaSeparatedOptions)).toEqual("1.56")
        expect(toBaseCurrencyString(val2, commaSeparatedOptions)).toEqual("100.57")
        expect(toBaseCurrencyString(val3, commaSeparatedOptions)).toEqual("1,000.56")
        expect(toBaseCurrencyString(val4, commaSeparatedOptions)).toEqual("10,000.56")
    })

    test("currency symbol", () => {
        expect(toBaseCurrencyString(val1, currencySymbolOptions)).toEqual("$1.56")
        expect(toBaseCurrencyString(val2, currencySymbolOptions)).toEqual("$100.57")
        expect(toBaseCurrencyString(val3, currencySymbolOptions)).toEqual("$1000.56")
        expect(toBaseCurrencyString(val4, currencySymbolOptions)).toEqual("$10000.56")
    })

    test("currency code", () => {
        expect(toBaseCurrencyString(val1, currencyCodeOptions)).toEqual("AUD 1.56")
        expect(toBaseCurrencyString(val2, currencyCodeOptions)).toEqual("AUD 100.57")
        expect(toBaseCurrencyString(val3, currencyCodeOptions)).toEqual("AUD 1000.56")
        expect(toBaseCurrencyString(val4, currencyCodeOptions)).toEqual("AUD 10000.56")
    })
})
