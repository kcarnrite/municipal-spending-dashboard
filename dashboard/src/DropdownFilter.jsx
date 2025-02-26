import { useState } from "react";

function DropdownFilter({options, currentValue, onSelection}) {
    return (
        <select value={currentValue} className="drop-shadow-md" onChange={onSelection}>
            {options.length == 0 ? <option>Loading...</option> : null}
            {options.map((item,idx) => (
                <option key={idx} value={item.internalValue}>{item.displayValue}</option>
            ))}
        </select>
    );
}

export default DropdownFilter;