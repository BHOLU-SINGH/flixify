"use client"

import { useState } from "react";

const Page = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="container center fd-column">
            <input type="text" value={inputValue} onChange={handleChange} style={{gap: "5"}} />
            <p style={{color: "#fff"}}>Input value: {inputValue}</p>
        </div>
    );
}
export default Page;