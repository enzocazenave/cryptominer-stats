import { useDispatch, useSelector } from 'react-redux';
import { statsApi, ethApi } from '../api';
import { getEnvVariables } from '../helpers/getEnvVariables';
import { setData } from '../store';

export const useUiStore = () => {

    const dispatch = useDispatch();
    const { data: stats, loading } = useSelector(state => state.ui);
    const { WALLET_ID: wallet } = getEnvVariables();

    const startLoadingData = async() => {
        const { data } = await statsApi.get();
        const { ethData } = await ethApi.get('/', {
            headers: {
                'Accepts': 'application/json',
                'X-CMC_PRO_API_KEY': '567181cf-70bd-42fc-a6c0-738e3d260a97'
            }
        });
        console.log(ethData);
        const { stats, currentHashrate, hashrate } = data;
        const reward24 = data['24hreward'];
        
        dispatch(setData({
           ...stats, currentHashrate, hashrate, reward24, wallet 
        }));
    }

    return {
        //* PROPIEDADES
        stats,
        wallet,
        loading,

        //* METODOS
        startLoadingData
    }
}
