import axios from 'axios'
import { INovedad } from '../interfaces/News';

// TODO api.config.ts
const instance = axios.create({
    // withCredentials: true,
    timeout: 30000,
    baseURL: 'http://cluster-test.art.com:20394',
    headers: {
        'content-type':'application/octet-stream',
        'x-rapidapi-host':'example.com',
        // 'x-rapidapi-key': process.env.RAPIDAPI_KEY
    },
});

export default {

    getNovidade: (productor:string) =>
    instance({
        'method':'GET',
        'url':`/cobranzas/${productor}/rechazados`,
        'params': {
            'search':'parameter',
        },
    }),

    getNovedades: (productor:string) => instance.get<INovedad[]>(`/cobranzas/${productor}/rechazados`),

    postNovidade: () =>
    instance({
        'method': 'POST',
        'url':'/api',
        'data': {
            'item1':'data1',
            'item2':'item2'
        }
    })

}
