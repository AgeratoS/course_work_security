import {useWith as transformInputWith, compose, zipWith} from 'ramda';
import xor1bit from "../../blocks/xor1bit";
import join from "../../blocks/join";
import split from "../../blocks/split";

const xor1byte = compose(
    join,
    transformInputWith(zipWith(xor1bit), [split, split])
);


export default xor1byte;