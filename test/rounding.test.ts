import { Big } from "big.js"
import { toUnitsString, toUnitPriceString, toBaseCurrencyString } from "../src/rounding"

const val1 = new Big("1.55555")
const val2 = new Big("1.56565")
const val3 = new Big("1.555")
const val4 = new Big("1.565")

test("to units string", () => {
    expect(toUnitsString(val1)).toEqual("1.5556")
    expect(toUnitsString(val2)).toEqual("1.5656")
    expect(toUnitsString(val3)).toEqual("1.5550")
    expect(toUnitsString(val4)).toEqual("1.5650")
})

test("to unit price string", () => {
    expect(toUnitPriceString(val1)).toEqual("1.5556")
    expect(toUnitPriceString(val2)).toEqual("1.5656")
    expect(toUnitPriceString(val3)).toEqual("1.5550")
    expect(toUnitPriceString(val4)).toEqual("1.5650")
})

test("to base currency string", () => {
    expect(toBaseCurrencyString(val1)).toEqual("1.56")
    expect(toBaseCurrencyString(val2)).toEqual("1.57")
    expect(toBaseCurrencyString(val3)).toEqual("1.56")
    expect(toBaseCurrencyString(val4)).toEqual("1.56")
})
