import React from 'react';
import styles from './Input.module.scss';
import classnames from 'classnames';

const Input = props => {
    const { className, ...inputProps } = props;

    return <input className={classnames(styles.input, className)} {...inputProps} />;
};

export default Input;
