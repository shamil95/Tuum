import { HOME_API_ENDPOINT } from '../config';
import axios from 'axios';

const getCountries = async () => {
    try {
        const result = await axios.get(`https://restcountries.com/v3.1/all`);

        return result.data;
    } catch (err) {
        console.error(err);
    }
};

const sendContactInfo = async params => {
    try {
        const result = await axios.post(`${HOME_API_ENDPOINT}/contactUs`, params);

        return result.data;
    } catch (err) {
        console.error(err);
    }
};

const ContactUsService = {
    getCountries,
    sendContactInfo,
};

export default ContactUsService;
