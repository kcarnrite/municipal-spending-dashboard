import { useState } from "react";

function DropdownFilter({options, currentValue, onSelection}) {
    return (
        <select defaultValue={currentValue} value={currentValue} className="drop-shadow-md" onChange={onSelection}>
            {options.map((item,idx) => (
                <option key={idx} value={item.internalValue}>{item.displayValue}</option>
            ))}
        </select>
    );
}

export default DropdownFilter;