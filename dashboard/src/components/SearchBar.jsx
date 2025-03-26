import { useState } from "react";

function SearchBar({searchState, setSearchState}) {
    return (
        <input type="text" 
            className="shadow-md rounded-md border px-2 md:w-32 flex-none" 
            placeholder='Search' 
            value={searchState} 
            onChange={setSearchState}/>
    )

}

export default SearchBar;