import "./App.css";
import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
function App() {
  return (
    <div className="App">
      <h1>Material Table</h1>
      <hr />
      <br />
      <MaterialTable
        columns={[
          {
            title: "Sl. No.",
            field: "slNo",
          },
          {
            title: "Name",
            field: "name",
          },

          {
            title: "Email",
            field: "email",
          },
          {
            title: "Birth Year",
            field: "birthYear",
          },
          {
            title: "Age",
            field: "age",
          },
        ]}
        data={[
          {
            slNo: 1,
            name: "Nabarun",
            email: "nabarun@gmail.com",
            birthYear: "1995",
            age: 26,
          },
          {
            slNo: 2,
            name: "Bunny",
            email: "bunny@gmail.com",
            birthYear: "1998",
            age: 23,
          },
          {
            slNo: 3,
            name: "Nobita",
            email: "nobita@gmail.com",
            birthYear: "1999",
            age: 21,
          },
          {
            slNo: 4,
            name: "Chiru",
            email: "chiru@gmail.com",
            birthYear: "1995",
            age: 26,
          },
          {
            slNo: 5,
            name: "Asif",
            email: "asif@gmail.com",
            birthYear: "1992",
            age: 28,
          },
        ]}
        options={{
          exportMenu: [
            {
              label: "Export Pdf",
              exportFunc: (cols, datas) =>
                ExportPdf(cols, datas, "Ticket Records"),
            },
            {
              label: "Export Csv",
              exportFunc: (cols, datas) =>
                ExportCsv(cols, datas, "Ticket Records"),
            },
          ],
          headerStyle: {
            backgroundColor: "darkblue",
            color: "#fff",
          },
          rowStyle: {
            backgroundColor: "#eee",
          },
        }}
        title="PROFILE RECORDS"
      />
    </div>
  );
}

export default App;
