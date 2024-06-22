"use client";

import React from "react";

import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { Stack } from "@mui/material";
import { neonBlue } from "../../color";

export default function SignIn() {
  const [toggle, setToggle] = React.useState(false);
  const handletoggle = () => {
    setToggle(!toggle);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const router = useRouter();

  return (
    <Stack spacing={4} mt={8} justifyContent={"center"} alignItems={"center"}>
      <Stack spacing={2} sx={{ width: "60%" }}>
        <Typography variant={"h4"} textAlign={"left"}>
          Sign In
        </Typography>
        <Typography variant="body2">
          Don't have an account ?
          <Link href="#" variant="body2" sx={{ color: neonBlue[400] }}>
            {` SignUp`}
          </Link>
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 1, width: "100%" }}
        >
          <TextField
            sx={{ width: "100%", borderRadius: 4 }}
            margin="normal"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            defaultValue="Sofia"
          />
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 1, width: "100%" }}
          borderRadius={4}
        >
          <TextField
            sx={{ width: "100%", borderRadius: 6 }}
            margin="normal"
            name="password"
            label="Password"
            type={toggle == true ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            defaultValue="Secret 1"
          />
          <Typography
            variant="subtitle1"
            container="button"
            onClick={handletoggle}
          >
            show
          </Typography>
        </Box>

        <Link href="#" variant="body2" sx={{ color: neonBlue[400] }}>
          Forgot Password ?
        </Link>
        <Button
          type="submit"
          sx={{
            alignSelf: "center",
            backgroundColor: neonBlue[400],
            width: "100%",
            height: 50,
            berderRadius: 4,
            color: "white",
          }}
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          Sign In
        </Button>
      </Stack>
    </Stack>
  );
}
