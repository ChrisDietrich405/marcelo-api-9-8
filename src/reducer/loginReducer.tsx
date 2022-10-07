export const initialState = {
    username: "",
    password: "",
    isLoggedIn: false,
    isLoading: false,
    error: ""
}

export const loginReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case "field": 
          return { ...state, [action.field]: action.value}
        case "login": 
          return { ...state, isLoading: true, error: ""}
        case "success": 
          return { ...state, isLoading: false, isLoggedIn: true, error: ""}
        case "error": 
          return { ...state, error: "you have an error", isLoading: false, isLoggedIn: false}
        case "logout": 
          return { ...initialState }
        default: 
          return state 
    }
}