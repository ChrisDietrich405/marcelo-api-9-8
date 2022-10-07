import React from "react";

export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  feedback: "",
};

const ContactReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "firstName":
      return { ...state, firstName: action.payload };
    case "lastName":
      return { ...state, lastName: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "feedback":
      return { ...state, feedback: action.payload };
    case "success" :
      return initialState
    default:
      return state;
  }
};

export default ContactReducer;
