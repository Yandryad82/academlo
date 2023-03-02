import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const consumoApiSlice = createSlice({
    name: 'consumoApi',
    initialState: {},
    reducers: {
      setConsumo: (state, action) => {
        const consumoApi = action.payload;
        return consumoApi;
    }
    }
})

export const getApiThunk = () => (dispatch) => {
    
    return axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/products')
        .then((res) => dispatch(setConsumo(res.data)))
        }

export const { setConsumo } = consumoApiSlice.actions;

export default consumoApiSlice.reducer;
