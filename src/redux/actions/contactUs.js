import ContactUsService from '../../services/contactUsService';
import { COUNTRIES_DATA_CHANGED, COUNTRIES_FETCHING_CHANGED } from '../types';

export const getCountries = () => async dispatch => {
    dispatch(setCountriesFetching(true));

    const countries = await ContactUsService.getCountries();

    if (!countries.length) {
        dispatch(setCountriesFetching(false));
        return;
    }

    const countryNames = countries.map(country => {
        return {
            countryCode: country.cca3.toLowerCase(),
            countryName: country.name.common,
        };
    });

    dispatch(setCountries(countryNames));
};

export const setCountries = countries => ({
    type: COUNTRIES_DATA_CHANGED,
    payload: countries,
});

export const setCountriesFetching = isFetching => ({
    type: COUNTRIES_FETCHING_CHANGED,
    payload: isFetching,
});

export const sendContactInfo = params => async dispatch => {
    dispatch(setCountriesFetching(true));

    const info = await ContactUsService.sendContactInfo(params);

    return info || true;
};
