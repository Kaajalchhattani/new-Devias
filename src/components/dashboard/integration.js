import React from "react";
import dayjs from "dayjs";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Icon,
  IconButton,
  Pagination,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import TopContainer from "../layout/topContainer";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function integration({ data }) {
  return (
    <Stack margin={4}>
      <TopContainer name="Integration" marginBottom={3} />

      {data.map((item) => (
        <Paper
          sx={{ marginTop: 3, height: "210px", padding: 2, borderRadius: 4 }}
          elevation={1}
        >
          <Stack justifyContent={"center"} alignItems={"center"} spacing={2}>
            <Avatar src={item.logo} variant="square" />

            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="body1" textAlign={"center"}>
              {item.description}
            </Typography>
          </Stack>
          <Divider />
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <AccessTimeIcon />
              {dayjs(item.createdAt).format("MMM D, YYYY")}
            </Box>

            <Box>
              <FileDownloadIcon />
              {item.installs + " installs"}
            </Box>
          </Stack>
        </Paper>
      ))}
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Pagination count={3} />
      </Stack>
    </Stack>
  );
}

export default integration;
