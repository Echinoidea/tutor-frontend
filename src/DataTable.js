import React from "react";

const DataTable = ({data}) => {
    if (!data || data.length === 0) {
        return <p>Loading data...</p>
    }

    return (
        <table>
            <tr>
            <th>Class ID</th>
            <th>Student</th>
            <th>Coach</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            </tr>

            {data.map((classRow) => (
            <tr key={classRow.id}>
                <td>{classRow.id}</td>
                <td>{classRow.student_id}</td>
                <td>{classRow.coach_id}</td>
                <td>{classRow.subject}</td>
                <td>{classRow.class_date}</td>
                <td>{classRow.start_time}</td>
                <td>{classRow.end_time}</td>
            </tr>
            ))}
        </table>
    )
}

export default DataTable;