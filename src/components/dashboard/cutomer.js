"use client";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import PublishIcon from "@mui/icons-material/Publish";
import GetAppIcon from "@mui/icons-material/GetApp";
import SearchIcon from "@mui/icons-material/Search";
import dayjs from "dayjs";
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  InputAdornment,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
  fabClasses,
} from "@mui/material";

import { neonBlue } from "../../color";
import { useState } from "react";
import TopContainer from "../layout/topContainer";
// async function userList() {
//   let response = await fetch(apiRoutes.childrenApi);
//   let data = await response.json();

//   return data.users;
// }

export default function Customer({ customer }) {
  const [rows, rowchange] = useState([]);
  const [page, pageChange] = useState(0);
  const [rowperpage, rowperpagechange] = useState(5);
  const [selectAll, setSelectAll] = useState(false);
  const [selectOne, setSelectOne] = useState(false);
  let [count, setCount] = useState(0);

  const handleRowsPerPage = (event) => {
    console.log("handleRowsPerPage");
    rowperpagechange(+event.target.value);
    pageChange(0);
  };

  const handlePageChange = (event, newpage) => {
    console.log(newpage, event);
    pageChange(newpage);
  };

  const setCheckedParent = () => {
    customer.map((item) => {
      setchecked[1];
    });
  };
  const onSelectOneClick = (e) => {
    console.log(e);
  };
  return (
    <Stack margin={4}>
      <TopContainer name="Customer" />
      <Card>
        <Box>
          <TableContainer component="Paper">
            <Table sx={{ minWidth: "600px" }}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox
                    // label="Parent"
                    // onChange={(e) => {
                    //   if (count == customer.length) {
                    //     e.target.checked == true;
                    //   }
                    // }}
                    />
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>SignedUp</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customer &&
                  customer
                    .slice(page * rowperpage, page * rowperpage + rowperpage)
                    .map((item) => {
                      return (
                        <TableRow key={item.id}>
                          <TableCell>
                            <Checkbox
                              onChange={(e) => {
                                if (e.target.checked == true) setCount(count++);
                                if (e.target.checked == false)
                                  if (count > 0) setCount(count--);
                              }}
                            />
                          </TableCell>
                          <TableCell align="left">
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems={"center"}
                            >
                              <Avatar src={item.avatar} />
                              {"  " + item.name}
                            </Stack>
                          </TableCell>
                          <TableCell align="left"> {item.email}</TableCell>

                          <TableCell align="left">
                            {item.address.city},{item.address.state}
                            {item.address.country}
                          </TableCell>
                          <TableCell align="left">{item.phone}</TableCell>
                          <TableCell align="left">
                            {dayjs(item.createdAt).format("MMM D, YYYY")}
                          </TableCell>
                        </TableRow>
                      );
                    })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[2, 6, 10]}
            page={page}
            rowsPerPage={rowperpage}
            component="div"
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPage}
            count={customer.length}
          />
        </Box>
      </Card>
      {/* let users = await userList();
    <div>
      {users.map((item) => (
        <div key={item.id}>
          {item.id}
          <Link href={`/dashboard/settings/${item.id}`}>
            {item.firstName + "        "}
          </Link>
          <DeleteUser id={item.id} />
        </div>
      ))}
    </div> */}
    </Stack>
  );
}
