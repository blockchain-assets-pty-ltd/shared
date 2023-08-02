import { Big } from "big.js"
import { min, max } from "../src/math"

const val1 = new Big(0)
const val2 = new Big(1)
const val3 = new Big(-1)
const val4 = new Big(0.5)

describe("min", () => {
    test("handles variable number of arguments", () => {
        expect(min(val4)).toEqual(val4)
        expect(min(val3, val4)).toEqual(val3)
        expect(min(val2, val3, val4)).toEqual(val3)
        expect(min(val1, val2, val3, val4)).toEqual(val3)
    })

    test("order invariant", () => {
        expect(min(val1, val2, val3, val4)).toEqual(val3)
        expect(min(val4, val3, val2, val1)).toEqual(val3)
    })
})

describe("max", () => {
    test("handles variable number of arguments", () => {
        expect(max(val4)).toEqual(val4)
        expect(max(val3, val4)).toEqual(val4)
        expect(max(val2, val3, val4)).toEqual(val2)
        expect(max(val1, val2, val3, val4)).toEqual(val2)
    })

    test("order invariant", () => {
        expect(max(val1, val2, val3, val4)).toEqual(val2)
        expect(max(val4, val3, val2, val1)).toEqual(val2)
    })
})
