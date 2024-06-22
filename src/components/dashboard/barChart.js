"use client";

import React, { useState } from "react";

import ReactApexChart from "react-apexcharts";
import {
  Card,
  CardActions,
  CardHeader,
  Divider,
  Stack,
  Typography,
  Button,
} from "@mui/material";

function Barchart({ chartSeries }) {
  const [options] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  });
  return (
    <Card
      style={{
        borderWidth: 1,
        margin: 20,
        borderRadius: 6,
      }}
    >
      <CardHeader title=" Sales" />
      <ReactApexChart
        options={options}
        series={chartSeries}
        type="bar"
        height={350}
        width="100%"
      />
      <Divider />
      <Stack direction={"row-reverse"}>
        <CardActions>
          <Button variant="subtitle1" size="small">
            {`Overview ->`}
          </Button>
        </CardActions>
      </Stack>
    </Card>
  );
}

export default Barchart;
