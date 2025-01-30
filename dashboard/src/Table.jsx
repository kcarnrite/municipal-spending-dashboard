import { useState, useEffect } from "react";

function Table({headers, table_content, filters}) {
    const APIBASEURL = 'http://localhost:5000/api/'
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        fetch(APIBASEURL + 'category/governance')
        .then(response => response.json())
        .then(data => setTableData(data))
    }, [])

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

    return (
        <table className="border-collapse">
            <thead>
                <tr className="border-2 border-black bg-slate-200">
                    {headers.map((label, idx) => (
                        <th className="border-2 border-black" key={idx}>{label}</th>
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