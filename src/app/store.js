import { configureStore } from "@reduxjs/toolkit";
import demandeReducer from "../features/Demande/demandeSlice"
import userReducer from "../features/users/userSlice"


export const store = configureStore({

  reducer: {
    demandes: demandeReducer,
    users: userReducer,
    
  },


  
});