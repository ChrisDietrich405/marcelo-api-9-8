import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { loginReducer, initialState } from "../reducer/loginReducer";
import { login } from "../utils";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = ({ state, dispatch }) => {
  const { username, password, isLoading, isLoggedIn, error } = state;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "login" });
    try {
      await login(username, password);
      dispatch({ type: "success" });
      navigate("/");
    } catch (error) {
      dispatch({ type: "error" });
    }
  };

  return (
    <div>
      <h1>Log In</h1>
      <form style={{ marginTop: "30px" }} onSubmit={handleSubmit}>
        {error && <h4>{error}</h4>}
        <TextField
          fullWidth
          label="username"
          variant="outlined"
          onChange={(e) =>
            dispatch({
              type: "field",
              value: e.target.value,
              field: "username",
            })
          }
          value={username}
        />
        <TextField
          sx={{ mt: 2, mb: 2 }}
          fullWidth
          type="password"
          label="password"
          variant="outlined"
          onChange={(e) =>
            dispatch({
              type: "field",
              value: e.target.value,
              field: "password",
            })
          }
          value={password}
        />
        <Button type="submit" fullWidth disabled={isLoading} variant="contained">
          {isLoading ? "...logging in" : "log in"}
        </Button>
      </form>
    </div>
  );
};

export default Login;
