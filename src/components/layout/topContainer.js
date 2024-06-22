import React from "react";
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
} from "@mui/material";

import { neonBlue } from "../../color";

function topContainer({ name }) {
  return (
    <div>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant={"h4"} fontWeight={300}>
          {name}
        </Typography>
        <Button
          sx={{
            backgroundColor: neonBlue[400],
            color: "whitesmoke",
            width: "26",
          }}
          startIcon={<AddRoundedIcon />}
        >
          Add
        </Button>
      </Stack>
      <Stack direction={"row"}>
        <Button
          sx={{ color: "inherit", size: "20", fontWeight: 300, marginRight: 2 }}
          startIcon={<PublishIcon fontWeight={200} />}
        >
          Import
        </Button>
        <Button
          sx={{ color: "inherit", size: "20", fontWeight: 300 }}
          startIcon={<GetAppIcon />}
        >
          Export
        </Button>
      </Stack>
      <Paper
        width={"100%"}
        sx={{
          height: 90,

          alignContent: "center",
          justifyItems: "center",
          borderRadius: 4,
          marginTop: 5,
          marginBottom: 2,
        }}
      >
        <TextField
          placeholder="Search Customers"
          sx={{
            m: 1,
            width: "70%",
            alignContent: "center",
            justifyItems: "center",
            borderRadius: 4,
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: neonBlue[400],
              },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Paper>
    </div>
  );
}

export default topContainer;
