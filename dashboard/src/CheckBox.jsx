
function CheckBox({id, labelText, checkedState, onChange}) {
    return (
    <div>
        <label htmlFor={id} className="mr-1">{labelText}</label>
        <input
            id={id}
            checked={checkedState} 
            type="checkbox"
            onChange={onChange}
            className="accent-green-900"
        />
    </div>
    )

}

export default CheckBox;