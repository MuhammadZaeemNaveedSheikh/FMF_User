import { DataGrid, GridColDef } from "@mui/x-data-grid";

const AffiliateTab = () => {
  const columns: GridColDef[] = [
    {
      field: "index",
      headerName: "Number",
      width: 200,
      editable: false,
      renderCell: (params) => {
        const index = params.value;
        return <span style={{ color: "blue" }}>{index}</span>;
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: false,
    },
    {
      field: "publicId",
      headerName: "Public Wallet ID",
      width: 150,
      editable: false,
    },
    {
      field: "totalEarned",
      headerName: "Total $ Earned",
      width: 150,
      editable: false,
    },
    {
      field: "completed",
      headerName: "Completed/Incomplete",
      width: 150,
      editable: false,
      renderCell: (params) => {
        const status = params.value;
        const color =
          status === "Incomplete"
            ? "blue"
            : status === "Completed"
            ? "#0EAD69"
            : "white";
        return <span style={{ color }}>{status}</span>;
      },
    },
  ];

  const rows = [
    {
      id: 1,
      index: "1",
      name: "Alan",
      publicId: "88wT...DaV7",
      totalEarned: "7269.3",
      completed: "Completed",
    },
    {
      id: 2,
      index: "2",
      name: "John",
      publicId: "88wT...DaV7",
      totalEarned: "7269.3",
      completed: "Incomplete",
    },
    {
      id: 3,
      index: "3",
      name: "Jane",
      publicId: "88wT...DaV7",
      totalEarned: "7269.3",
      completed: "Completed",
    },
    {
      id: 4,
      index: "4",
      name: "Doe",
      publicId: "88wT...DaV7",
      totalEarned: "7269.3",
      completed: "Incomplete",
    },
  ];

  return (
    <section className="mt-8 flex flex-wrap justify-center items-center">
      <div className="w-full mt-6 flex-wrap lg:flex-nowrap flex gap-4 justify-center lg:justify-start">
        <div className="w-1/3 flex flex-col justify-center items-center lg:items-start rounded-2xl cursor-pointer p-1 lg:p-3 bg-[#151322]">
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

export default AffiliateTab;
