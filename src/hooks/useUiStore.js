import { useDispatch, useSelector } from 'react-redux';
import { statsApi, ethApi } from '../api';
import { getEnvVariables } from '../helpers/getEnvVariables';
import { setData } from '../store';

export const useUiStore = () => {

    const dispatch = useDispatch();
    const { data: stats, loading, price } = useSelector(state => state.ui);
    const { WALLET_ID: wallet } = getEnvVariables();

    const startLoadingData = async() => {
        const { data } = await statsApi.get();
        const { data: ethdata } = await ethApi.get('/');

        const { stats, currentHashrate, hashrate } = data;

        const reward24 = data['24hreward'];
        const price = parseFloat(ethdata[0].price_usd);
        const payout = data.config.minPayout;

        dispatch(setData({
           ...stats, currentHashrate, hashrate, reward24, wallet, price, payout
        }));
    }

    return {
        //* PROPIEDADES
        stats,
        wallet,
        loading,
        price,

        //* METODOS
        startLoadingData
    }
}
