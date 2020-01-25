import axios from 'axios';
import { baseAppURL } from '../utils/constants';

const api = axios.create({ baseURL: baseAppURL });

export default api;