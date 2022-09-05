import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { API_URL, WALLET_ID } = getEnvVariables();

const url = API_URL + WALLET_ID;

const statsApi = axios.create({
    baseURL: url
});

export default statsApi;