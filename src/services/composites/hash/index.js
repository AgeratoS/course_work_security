import * as R from 'ramda';
import text2binary from "../text2binary";
import xor1byte from "../xor1byte";
import normalizeBits from "../normalizeBits";

const normalizeBitsBy8Bits = normalizeBits(8)

const hash = R.compose(
    R.reduce(xor1byte, normalizeBitsBy8Bits("")),
    R.splitEvery(8),
    text2binary
)

export default hash;