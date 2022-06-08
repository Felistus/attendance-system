import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { useContext, useLayoutEffect, useState } from "react";
import { UserDetailsContext } from "../context/context-file";

export default function AttendanceTable() {
  const userDetails = useContext(UserDetailsContext).userDetails;
  const [rowData, setRowData] = useState<any>([]);
  useLayoutEffect(() => {
    setRowData(userDetails);
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
    { field: "biology" },
    { field: "chemistry" },
    { field: "engineeringDrawing" },
    { field: "engineeringWorkshop" },
    { field: "englishLanguage" },
    { field: "generalStudies" },
    { field: "mathematics" },
    { field: "physics" },
    { field: "philosophy" },
    { field: "statistics" },
    { field: "percentageAttendance" },
  ]);
  return (
    <div className="w-full ag-theme-alpine my-auto h-[500px]  ">
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
}
