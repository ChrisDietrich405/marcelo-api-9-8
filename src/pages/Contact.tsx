import React, { useReducer } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { ToastContainer, toast } from 'react-toastify'; 

import ContactReducer from "../reducer/contactReducer";
import { initialState } from "../reducer/contactReducer";

const Contact = () => {
  const [state, dispatch] = useReducer(ContactReducer, initialState);
  const { firstName, lastName, email, feedback } = state;

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/contacts", {
        method: "post",
        body: JSON.stringify(state),
        headers: { "Content-Type": "application/json" },
      });
      dispatch({ type: "success" });
      toast("Wow so easy!")
    } catch (error) {}
  };

  return (
    <main
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ToastContainer />
      <h1>Get In Touch!</h1>
      <Box
        onSubmit={handleSubmitForm}
        component="form"
        sx={{
          "& > :not(style)": { m: 1.5, width: "80%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={firstName}
          onChange={(e) =>
            dispatch({ type: "firstName", payload: e.target.value })
          }
          fullWidth
          label="First Name"
          variant="outlined"
        />
        <TextField
          value={lastName}
          onChange={(e) =>
            dispatch({ type: "lastName", payload: e.target.value })
          }
          fullWidth
          label="Last Name"
          variant="outlined"
        />
        <TextField
          value={email}
          onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
          fullWidth
          label="Email"
          variant="outlined"
        />
        <TextField
          value={feedback}
          onChange={(e) =>
            dispatch({ type: "feedback", payload: e.target.value })
          }
          fullWidth
          multiline
          rows={4}
          label="Thoughts?"
          variant="outlined"
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </main>
  );
};

export default Contact;
