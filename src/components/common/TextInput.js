'use strict';

import React, {PropTypes} from 'react';

const TextInput = ({name, label, onChange, value, error}) => {
    
    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <input className='form-control' name={name} id={name} onChange={onChange} value={value}/>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    error: PropTypes.string
};

export default TextInput;