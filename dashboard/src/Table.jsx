import { useState, useEffect, useReducer } from "react";

function dataFetchReducer(state, action) {
    switch (action.type){
        case 'FETCH_INIT':
            return {...state, isLoading:true};
        
        case 'FETCH_FAIL':
            return {...state, isLoading:false, isError:true};
        
        case 'FETCH_SUCCESS':
            return {...state, isLoading:false, isError:false, data:action.payload};
        default:
            new Error()
        
    }
}

function Table({headers, table_content, filters}) {
    const APIBASEURL = 'http://localhost:5000/api/'
    const [table, dispatchTable] = useReducer(dataFetchReducer,{data: [], isLoading: false, isError: false})
    const [sortBy, setSortBy] = useState(null);
    const [descending, setDescending] = useState(false);
    useEffect(() => {
        dispatchTable({type:"FETCH_INIT"})
        fetch(APIBASEURL + 'category/' + filters.query)
        .then(response => response.json())
        .then(data => {
            dispatchTable({type: 'FETCH_SUCCESS', payload: data});
        }).catch(() => dispatchTable({type: 'FETCH_FAIL'}))
    }, [filters.query])

    //TODO: Refactor filtering?
    var tableItems = table;
    if(!filters.ST) {
        tableItems = table.data.filter(item => (
        item[2] != "ST"
        ));
    }
    if(!filters.LT) {
        tableItems = table.data.filter(item => (
            item[2] != "LT"
        ));
    }
    if(!filters.UT) {
        tableItems = table.data.filter(item => (
            item[2] != "UT"
        ));
    }

    function handleSort(id) {
        if(sortBy == id) {
             setDescending(!descending);
        }
        else {
            setDescending(true);
            setSortBy(id);
        }
    }

    if(sortBy != null) {
        tableItems = table.data.sort((a,b) => {
        if(a[sortBy] === b[sortBy]) {
            return 0;
        }

        if(sortBy != 0) {
            if(descending) {
                return parseInt(a[sortBy]) < parseInt(b[sortBy]) ? -1 : 1;
            }
            else {
                return parseInt(a[sortBy]) > parseInt(b[sortBy]) ? -1 : 1;
            }
        }
        else {
            if(descending) {
                return a[sortBy] < b[sortBy] ? -1 : 1;
            }
            else {
                return a[sortBy] > b[sortBy] ? -1 : 1;
            }
        }

    })
    }
        if(table.isError) {
            return <p>Error: Something went wrong...</p>
        }
        else if(table.isLoading) {
            return <img src="/spinner-100.png" className="w-[30px] animate-spin"></img>
        }
        else {
            return (
            <table className="border-collapse">
                <thead>
                    <tr className="border-2 border-black bg-slate-200">
                        {headers.map((label, idx) => (
                            <th className="border-2 border-black" key={idx} onClick={() => handleSort(idx)}>
                                {label + (sortBy == idx ? (descending ? ' \u2191' : ' \u2193') : "")}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                        {table.data.map((item, idx) => (
                            <tr className="border-2 border-black" key={idx}>
                                    <Item data={item} key={idx} />
                            </tr>
                        ))}
                </tbody>
            </table>
       
            )
        }
    }

function Item({data}) {
    return (
        <>
        <td className="border-2 border-black">{data[0]}</td>
        <td className="border-2 border-black tabular-nums text-right">
            ${data[1].replace(/\B(?=(\d{3})+(?!\d))/g,",")}
        </td>
        </>
    )
}

export default Table;