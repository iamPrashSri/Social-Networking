import React, {
  createContext,
  useContext,
  useReducer,
} from "react"; /* Import Hooks */

/* Preparing the Data Layer */
export const StateContext = createContext();

/* Higher order component to wrap our App */
/* Purpose of this block is to get the data layer functionality */
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

/* useStateValue hook is used to pull data from the data layer */
export const useStateValue = () => useContext(StateContext);
