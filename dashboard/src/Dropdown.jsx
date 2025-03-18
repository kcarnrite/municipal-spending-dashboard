import { useState, useRef, useEffect } from "react";

function Dropdown({ text, children, className}) {
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
    const handleClick = (event) => {
        setListActive(true)
        if(event.target.dataset.type == 'item') {
            setListActive(false)
        }
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
        <>
            <p data-type="sublist" onClick={handleClick}>{text}</p>
            {listActive ? children : null}
        </>
    )
}

function ListItem({ text, onClick}) {
    return (
        <p data-type="item" onClick={onClick}>{text}</p>
    );
}



export {Dropdown ,SubList, ListItem};