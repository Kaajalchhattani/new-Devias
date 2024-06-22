"use client";
import { Button } from "@mui/material";
import React from "react";
export default function DeleteUser(props) {
  console.log(props.id);
  const userId = props.id;
  const deleteUser = async () => {
    let result = await fetch("https://dummyjson.com/users/" + userId, {
      method: "delete",
    });
    result = await result.json();
    // if (result.success) alert("true");
  };

  return <Button onClick={deleteUser}>Delete</Button>;
}
