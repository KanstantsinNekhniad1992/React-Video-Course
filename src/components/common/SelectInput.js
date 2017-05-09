'use strict';

import React, {PropTypes} from 'react';

const SelectInput = ({name, label, defaultOption, options, onChange, value}) => {

    let authors = options ? options : [];

    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <select className='form-control' name={name} value={value} onChange = {onChange}>
                <option key='default-option'>{defaultOption}</option>
                {authors.map(author => {
                    return <option key={author.value} value={author.value}>{author.text}</option>
                })}
            </select>
        </div>
    );

}

SelectInput.PropTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    defaultOptions: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    onChange: PropTypes.func,
    value: PropTypes.string
};

export default SelectInput;