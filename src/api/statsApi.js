import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL, VITE_WALLET_ID } = getEnvVariables();

const url = VITE_API_URL + VITE_WALLET_ID;

const statsApi = axios.create({
    baseURL: url
});

export default statsApi;