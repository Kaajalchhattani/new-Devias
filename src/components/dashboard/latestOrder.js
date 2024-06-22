import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

import dayjs from "dayjs";

function latestOrder({ orders }) {
  return (
    <Card sx={{ borderWidth: 1, borderRadius: 3, margin: 3, marginBottom: 20 }}>
      <CardHeader title="Latest Orders" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }}>
          <TableHead>
            <TableRow>
              <TableCell align="right">Order</TableCell>
              <TableCell align="right">Customer</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((item) => {
              return (
                <TableRow hover key={item.id}>
                  <TableCell align="right">{item.id}</TableCell>
                  <TableCell align="right">{item.customer.name}</TableCell>
                  <TableCell align="right">
                    {dayjs(item.createdAt).format("MMM D, YYYY")}
                  </TableCell>
                  <TableCell align="right">
                    <Chip
                      sx={{
                        backgroundColor:
                          item.status == "delivered"
                            ? "green"
                            : item.status == "pending"
                            ? "orange"
                            : "red",
                        color: "white",
                      }}
                      label={item.status}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button sx={{ color: "black" }} size="small">
          View All
        </Button>
      </CardActions>
    </Card>
  );
}

export default latestOrder;
