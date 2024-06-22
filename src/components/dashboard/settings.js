"use client";
import {
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
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import { neonBlue } from "../../color";
const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        focused: {
          color: neonBlue[400],
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: neonBlue[400],
          },
        },
      },
    },
  },
});

function settings() {
  return (
    <ThemeProvider theme={theme}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Typography sx={{ margin: 2, marginBottom: 4 }} variant="h4">
          Settings
        </Typography>
        <Card sx={{ margin: 2, height: "50%", borderRadius: 4, padding: 2 }}>
          <CardHeader
            subheader="Manage the notifications"
            title="Notifications"
          />
          <Divider />
          <CardContent sx={{ margin: 2 }}>
            <Grid>
              <Grid container spacing={2}>
                <Grid sm={6} xs={12} md={4}>
                  <Stack spacing={1}>
                    <Typography>Email</Typography>
                    <FormGroup>
                      <FormControlLabel
                        sx={{ "&.Mui-checked": neonBlue[400] }}
                        control={<Checkbox />}
                        label="Product updates"
                      />
                      <FormControlLabel
                        sx={{ "&.Mui-checked": neonBlue[400] }}
                        required
                        control={<Checkbox />}
                        label="Security updates"
                      />
                    </FormGroup>
                  </Stack>
                </Grid>

                <Grid sm={6} xs={12} md={4}>
                  <Stack spacing={1}>
                    <Typography>Phone</Typography>
                    <FormGroup>
                      <FormControlLabel
                        sx={{ "&.Mui-checked": neonBlue[400] }}
                        control={<Checkbox />}
                        label="Email"
                      />
                      <FormControlLabel
                        sx={{ "&.Mui-checked": neonBlue[400] }}
                        control={<Checkbox />}
                        label="Security updates"
                      />
                    </FormGroup>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button
              sx={{ borderRadius: 4, backgroundColor: neonBlue[400] }}
              variant="contained"
            >
              Save changes
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ margin: 2, height: "50%", borderRadius: 4, padding: 2 }}>
          <CardHeader subheader="Update password" title="Password" />
          <Stack spacing={1}>
            <TextField sx={{ borderRadius: 2 }} label="Password" />
            <TextField sx={{ borderRadius: 2 }} label="Confirm Password" />
            <Divider />
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <Button
                sx={{ borderRadius: 4, backgroundColor: neonBlue[400] }}
                variant="contained"
              >
                Update
              </Button>
            </CardActions>
          </Stack>
        </Card>
      </form>
    </ThemeProvider>
  );
}

export default settings;
