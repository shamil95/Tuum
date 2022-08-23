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

    const handleChangeInputs = e => {
        const { name, value } = e.target;

        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleChangeCheckbox = e => {
        const { name, checked } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: checked }));
    };

    const handleChangeSelect = (name, value) => {
        setFormData(prevState => ({ ...prevState, [name]: value }));
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
                            onChange={handleChangeInputs}
                        />
                        <Input
                            type='text'
                            name={'lastName'}
                            placeholder={'Last Name'}
                            className={styles.input}
                            onChange={handleChangeInputs}
                        />
                    </div>
                    <div className={styles.formContent}>
                        <Input
                            type='text'
                            name={'email'}
                            placeholder={'Email'}
                            className={styles.input}
                            onChange={handleChangeInputs}
                        />
                        <Input
                            type='text'
                            name={'jobTitle'}
                            placeholder={'Job title'}
                            className={styles.input}
                            onChange={handleChangeInputs}
                        />
                    </div>
                    <div className={styles.formContent}>
                        <Input
                            type='text'
                            name={'companyName'}
                            placeholder={'Company Name'}
                            className={styles.input}
                            onChange={handleChangeInputs}
                        />
                        <div className={styles.selectContainer}>
                            <Select
                                className={'common-select'}
                                classNamePrefix='common'
                                menuPlacement={'auto'}
                                options={industryOptions}
                                onChange={({ label }) => handleChangeSelect('industry', label)}
                                placeholder={'Industry'}
                            />
                        </div>
                    </div>
                    <div className={styles.formContent}>
                        <div className={styles.country}>
                            <Country onChange={(name, value) => handleChangeSelect(name, value)} />
                        </div>
                        <div className={styles.selectContainer}>
                            <Select
                                className={'common-select'}
                                classNamePrefix='common'
                                menuPlacement={'auto'}
                                options={geographyOptions}
                                onChange={({ label }) => handleChangeSelect('geography', label)}
                                placeholder={'Operating geography'}
                            />
                        </div>
                    </div>
                    <div className={styles.extraInfo}>
                        <div>What would you like to talk about?</div>
                        <textarea
                            name={'comment'}
                            className={styles.textArea}
                            onChange={handleChangeInputs}
                        />
                    </div>
                    <div className={styles.checkboxContainer}>
                        <Input
                            type='checkbox'
                            name={'cookiePolicy'}
                            className={styles.checkbox}
                            onChange={handleChangeCheckbox}
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
                            onChange={handleChangeCheckbox}
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
