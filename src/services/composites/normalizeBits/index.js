import * as R from 'ramda';
import padStart from "../../blocks/padStart";

const normalizeBits = R.flip(R.partialRight(padStart, ["0"]));

export default normalizeBits;