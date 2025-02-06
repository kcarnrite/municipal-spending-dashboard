import DropdownFilter from "./DropdownFilter";


function FilterControls({filterState, onFilterChange}) {
    return (
        <div>
            <DropdownFilter 
                options={
                    [{internalValue:"perCapita", displayValue:"By Capita"},
                    {internalValue:"total", displayValue:"Total"}
                    ]}
                onSelection={(event) => onFilterChange({type:'CHANGE_MEASUREMENT', payload:event.target.value})}
                currentValue={filterState.measurementValue}
            />
        </div>
    );

}

export default FilterControls;