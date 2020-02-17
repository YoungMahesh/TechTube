import React, { useReducer } from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  url: "s5q2tAziKZg",
  showOverlay: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "sendUrl":
      return {
        showOverlay: true,
        url: action.payload,
      }
    case "hideOverlay":
      return {
        ...state,
        showOverlay: false,
      }
    default:
      return state
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
