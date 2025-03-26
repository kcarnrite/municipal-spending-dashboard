import CheckBox from "./CheckBox";


function CheckBoxModule({moduleState, filterReducer }) {
    function handleTierChange(event) {
        filterReducer({type: event.target.id})
    }
    return (
        <div className="flex gap-3">
            <CheckBox 
            id="ST" 
            labelText="Single Tier" 
            checkedState={moduleState.ST} 
            onChange={handleTierChange}
            />
            <CheckBox
                id="LT"
                labelText="Lower Tier"
                checkedState={moduleState.LT}
                onChange={handleTierChange}
            />
            <CheckBox
                id="UT"
                labelText="Upper Tier"
                checkedState={moduleState.UT}
                onChange={handleTierChange}
            />
        </div>
    )
}

export default CheckBoxModule;