import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";

const App2 = () => {
  const [tableData, settableData] = useState([]);

  const url = "https://basic-crud-123.herokuapp.com/user";

  const getUser = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => settableData(res));
  };
  useEffect(() => {
    getUser();
  }, []);

  const columns = [
    {
      title: "Id",
      field: "id",
      filtering: true,
    },
    {
      title: "Name",
      field: "name",
      type: "text",
      filterPlaceholder: "Filter by name",
    },
    {
      title: "Email",
      field: "email",
      type: "email",
      filterPlaceholder: "Filter by email",
    },
    {
      title: "MobileNumber",
      field: "phone",
      type: "numeric",
      align: "left",
      filtering: false,
    },
    {
      title: "Age",
      field: "age",
      emptyValue: () => <em>null</em>,
      filtering: false,
    },
    {
      title: "Gender",
      field: "gender",
      lookup: { M: "male", F: "female", O: "other" },
      align: "left",
    },
    {
      title: "PanCard",
      field: "pancard",
      align: "left",

      filtering: false,
    },
    {
      title: "Register",
      field: "register",
      type: "text",
      align: "left",
      filtering: false,
    },
  ];

  return (
    <div className="app">
      <h1 align="center"> Crud Operation</h1>
      <MaterialTable
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              fetch(url, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newRow),
              })
                .then((res) => res.json())
                .then((res) => res.setableData(res));
              // settableData([...tableData,newRow])
              //  console.log(newRow)
              resolve();
              window.location.reload();
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              fetch(url + "/" + oldRow.id, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newRow),
              })
                .then((res) => res.json())
                .then((res) => res.settableData(res));

              //  const updatedata=[...tableData];
              //  updatedata[oldRow.tableData.id]=newRow;
              //settableData(updatedata);
              resolve();

              window.location.reload();
            }),
          onRowDelete: (oldRow) =>
            new Promise((resolve, reject) => {
              fetch(url + "/" + oldRow.id, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              
              })
                .then((res) => res.json())
                .then((res) => res.settableData(res));
              //  setTimeout(()=>
              //  resolve(),1000)
              resolve();
              window.location.reload();
            }),
        }}
        title="User Detail"
        columns={columns}
        data={tableData}
        options={{
          sorting: false,
          filtering: true,
          pageSizeOptions: [, 2, 5, 10, 20, 25, 50],
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          exportButton: true,
          exportAllData: true,
          exportFileName: "Save by crud",
          pageSize: 2,
          addRowPosition: "first",
          actionsColumnIndex: -1,
          columnsButton: true,

          rowStyle: (data, index) =>
            index % 2 === 0 ? { background: "#f5f5f5" } : null,
        }}
      />
    </div>
  );
};

export default App2;
