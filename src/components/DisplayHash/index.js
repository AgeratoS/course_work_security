import * as React from 'react';

const DisplayHash = ({display, hashObject}) => (
    display && hashObject && <div className="DisplayHash">
        <h1>Данные кодирования</h1>
        <p>Хэш в бинарном виде: {hashObject.hash}</p>
        <p>Хэш в символьном виде: {hashObject.representation}</p>
    </div>
);

export default DisplayHash;