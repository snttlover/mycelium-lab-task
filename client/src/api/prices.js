import axios from "axios";
import { toast } from 'react-toastify';
export const getPrices = async(ids) => {
    return axios
    .get(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=USD`)
    .then((r) => r.data)
    .catch((err) => toast('Too many requests'));
}