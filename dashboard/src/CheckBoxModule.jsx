
function CheckBoxModule({moduleState, filterReducer }) {
    function handleClick(event) {
        filterReducer({type: event.target.id})
    }
    return (
        <>
            <label htmlFor="ST" >Single Tier</label>
            <input 
                id="ST" 
                checked={moduleState.ST} 
                type="checkbox"
                onClick={handleClick}
                className="drop-shadow-xl"
            />
            <label htmlFor="LT">Lower Tier</label>
            <input 
                id="LT" 
                checked={moduleState.LT} 
                type="checkbox" 
                onClick={handleClick}
            />
            <label htmlFor="UT">Upper Tier</label>
            <input 
                id="UT" 
                checked={moduleState.UT} 
                type="checkbox" 
                onClick={handleClick}
            />
        </>
    )
}

export default CheckBoxModule;