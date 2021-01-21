import * as R from "ramda";

const decode = (accumulator, hashBlock) => accumulator + String.fromCharCode(parseInt(hashBlock,2))

const hashRepresentation = R.compose(
    R.reduce(decode, ""),
    R.splitEvery(8)
)


export default hashRepresentation;