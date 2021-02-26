import axios from 'axios'
import {
    MESSAGE_ERROR_400,
    MESSAGE_ERROR_500_502,
    MESSAGE_ERROR_SIN_CONEXION,
    MESSAGE_TITLE_ERROR
} from '../helpers/Constants';

// TODO api.config.ts
const instance = axios.create({
    timeout: 30000,
    baseURL: process.env.BASE_URL,
    headers: {
        'content-type':'application/octet-stream',
        'x-rapidapi-host':'example.com',
        // 'x-rapidapi-key': process.env.RAPIDAPI_KEY
    },
});

instance.interceptors.response.use((response) => {
    return response
  }, function (error) {

    if (error.response === undefined) {
        //showMessage(MESSAGE_TITLE_ERROR, MESSAGE_ERROR_SIN_CONEXION, 'danger');
    }
    else {
        const {status, data, config} = error.response;

        switch (status) {
            case 400:
                //showMessage(MESSAGE_TITLE_ERROR, MESSAGE_ERROR_400, 'danger');
                break;

            case 500:
            case 502:
                //showMessage(MESSAGE_TITLE_ERROR, MESSAGE_ERROR_500_502, 'danger');
                break;
            default:
                break;
        }
    }

    return Promise.reject(error);
});

export default {


}