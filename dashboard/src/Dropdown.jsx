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
    const handleClick = () => {
        setListActive(!listActive)
    }
    return (
        <div onClick={handleClick} className={className} ref={dropdownRef}>
            <p className="cursor-default">{text}</p>
            {listActive ? children : null}
        </div>
    )
}

function SubList({ text, children }) {
    const [listActive, setListActive] = useState(false)
    const handleClick = () => {
        setListActive(!listActive)
    }
    return (
        <div onClick={handleClick}>
            <p>{text}</p>
            {listActive ? children : null}
        </div>
    )
}

function ListItem({ text, onClick}) {
    return (
        <div onClick={onClick}>
            <p>{text}</p>
        </div>
    );
}



export {Dropdown ,SubList, ListItem};