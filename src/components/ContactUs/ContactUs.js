import React, { useEffect, useState } from 'react';
import styles from './Contact.module.scss';
import Input from '../shared/Input';
import Select from 'react-select';
import { contacts, geographyOptions, industryOptions } from '../constants';
import { useDispatch } from 'react-redux';
import { getCountries, sendContactInfo } from '../../redux/actions/contactUs';
import Country from '../common/Country';

const ContactUs = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        cookiePolicy: false,
        newsLetter: false,
    });

    useEffect(() => {
        dispatch(getCountries());
    }, []);

    const onsubmit = e => {
        e.preventDefault();

        dispatch(sendContactInfo(formData));
    };

    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>Contact us</div>
            <div className={styles.content}>
                <div>
                    {contacts.map(contact => (
                        <div className={styles.contact}>
                            <div className={styles.contactTitle}>{contact.title}</div>
                            <a href={contact.href} className={styles.email}>
                                {contact.email}
                            </a>
                        </div>
                    ))}
                </div>
                <form className={styles.form} onSubmit={onsubmit} id={'contactUs-form'}>
                    <div className={styles.formContent}>
                        <Input
                            type='text'
                            name={'firstName'}
                            placeholder={'First Name'}
                            className={styles.input}
                            onChange={e => handleChange('firstName', e.target.value)}
                        />
                        <Input
                            type='text'
                            name={'lastName'}
                            placeholder={'Last Name'}
                            className={styles.input}
                            onChange={e => handleChange('lastName', e.target.value)}
                        />
                    </div>
                    <div className={styles.formContent}>
                        <Input
                            type='text'
                            name={'email'}
                            placeholder={'Email'}
                            className={styles.input}
                            onChange={e => handleChange('email', e.target.value)}
                        />
                        <Input
                            type='text'
                            name={'jobTitle'}
                            placeholder={'Job title'}
                            className={styles.input}
                            onChange={e => handleChange('jobTitle', e.target.value)}
                        />
                    </div>
                    <div className={styles.formContent}>
                        <Input
                            type='text'
                            name={'companyName'}
                            placeholder={'Company Name'}
                            className={styles.input}
                            onChange={e => handleChange('companyName', e.target.value)}
                        />
                        <div className={styles.selectContainer}>
                            <Select
                                className={'common-select'}
                                classNamePrefix='common'
                                menuPlacement={'auto'}
                                options={industryOptions}
                                onChange={({ label }) => handleChange('industry', label)}
                                placeholder={'Industry'}
                            />
                        </div>
                    </div>
                    <div className={styles.formContent}>
                        <div className={styles.country}>
                            <Country onChange={value => handleChange('country', value)} />
                        </div>
                        <div className={styles.selectContainer}>
                            <Select
                                className={'common-select'}
                                classNamePrefix='common'
                                menuPlacement={'auto'}
                                options={geographyOptions}
                                onChange={({ label }) => handleChange('geography', label)}
                                placeholder={'Operating geography'}
                            />
                        </div>
                    </div>
                    <div className={styles.extraInfo}>
                        <div>What would you like to talk about?</div>
                        <textarea
                            name={'comment'}
                            className={styles.textArea}
                            onChange={e => handleChange('comment', e.target.value)}
                        />
                    </div>
                    <div className={styles.checkboxContainer}>
                        <Input
                            type='checkbox'
                            name={'cookiePolicy'}
                            className={styles.checkbox}
                            onChange={e => handleChange('cookiePolicy', e.target.checked)}
                        />
                        <div className={styles.policy}>
                            <span>By submitting this form I accept privacy policy and</span>
                            <a
                                href={'https://tuumplatform.com/privacy-policy/'}
                                className={styles.cookie}
                            >
                                Cookie policy.
                            </a>
                        </div>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <Input
                            type='checkbox'
                            name={'newsLetter'}
                            className={styles.checkbox}
                            onChange={e => handleChange('newsLetter', e.target.checked)}
                        />
                        <div className={styles.policy}>
                            <span>I would like to receive your newsletter.</span>
                        </div>
                    </div>

                    <button type={'submit'} className={styles.submitBtn}>
                        Submit Form
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
