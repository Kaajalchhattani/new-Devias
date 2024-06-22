"use client";
import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { neonBlue } from "../../color";

const user = {
  name: "Sofia Rivers",
  avatar: "/assets/avatar.png",
  jobTitle: "Senior Developer",
  country: "USA",
  city: "Los Angeles",
  timezone: "GTM-7",
};
const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        focused: {
          color: neonBlue[400], // Change to the color you want when focused
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: neonBlue[400], // Change to the color you want when focused
          },
        },
      },
    },
  },
});

function account() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Typography sx={{ margin: 4 }} variant="h4">
          Account
        </Typography>
        <Card sx={{ margin: 4 }}>
          <Stack alignItems={"center"} justifyContent={"center"} spacing={2}>
            <Avatar
              sx={{ height: "70px", width: "70px" }}
              src={user.avatar}
            ></Avatar>

            <Stack spacing={1} textAlign={"center"}>
              <Typography variant="h5">{user.name}</Typography>
              <Typography variant="body1">
                {user.city + " "}
                {user.country}
              </Typography>

              <Typography variant="subtitle1">{user.timezone}</Typography>
            </Stack>
          </Stack>
          <Divider />
          <CardActions>
            <Button fullWidth variant="text" sx={{ color: neonBlue[400] }}>
              Upload picture{" "}
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ margin: 4, padding: 2, borderRadius: 4 }}>
          <CardHeader
            subheader="The information can be edited"
            title="Profile"
          />
          <Divider />
          <Stack spacing={1}>
            <TextField
              sx={{ width: "100%", borderRadius: 4 }}
              required
              type="text"
              label="First name"
              defaultValue="Sofia"
            />
            <TextField
              required
              type="text"
              label="Last Name"
              defaultValue="Rivers"
            />
            <TextField
              sx={{ width: "100%" }}
              required
              type="email"
              label="Email address"
              defaultValue="sofia@devias.io"
            />
            <TextField
              sx={{ width: "100%" }}
              type="text"
              placeholder="Phone Number"
            />
            <Select
              value={selectedOption}
              onChange={handleChange}
              labelId="State"
              displayEmpty
              fullWidth
            >
              <MenuItem value="" disabled></MenuItem>
              <MenuItem value="option1">Alabama</MenuItem>
              <MenuItem value="option2">New York</MenuItem>
              <MenuItem value="option3">San Francisco</MenuItem>
            </Select>
            <TextField sx={{ width: "100%" }} type="textl" placeholder="City" />
          </Stack>
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button
              sx={{
                backgroundColor: neonBlue[400],
                color: "white",
                borderRadius: 4,
              }}
            >
              Save Details
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </ThemeProvider>
  );
}

export default account;
