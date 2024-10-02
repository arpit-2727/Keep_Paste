import {configureStore} from "@reduxjs/toolkit"
import pasteReducer from "./keepSlice"

export const store = configureStore({
  reducer:{
      paste: pasteReducer
  }
})