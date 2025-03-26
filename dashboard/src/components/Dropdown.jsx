import { useState, useRef, useEffect } from "react";

function Dropdown({ text, children, className}) {
    const [listActive, setListActive] = useState(false)
    var dropdownRef = useRef(null)

    useEffect(() => {
        function handleClickOutside() {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setListActive(false)
            }
        }

        if(listActive) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [listActive])
    const handleClick = (event) => {
        setListActive(true)
        if(event.target.dataset.type != 'sublist') {
            setListActive(!listActive)
        }
    }
    return (
        <div onClick={handleClick} className={"bg-white rounded-md shadow-md" } ref={dropdownRef}>
            <div className="flex flex-row select-none rounded-md items-center justify-items-start gap-4 px-4 hover:bg-gray-300">
                <p >{children ? text : 'Loading...'}</p>
                <p className="text-xs justify-self-end">▼</p>
            </div>
            <div className="absolute rounded-md shadow-lg">
                {listActive ? children : null}
            </div>
        </div>
    )
}

function SubList({ text, children }) {
    const [listActive, setListActive] = useState(false)
        var dropdownRef = useRef(null)
        useEffect(() => {
        function handleClickOutside() {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                console.log("HANDLE CLICK ACTIVATED")
                setListActive(false)
            }
        }

        if(listActive) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [listActive])
    const handleClick = () => {
        setListActive(!listActive)
    }
    return (
        <div onClick={handleClick} data-type="sublist" className="flex flex-row select-none px-6 bg-gray-100 hover:bg-gray-300" ref={dropdownRef}>
            <p data-type="sublist">{text}</p>
            <div className="flex flex-col absolute md:left-full shadow-lg w-fit ">
                {listActive ? children : null}
            </div>
        </div>
    )
}

function ListItem({ text, onClick}) {
    return (
        <div>
            <p data-type="item" className="select-none px-6 hover:bg-gray-300 bg-gray-100 md:text-nowrap"onClick={onClick}>
                {text}
            </p>
        </div>
    );
}



export {Dropdown ,SubList, ListItem};