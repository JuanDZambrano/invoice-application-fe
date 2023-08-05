export const SalesTableSchema = [
  { field: "date", headerName: "Fecha", width: 70 },
  {
    field: "customer",
    headerName: "Cliente",
    width: 230,
    renderCell: (params: { row: { username: string; img: string } }) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params: { row: { status: string } }) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
