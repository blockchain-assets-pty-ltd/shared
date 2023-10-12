import type { Big } from "big.js"
import type { DateTime } from "luxon"

export type Liability = {
    id: number
    balance: Big
    description: string
    openDate: DateTime
    closeDate: DateTime | null
}
