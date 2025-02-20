import DropdownFilter from "./DropdownFilter";
import CheckBoxModule from "./CheckBoxModule"


function FilterControls({filterState, onFilterChange}) {
    return (
        <div className="mx-30 flex-nowrap flex gap-8">
            <DropdownFilter 
                options={
                    [{internalValue:"total", displayValue:"Total"},
                    {internalValue:"perCapita", displayValue:"By Capita"}
                    ]}
                onSelection={(event) => onFilterChange({type:'CHANGE_MEASUREMENT', payload:event.target.value})}
                currentValue={filterState.measurementValue}
            />

            <DropdownFilter
                options={
                    [
                        {displayValue: "Governance", internalValue: "governance"},
                        {displayValue: "Fire", internalValue: "fire"},
                        {displayValue: "Police", internalValue: "police"},
                        {displayValue: "Paved Roads", internalValue: "pavedRoads"},
                        {displayValue: "Unpaved Roads", internalValue: "unpavedRoads"},
                    ]
                }
                onSelection={(event) => onFilterChange({type: 'CHANGE_QUERY', payload:event.target.value})}
                currentValue={filterState.query}
            />

            <CheckBoxModule moduleState={filterState} filterReducer={onFilterChange} />
        </div>
    );

}

export default FilterControls;