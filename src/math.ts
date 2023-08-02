import { Big } from "big.js"

export function min(...args: [Big, ...Big[]]): Big {
    let x = args[0]
    for (let i = 1; i < args.length; i++) {
        if (x.gt(args[i])) x = args[i];
    }
    return x
}

export function max(...args: [Big, ...Big[]]): Big {
    let x = args[0]
    for (let i = 1; i < args.length; i++) {
        if (x.lt(args[i])) x = args[i];
    }
    return x
}
