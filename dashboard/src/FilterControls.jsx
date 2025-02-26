import DropdownFilter from "./DropdownFilter";
import CheckBoxModule from "./CheckBoxModule"
import CheckBox from "./CheckBox"
import { useEffect, useState } from "react";
const APIBASEURL = 'http://localhost:5000/api/'


function FilterControls({filterState, onFilterChange}) {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch(`${APIBASEURL}/get_categories`)
        .then(response => response.json())
        .then(data => setCategories(data))
    }, [])
    var category_values = [];
    if(!categories) {
        category_values = [{internalValue: 240, displayValue: 'Governance'}]
    }
    for(var category in categories) {
        var line_number = categories[category][0]
        var value = categories[category][1]
        category_values.push({internalValue: line_number, displayValue: value});
    }
    return (
        <div className="mx-30 flex-nowrap flex gap-8 my-2">
            <DropdownFilter 
                options={
                    [{internalValue:"total", displayValue:"Total"},
                    {internalValue:"perCapita", displayValue:"By Capita"}
                    ]}
                onSelection={(event) => onFilterChange({type:'CHANGE_MEASUREMENT', payload:event.target.value})}
                currentValue={filterState.measurementValue}
            />

            <DropdownFilter
                options={category_values
                    /*
                    [
                        {displayValue: "Governance", internalValue: "governance"},
                        {displayValue: "Fire", internalValue: "fire"},
                        {displayValue: "Police", internalValue: "police"},
                        {displayValue: "Paved Roads", internalValue: "paved Roads"},
                        {displayValue: "Unpaved Roads", internalValue: "unpaved Roads"},
                    ]
                        */
                }
                onSelection={(event) => onFilterChange({type: 'CHANGE_QUERY', payload:event.target.value})}
                currentValue={filterState.query}
            />

            <CheckBoxModule moduleState={filterState} filterReducer={onFilterChange} />
            < CheckBox 
            id="low-population" 
            labelText="Hide Low Population Municipalities"
            checkedState={filterState.hideLowPopulation}
            onChange = {() => onFilterChange({type: "HIDE_LOW_POPULATION"})} />
        </div>
    );

}

export default FilterControls;