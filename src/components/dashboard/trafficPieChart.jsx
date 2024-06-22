"use client";
import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";

import Chart from "react-apexcharts";
import { california, kepple, neonBlue } from "../../color";
const chartOptions = () => ({
  color: [neonBlue[700], california[500], kepple[300]],
  dataLabels: { enabled: false },
});
function trafficPieChart({ chartSeries, labels }) {
  return (
    <Card
      sx={{
        height: 390,
        margin: 2,
        borderRadius: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardHeader sx={{ fontSize: 10 }} title="Traffic Source" />
      <CardContent marginTop={20}>
        <Chart
          height={300}
          options={chartOptions()}
          series={chartSeries}
          type="donut"
          width="100%"
        />
      </CardContent>
    </Card>
  );
}

export default trafficPieChart;
