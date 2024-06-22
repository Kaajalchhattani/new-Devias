"use client";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

function Page() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const AddMe = async () => {
    console.log(name, age, email);
    let response = await fetch("http://localhost:3001/api/user", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
  };
  return (
    <div>
      <div>Add New User</div>
      <Box>
        <TextField
          sx={{ border: 1 }}
          type="text"
          value={name}
          label="Enter name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Box>
      <Box>
        <TextField
          sx={{ border: 1 }}
          type="text"
          value={age}
          label="Enter age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
      </Box>
      <Box>
        <TextField
          sx={{ border: 1 }}
          type="text"
          value={email}
          label="Enter email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Box>
      <Button onClick={AddMe}>Press me</Button>
    </div>
  );
}

export default Page;
