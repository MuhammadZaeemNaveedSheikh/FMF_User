import { useState } from "react";
import { DataGrid, GridColDef, GridMoreVertIcon } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";

import SearchIcon from "/Icons/search-icon.svg";
import DeleteIcon from "/Icons/delete-icon.svg";
import ScanIcon from "/Icons/scan-icon.svg";
import CalendarTodayIcon from "/Icons/calendar-icon.svg";
import SortByAlphaIcon from "/Icons/filter-icon.svg";

const CustomersList = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxClick = (rowId) => {
    // @ts-ignore
    setSelectedRows((prevSelectedRows) => {
      // @ts-ignore
      if (prevSelectedRows.includes(rowId)) {
        return prevSelectedRows.filter((id) => id !== rowId);
      } else {
        return [...prevSelectedRows, rowId];
      }
    });
  };

  const renderCheckbox = (params) => {
    return (
      <input
        type="checkbox"
        // @ts-ignore
        checked={selectedRows.includes(params.row.id)}
        onChange={() => handleCheckboxClick(params.row.id)}
      />
    );
  };

  const columns: GridColDef[] = [
    {
      field: "checkbox",
      headerName: "",
      sortable: false,
      width: 50,
      renderCell: renderCheckbox,
    },
    {
      field: "customerName",
      headerName: "Customer Name",
      width: 200,
      editable: false,
      renderCell: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            // src="/path/to/avatar.png"
            alt={params.value}
            sx={{
              width: 40,
              height: 40,
              borderRadius: 4,
              marginRight: 1,
            }}
          />
          {params.value}
        </div>
      ),
    },
    {
      field: "dateAdded",
      headerName: "Date Added",
      width: 150,
      editable: false,
    },
    {
      field: "package",
      headerName: "Package",
      width: 150,
      editable: false,
      renderCell: (params) => (
        <div className="bg-[#5B1CD4] text-white rounded-md px-2 py-1 text-center w-20 cursor-pointer">
          {params.value}
        </div>
      ),
    },
    {
      field: "totalPnl",
      headerName: "Total PnL",
      width: 150,
      editable: false,
      renderCell: (params) => (
        <div className="bg-[#5B1CD4] text-white rounded-md px-2 py-1 text-center w-20 cursor-pointer">
          {params.value}
        </div>
      ),
    },
    {
      field: "moreOptions",
      headerName: "",
      width: 50,
      sortable: false,
      renderCell: () => <GridMoreVertIcon className="text-gray-400" />,
    },
  ];

  const rows = [
    {
      id: 1,
      customerName: "AlphaUI Kit",
      dateAdded: "December 2, 2021",
      package: "Pack 1",
      totalPnl: "$5,524.81",
    },
    {
      id: 2,
      customerName: "Figma Icon Set",
      dateAdded: "May 12, 2021",
      package: "Pack 2",
      totalPnl: "$5,524.81",
    },
    {
      id: 3,
      customerName: "IconSet",
      dateAdded: "April 3, 2021",
      package: "Pack 3",
      totalPnl: "$5,524.81",
    },
    {
      id: 4,
      customerName: "Dashboard",
      dateAdded: "April 14, 2021",
      package: "Pack 4",
      totalPnl: "$5,524.81",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div>
          {selectedRows.length > 0 && (
            <span className="text-purple-600 font-[Inter] text-[13.5px]">
              {selectedRows.length} Customer{selectedRows.length > 1 ? "s" : ""}{" "}
              Selected
            </span>
          )}
        </div>
        <div className="flex space-x-2 lg:space-x-4 flex-wrap lg:flex-nowrap gap-2 md:gap-0">
          <img className="cursor-pointer" src={SortByAlphaIcon} alt="icon" />
          <img className="cursor-pointer" src={CalendarTodayIcon} alt="icon" />
          <img className="cursor-pointer" src={ScanIcon} alt="icon" />
          <img className="cursor-pointer" src={DeleteIcon} alt="icon" />
          <div className="flex gap-2">
            <select className="pl-4 lg:pl-10 pr-2 lg:pr-4  py-2 rounded-lg bg-[#151322] font-Inter text-[13.5px] text-[#606573]">
              <option value="">Sort By</option>
              <option value="option1">Customer Name</option>
              <option value="option2">Date Added</option>
              <option value="option3">Package</option>
              <option value="option4">Total PnL</option>
            </select>
            <div className="relative">
              <img
                src={SearchIcon}
                alt="icon"
                className="hidden lg:block absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="text"
                placeholder="Search product"
                className="pl-4 lg:pl-10 pr-2 lg:pr-4 py-2 rounded-lg bg-[#151322] text-white placeholder:font-Inter placeholder:text-[13.5px] placeholder:text-[#606573]"
              />
            </div>
          </div>
        </div>
      </div>
      <DataGrid
        sx={{
          border: "none",
          color: "white",
          backgroundColor: "transparent",
          borderRadius: "16px",
          ".MuiDataGrid-columnHeaders": {
            backgroundColor: "#151322",
            color: "#CBCCCD",
            fontSize: "13.5px",
            fontFamily: "Inter",
            fontWeight: "bold",
            borderRadius: "16px",
          },
          ".MuiDataGrid-cell": {
            fontSize: "14px",
            fontWeight: 500,
          },
          ".MuiDataGrid-row": {
            height: "60px",
            color: "#5A5F6D",
            "&:nth-of-type(even)": {
              backgroundColor: "#151322",
            },
          },
        }}
        rows={rows}
        getRowId={(row) => row.id}
        columns={columns}
        hideFooter
        autoHeight
      />
    </>
  );
};

export default CustomersList;
