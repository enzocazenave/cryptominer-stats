import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        loading: true,
        data: {
            balance: 0,
            paid: 0,
            lastShare: 0,
            currentHr: 0,
            hr: 0,
            reward24: 0,  
        }
    },
    reducers: {
        setData: (state, { payload }) => {
            state.data.balance = payload.balance;
            state.data.paid = payload.paid;
            state.data.lastShare = payload.lastShare;
            state.data.currentHr = payload.currentHr;
            state.data.hr = payload.hr;
            state.data.reward24 = payload.reward24;
            state.loading = false;
        }
    }
});

export const { setData } = uiSlice.actions;