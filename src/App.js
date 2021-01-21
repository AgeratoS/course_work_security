import React from "react";
import './App.css';
import FormEncoder from "./components/FormEncoder";
import DisplayHash from "./components/DisplayHash";

const App = () => {
    const [wasEncoded, setWasEncoded] = React.useState(false);
    const [hashObject, setHashObject] = React.useState(null);

    const onEncode = (hashObject) => {
        setWasEncoded(true);
        setHashObject(hashObject)
    }

    return (
        <div className="App">
            <FormEncoder onEncode={onEncode}/>
            <DisplayHash display={wasEncoded} hashObject={hashObject}/>
        </div>
    )
};

export default App;
