import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../api/server";


export const fetchProductData = createAsyncThunk(
    'inventario/fetchProductData', async () => {
        const response = await axios.get(`${server}/api/productos`);
        return response.data;
    }
)

export const inventarioSlide = createSlice({
    name: 'inventarioSlide',
    initialState: {
        productList: [],
        status: 'idle',
        error: null,
        user: {},
        isLogin: false,
    },
    reducers: {
        showModalDialog: (state, action) => {
            const isVisible = action.payload;
            state.stateModalDialog = isVisible;
        },
        setUserLogged: (state, action) => {
            //datos del usuarios
            state.user = { ...action.payload };
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProductData.pending, (state) => {
                console.log('Loading Products')
                state.status = 'loading';
            })
            .addCase(fetchProductData.fulfilled, (state, action) => {
                console.log('Task load is successful')
                state.productList = action.payload;
                state.status = 'succeeded';
                state.rockets = action.payload;
            })
            .addCase(fetchProductData.rejected, (state, action) => {
                console.log('Error at load data')
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

//exportando modulos
export const { showModalDialog, setUserLogged } = inventarioSlide.actions;
export const selectAllProducts = (state) => state.productList;
export const getProductsStatus = (state) => state.status;
export const getProductsError = (state) => state.error;

export default inventarioSlide.reducer;
