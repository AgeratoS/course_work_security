import * as R from 'ramda';

const shiftRight = R.compose(R.dropLast(1),
                             R.concat('0', R.__));

export default shiftRight;