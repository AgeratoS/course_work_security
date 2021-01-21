import * as R from 'ramda';

const xor1bit = R.curry((firstBit, secondBit) => {
    if (firstBit.length !== 1 || secondBit.length !== 1)
        throw new Error("Expected bit-string");
    //eslint-disable-next-line
    if ((parseInt(firstBit) === 0) || (parseInt(firstBit) === 1) &&
        (parseInt(secondBit) === 0) || (parseInt(secondBit) === 1))
    {
        if (firstBit === secondBit)
            return "0"
        else
            return "1"
    }
    else throw new Error("Expected bit-string that will be in set {0, 1}");
});

export default xor1bit;