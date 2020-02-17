import React from "react"
import GlobalContextProvider from "./src/context/store"

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
