import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { useState } from "react";

export default function AttendanceTable() {
  const [rowData] = useState([
    {
      Name: "Toyota",
      "Phone Number": "Celica",
      Count: 35000,
      Password: "123",
      Delete: "Yes",
    },
    {
      Name: "Ford Bendel Hyndai",
      "Phone Number": "Mondeo",
      Count: 32000,
      Password: "123",
      Delete: "Yes",
    },
    {
      Name: "Porsche Mbappe",
      "Phone Number": "FOOTBALLER",
      Count: 72000,
      Password: "123",
      Delete: "Yes",
    },
  ]);
  const [columnDefs] = useState([
    { field: "Name" },
    { field: "Phone Number" },
    { field: "Password" },
    { field: "Mathematics" },
    { field: "English Language" },
    { field: "Physics" },
    { field: "Chemistry" },
    { field: "Biology" },
    { field: "Engineering Drawing" },
    { field: "Philosophy" },
    { field: "General Studies (GST)" },
    { field: "Engineering Workshop" },
    { field: "Statistics" },
    { field: "% Attendance" },
    { field: "Edit", width: 95 },
  ]);
  return (
    <div className="w-full ag-theme-alpine my-auto h-[500px]  ">
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
}
