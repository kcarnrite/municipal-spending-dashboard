import { useState, useEffect } from "react";

function Table({headers, table_content, filters}) {
    const APIBASEURL = 'http://localhost:5000/api/'
    const [tableData, setTableData] = useState([])
    const [sortBy, setSortBy] = useState(null);
    const [descending, setDescending] = useState(false);
    useEffect(() => {
        fetch(APIBASEURL + 'category/' + filters.query)
        .then(response => response.json())
        .then(data => {
            setTableData(data);
        })
    }, [filters.query])

    //TODO: Refactor filtering?
    var tableItems = tableData;
    if(!filters.ST) {
        tableItems = tableItems.filter(item => (
        item[2] != "ST"
        ));
    }
    if(!filters.LT) {
        tableItems = tableItems.filter(item => (
            item[2] != "LT"
        ));
    }
    if(!filters.UT) {
        tableItems = tableItems.filter(item => (
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
        tableItems = tableItems.sort((a,b) => {
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
                    {tableItems.map((item, idx) => (
                        <tr className="border-2 border-black" key={idx}>
                                <Item data={item} key={idx} />
                        </tr>
                    ))}
            </tbody>
        </table>
    )
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