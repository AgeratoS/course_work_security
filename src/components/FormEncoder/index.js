import React, {useState} from 'react';
import hash from "../../services/composites/hash";
import hashRepresentation from "../../services/composites/hashRepresentation";

export const FormEncoder = ({onEncode}) => {

    const [text, setText] = useState("");

    const _onEncode = e => {
        e.preventDefault();
        const _hash = hash(text);
        const representation = hashRepresentation(_hash);
        onEncode({
            hash: _hash, representation
        });
    }

    const onChangeText = ({target: {value}}) => setText(value);

    return (
        <div className={"FormEncoder"}>
            <form className={"FormEncoder__form"} onSubmit={_onEncode}>
                <input type="text" className={"FormEncoder__openText"} value={text} onChange={onChangeText}/>
                <button className={"FormEncoder__encode"} type={"submit"}>Закодировать</button>
            </form>
        </div>
    );
};

export default FormEncoder;