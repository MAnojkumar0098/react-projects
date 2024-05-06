// table.js
import React from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import './table.css';

function Table(props) {
    const data = props.data;

    return (
        <div>
            <table className="styled-table" id="table-to-xls">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Year</th>
                        <th>Place</th>
                        <th>Center</th>
                        <th>Treatment Period</th>
                        <th>Sobriety Period</th>
                        <th>Reason for Soberness</th>
                        <th>Relapse Period</th>
                    </tr>
                </thead>
                <tbody id="tb">
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.id}</td>
                            <td>{item.year}</td>
                            <td>{item.place}</td>
                            <td>{item.center}</td>
                            <td>{`${item.tperiod_value} ${item.tperiod_unit}`}</td>
                            <td>{`${item.speriod_value} ${item.speriod_unit}`}</td>
                            <td>{item.reason === 'others' ? item.otherReason : item.reason}</td>
                            <td>{`${item.relapse_value} ${item.relapse_unit}`}</td>
                            <td>{/* Add your action component or content here */}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ReactHTMLTableToExcel
                id="export-excel"
                className="button-71    "
                table="table-to-xls"
                filename="table"
                sheet="tabledata"
                buttonText="Export to Excel"
            />
        </div>
    );
}

export default Table;
