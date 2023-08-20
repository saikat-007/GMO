import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    { field: 'userId', headerName: 'User ID', width: 90 },
    {
      field: 'id',
      headerName: 'ID',
      width: 150,
      editable: true,
      headerAlign: 'center',
      
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 200,
      editable: true,
      headerAlign: 'center',
    },
    {
      field: 'body',
      headerName: 'Body',
      type: 'number',
      width: 500,
      editable: true,
      headerAlign: 'center',
    },
  ];
  
const Component1 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const jsonData = await res.json();
            setData(jsonData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container style={{ padding: "30px", width: "90%", marginLeft: "5%" }}>
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                getRowHeight={() => 'auto'}
            />
        </Container>
    );
};

export default Component1;


// <----------------------------------------------- WIHOUT USING DATAGRID ---------------------------------------------------------------->

// import { useEffect, useState } from "react"
// import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
// const Component1 = () => {

//     const [data, setData] = useState([]);
//     const [page, setPage] = useState(0);
//     const [rowperpage, setRowperpage] = useState(4);
//     console.log(data);

//     const fetchData = async () => {
//         try {
//             const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//             const jsonData = await res.json();
//             setData(jsonData);
//         } catch (error) {
//             console.log(error);

//         }
//     }

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const tableHeaders = data.length > 0 ? Object.keys(data[0]) : [];
//     console.log(tableHeaders);


//     const handlechangepage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
//         console.log(event);
//         setPage(newPage)
//     }
//     const handleRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setRowperpage(+event.target.value)
//         setPage(0);
//     }

//     return (
//         <Container style={{ padding: '30px', width: '90%', marginLeft: '5%' }}>
//             <TableContainer >
//                 <Table stickyHeader>
//                     <TableHead>
//                         <TableRow>
//                             {tableHeaders.map((column) => (
//                                 <TableCell key={column}>
//                                     <Typography variant="subtitle1" style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
//                                         {column}
//                                     </Typography>
//                                 </TableCell>
//                             ))}
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {data && data.slice(page * rowperpage, page * rowperpage + rowperpage).map((item, i) => {
//                             return (
//                                 <TableRow key={i}>
//                                     {tableHeaders && tableHeaders.map((el) => {
//                                         let value = item[el];
//                                         return (
//                                             <TableCell key={value}>
//                                                 {value}
//                                             </TableCell>
//                                         )
//                                     })}
//                                 </TableRow>
//                             )
//                         })}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//             <TablePagination
//                     rowsPerPageOptions={[4, 10, 25]}
//                     rowsPerPage={rowperpage}
//                     page={page}
//                     count={data.length}
//                     component="div"
//                     onPageChange={handlechangepage}
//                     onRowsPerPageChange={handleRowsPerPage}
//                 >

//                 </TablePagination>
//         </Container>
//     )
// }

// export default Component1


