import { useState } from "react";

function Table({headers, table_content}) {
    const border_size = "border-1"
    return (
        <table class="border-collapse table-auto">
            <thead>
                <tr class="border-2 border-black bg-slate-200">
                    {headers.map((label, idx) => (
                        <th class="border-2 border-black" key={idx}>{label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                    {table_content.map((row, idx) => (
                        <tr class="border-2 border-black" key={idx}>
                            {row.map((item, idx) => (
                                <td class="border-2 border-black" key={idx}>{item}</td>
                            ))}
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}

export default Table;