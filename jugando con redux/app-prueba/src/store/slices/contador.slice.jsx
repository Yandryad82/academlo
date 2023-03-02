import { createSlice } from '@reduxjs/toolkit';

export const contadorSlice = createSlice({
    name: 'contador',
    initialState: 0,
    reducers: {
      setContador: (state, axion) => {
        const contador = axion.payload
        return contador
      }
    }
})

export const { setContador } = contadorSlice.actions;

export default contadorSlice.reducer;
