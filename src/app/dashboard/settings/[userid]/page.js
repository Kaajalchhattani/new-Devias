"use client";
import React, { useEffect, useState } from "react";

import { Box, TextField, Button } from "@mui/material";

function Page({ params }) {
  const id = params.userid;
  const [firstName, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addMe = async () => {
    console.log(firstName, age, email);
    let response = await fetch(`https://dummyjson.com/users/${id}`);

    response = await response.json();
    setName(response.firstName);
    setAge(response.age);
    setEmail(response.email);
    console.log(response);
  };
  useEffect(() => {
    addMe();
  }, []);

  const updateMe = async () => {
    console.log(firstName, age, email);

    let result = await fetch(`https://dummyjson.com/users/${id}`, {
      method: "PUT",

      body: JSON.stringify({ firstName, age, email }),
    });
    result = await result.json();
    console.log(result);
  };

  return (
    <div>
      <div>Add New User</div>
      <Box>
        <TextField
          sx={{ border: 1 }}
          type="text"
          value={firstName}
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
      <Button onClick={updateMe}>Press me</Button>
    </div>
  );
}

export default Page;
