import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        loading: true,
        wallet: null,
        price: 0,
        data: {
            balance: 0,
            paid: 0,
            lastShare: 0,
            currentHashrate: 0,
            hashrate: 0,
            reward24: 0,  
            payout: 0,
        }
    },
    reducers: {
        setData: (state, { payload }) => {
            state.data.balance = payload.balance;
            state.data.paid = payload.paid;
            state.data.lastShare = payload.lastShare;
            state.data.currentHashrate = payload.currentHashrate;
            state.data.hashrate = payload.hashrate;
            state.data.reward24 = payload.reward24;
            state.data.payout = payload.payout;
            state.wallet = payload.wallet;
            state.price = payload.price;
            state.loading = false;
        }
    }
});

export const { setData } = uiSlice.actions;