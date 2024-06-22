import React from "react";
import Card from "@mui/material/Card";
import { Avatar, CardContent, Stack, Typography } from "@mui/material";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Budget = ({ name, value, diff, image, diffvalue, color }) => {
  return (
    <Card sx={{ borderWidth: 1, borderRadius: 6, height: 160 }}>
      <CardContent>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <div>
            <Typography variant="overline">{name}</Typography>
            <Typography variant="h4">{value}</Typography>
          </div>

          <Avatar sx={{ backgroundColor: { color } }}>{image}</Avatar>
        </Stack>

        {diff == "up" ? (
          <Typography color={"green"} marginTop={2}>
            <ArrowUpwardIcon />
            {diffvalue}
          </Typography>
        ) : (
          <Typography color={"red"} marginTop={2}>
            <ArrowDownwardIcon />
            {diffvalue}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default Budget;
