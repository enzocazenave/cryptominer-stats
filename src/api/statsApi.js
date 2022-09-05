import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { API_URL, WALLET_ID } = getEnvVariables();

const statsApi = axios.create({
    baseURL: API_URL
});

export default statsApi;