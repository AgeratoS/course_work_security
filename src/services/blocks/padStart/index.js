import * as R from 'ramda';

const padStart = R.curry((baseString, targetLength, padString) => {
    targetLength = targetLength >> 0;
    padString = String(padString || ' ');
    if (baseString.length > targetLength) {
        return String(baseString);
    } else {
        targetLength = targetLength - baseString.length;
        if (targetLength > padString.length) {
            padString += padString.repeat(targetLength / padString.length);
        }
        return padString.slice(0, targetLength) + String(baseString);
    }
});


export default padStart;