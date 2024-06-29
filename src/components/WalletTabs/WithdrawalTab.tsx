import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Add from "/Icons/add-icon-withdraw-card.svg";
import Delete from "/Icons/delete-withdrawal.svg";
import Withdraw from "/Icons/withdraw-icon.svg";

const WithdrawalTab = () => {
  const columns: GridColDef[] = [
    {
      field: "orderId",
      headerName: "Order ID",
      width: 200,
      editable: false,
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      editable: false,
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 150,
      editable: false,
    },
    {
      field: "totalQuestions",
      headerName: "Total Questions",
      width: 150,
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      editable: false,
      renderCell: (params) => {
        const status = params.value;
        const color =
          status === "Pending"
            ? "blue"
            : status === "Success"
            ? "#0EAD69"
            : "white";
        return <span style={{ color }}>{status}</span>;
      },
    },
  ];

  const rows = [
    {
      id: 1,
      orderId: "#2342",
      date: "Mar 1, 2023",
      amount: "100",
      totalQuestions: "4",
      status: "Success",
    },
    {
      id: 2,
      orderId: "#6387",
      date: "Apr 2, 2023",
      amount: "200",
      totalQuestions: "2",
      status: "Pending",
    },
    {
      id: 3,
      orderId: "#8237",
      date: "June 5, 2023",
      amount: "570",
      totalQuestions: "6",
      status: "Success",
    },
    {
      id: 4,
      orderId: "#9236",
      date: "July 7, 2023",
      amount: "230",
      totalQuestions: "4",
      status: "Pending",
    },
  ];

  return (
    <section className="mt-8 flex flex-wrap justify-center items-center">
      <div className="w-full mt-6 flex-wrap lg:flex-nowrap flex gap-4 justify-center">
        <div className="w-full flex flex-col justify-center items-start rounded-2xl cursor-pointer p-1 lg:p-3 bg-[#151322]">
          <h3 className="font-[Montserrat] text-[16px]">
            Total From Affiliate
          </h3>
          <h2 className="font-[Montserrat] text-[22px] font-medium text-[#0EAD69]">
            $430.00
          </h2>
          <p className="font-[Montserrat] text-[10px]">
            as of 01-December 2023
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-start rounded-2xl cursor-pointer p-1 lg:p-3 bg-[#151322]">
          <h3 className="font-[Montserrat] text-[16px]">
            Total From Trading Gains
          </h3>
          <h2 className="font-[Montserrat] text-[22px] font-medium text-[#0EAD69]">
            $430.00
          </h2>
          <p className="font-[Montserrat] text-[10px]">
            as of 01-December 2023
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-start rounded-2xl cursor-pointer bg-[#151322]">
          <div className="px-1 pt-1 lg:px-3 lg:pt-3 w-full flex justify-between">
            <h3 className="font-[Montserrat] text-[16px]">Withdrawal Method</h3>
            <img src={Add} alt="add" />
          </div>
          <div className="mt-2 w-full flex justify-between bg-[#5B1CD4] rounded-md p-2">
            <span className="flex gap-2">
              <img src={Withdraw} alt="add" />
              <h2 className="font-[Montserrat] text-[16px] font-medium">
                1502*******4721
              </h2>
            </span>
            <img src={Delete} alt="delete" />
          </div>
        </div>
      </div>
      <div id="table" className="mt-6 w-full">
        <div
          id="table-tabs"
          className="w-full flex justify-center lg:justify-start gap-4"
        >
          <button className="px-4 lg:px-14 py-2 rounded-full bg-[#151322] font-[Montserrat] fomt-medium text-[17px] ">
            All
          </button>
          <button className="px-4 lg:px-14 py-2 rounded-full bg-[#151322] font-[Montserrat] fomt-medium text-[17px] ">
            Affiliate Commissions
          </button>
          <button className="px-4 lg:px-14 py-2 rounded-full bg-[#151322] font-[Montserrat] fomt-medium text-[17px] ">
            Trading Gains
          </button>
        </div>
        <div className="mt-6 overflow-x-auto">
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
        </div>
      </div>
    </section>
  );
};

export default WithdrawalTab;
