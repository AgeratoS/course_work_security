import _2binarySymbol from "../../blocks/_2binarySymbol";
import normalizeBits from "../normalizeBits";
import * as R from 'ramda';

const normalizeBy8Bit = normalizeBits(8)
const addingRightByte = R.compose(normalizeBy8Bit, _2binarySymbol);

const _2binaryText = charArr =>
    charArr.reduce((binaryRepresentation, nextSymbol) => {
        return binaryRepresentation + addingRightByte(nextSymbol)
    }, "")

export default _2binaryText;