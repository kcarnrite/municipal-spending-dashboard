import { useState, useRef, useEffect } from "react";

function MoreFilters({children}) {
    var dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        function handleClickOutside() {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsActive(false);
            }
        }

            if(isActive) {
                document.addEventListener('mousedown', handleClickOutside);
            }
        
            return() => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
    }, [isActive])
    return (
        <div 
            className="shadow-md hidden md:inline rounded-md select-none"
            ref={dropdownRef}>
             
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