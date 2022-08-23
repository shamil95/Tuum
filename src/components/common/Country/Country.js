import React from 'react';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import styles from './Country.module.scss';

const Country = props => {
    const { onChange } = props;

    const countries = useSelector(state => state.contactUs.countries);

    const options = countries.map(country => {
        return {
            value: country.countryName,
            label: (
                <div className={styles.options}>
                    {country.countryCode && (
                        <div className={styles.flagContainer}>
                            <img
                                src={`/assets/flags/${
                                    country.countryCode?.trim() ? country.countryCode : 'int'
                                }.svg`}
                                className={styles.flag}
                            />
                        </div>
                    )}
                    <div>{country.countryName}</div>
                </div>
            ),
        };
    });

    return (
        <Select
            className='common-select'
            classNamePrefix='common'
            menuPlacement={'auto'}
            name={'country'}
            onChange={({ value }) => onChange('country', value)}
            options={options}
            placeholder={'Country'}
        />
    );
};

export default Country;
