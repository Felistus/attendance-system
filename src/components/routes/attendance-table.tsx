import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { useLayoutEffect, useState } from "react";

export default function AttendanceTable() {
  const user = JSON.parse(localStorage.getItem("userInformation") || "[]");
  const [rowData, setRowData] = useState<any[]>([]);
  useLayoutEffect(() => {
    setRowData(user);
  }, []);
  const [columnDefs] = useState([
    {
      field: "firstName",
      cellStyle: { textTransform: "uppercase" },
      editable: true,
    },
    {
      field: "lastName",
      cellStyle: { textTransform: "uppercase" },
      editable: true,
    },
    { field: "mobile", editable: true },
    { field: "password" },
    { field: "mathematics" },
    { field: "englishLanguage" },
    { field: "physics" },
    { field: "chemistry" },
    { field: "biology" },
    { field: "engineeringDrawing" },
    { field: "philosophy" },
    { field: "generalStudies" },
    { field: "engineeringWorkshop" },
    { field: "statistics" },
    { field: "% attendance" },
  ]);
  return (
    <div className="w-full ag-theme-alpine my-auto h-[500px]  ">
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
}
