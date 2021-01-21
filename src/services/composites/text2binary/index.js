import {compose} from "ramda";
import _2binaryText from "../_2binaryText";
import text2array from "../../blocks/text2array";

const text2binary = compose(_2binaryText, text2array);

export default text2binary;
