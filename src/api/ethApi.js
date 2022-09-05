import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { API_ETH_URL } = getEnvVariables();

const ethApi = axios.create({
    baseURL: API_ETH_URL
});

export default ethApi;