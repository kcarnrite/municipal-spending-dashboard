import { useState } from "react";

function MoreFilters({children}) {
    const [isActive, setIsActive] = useState(false)
    return (
        <div 
            className="shadow-md invisible md:visible rounded-md select-none">
             
            <div className='hover:bg-gray-300 px-4 rounded-md' onClick={() => setIsActive(!isActive)}>
                <p >More Filters</p>
            </div>
             {
                isActive ? (
                <div className="absolute bg-white flex-row px-8 py-2 shadow-lg bg-gray-200">
                    {children}
                </div>       
                ) : ''
            }
            
            
        </div>
    )

}
export default MoreFilters;