import { useState } from "react";
const POSSIBLE_ITEMS = [
    {displayValue: "Governance", queryValue: "governance"},
    {displayValue: "Fire", queryValue: "fire"},
    {displayValue: "Police", queryValue: "police"},
    {displayValue: "Paved Roads", queryValue: "pavedRoads"},
    {displayValue: "Unpaved Roads", queryValue: "unpavedRoads"},
]

function DataSelector({filterDispatch}) {
    return (
        <select className="drop-shadow-md" onChange={event => filterDispatch({type: "changeQuery", payload: event.target.value}) }>
            {POSSIBLE_ITEMS.map(item => (
                <option key={item.queryValue} value={item.queryValue}>{item.displayValue}</option>
            ))}
        </select>
    );
}

export default DataSelector;