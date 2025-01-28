import { useState, useEffect } from "react";

function Table({headers, table_content}) {
    const APIBASEURL = 'http://localhost:5000/api/'
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        fetch(APIBASEURL + 'category/governance')
        .then(response => response.json())
        .then(data => setTableData(data))
    }, [])

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
                    {tableData.map((row, idx) => (
                        <tr className="border-2 border-black" key={idx}>
                            {row.map((item, idx) => (
                                <td className="border-2 border-black" key={idx}>{item}</td>
                            ))}
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}

export default Table;