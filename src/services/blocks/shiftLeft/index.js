import * as R from 'ramda';

const shiftLeft = R.compose(R.drop(1),
                            R.concat(R.__, '0'));

export default shiftLeft;