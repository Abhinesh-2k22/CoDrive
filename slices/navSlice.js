import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  origin: null,
  destination:null,
  traveltime: null
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state,action) => {
      state.origin = action.payload
    },
    setDestination: (state,action) => {
      state.destination = action.payload
    },
    setTraveltime: (state,action) => {
      state.traveltime = action.payload
    },
  },
})


export const { setOrigin,setDestination,setTraveltime } = navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTraveltime = (state) => state.nav.traveltime;


export default navSlice.reducer