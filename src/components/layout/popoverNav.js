import {
  Box,
  Button,
  Card,
  CardActions,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import React from "react";

function popoverNav({ onClose }) {
  const handleClick = () => {
    onClose();
  };
  return (
    <Box sx={{ p: "16px 20px ", border: 0, borderStyle: "none", elevation: 0 }}>
      <Card sx={{ elevation: 0 }}>
        <Stack>
          <Typography variant="subtitle1">Sofias Rivers</Typography>
          <Typography>sofia.rivers@devias.com</Typography>
        </Stack>
        <Divider />
        <Stack>
          <CardActions>
            <Button
              href={"/dashboard/settings"}
              fullWidth
              sx={{ textAlign: "left", color: "black", fontWeight: 300 }}
              variant="subtitle1"
              onClick={() => handleClick()}
            >
              Settings
            </Button>
          </CardActions>
          <CardActions>
            <Button
              href={"/dashboard/account"}
              fullWidth
              sx={{ textAlign: "left", color: "black", fontWeight: 300 }}
              variant="subtitle1"
              onClick={() => handleClick()}
            >
              Profile
            </Button>
          </CardActions>
          <CardActions>
            <Button
              href={"/auth/signIn"}
              fullWidth
              sx={{ textAlign: "left", color: "black", fontWeight: 300 }}
              variant="subtitle1"
              onClick={() => handleClick()}
            >
              Sign Out
            </Button>
          </CardActions>
        </Stack>
      </Card>
    </Box>
  );
}

export default popoverNav;
