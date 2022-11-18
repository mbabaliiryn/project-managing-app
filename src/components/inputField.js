import React, { useState } from 'react';
import propTypes from 'prop-types'

import { validateInput } from '../utils/validator'

const InputField = ({value,label,placeholder,validators,type,onChange})=>{
    const [error, setError] = useState(false)
    const handleChange = (event)=>{
        const {value} = event.target;
        setError( validateInput(validators,value))
        onChange(value)
    }
    return(
        <div className=''>
            {label && <label htmlFor='app-input-field'>{label}</label>}<br/>
            <input
            type={type}
            value={value}
            className='mt-1 px-1 py-3 bg-slate-100  shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            placeholder={placeholder}
            onChange={handleChange}
            />
            {error && <span className='text-red-800'>{error.message}</span>}

        </div>
    )


};
InputField.propTypes = {
    value: propTypes.string,
    labvel: propTypes.string,
    placeholder: propTypes.string,
    validators: propTypes.array,
    type: propTypes.string,
    onChange: propTypes.func.isRequired
}
InputField.defaultProps = {
    value: '',
    label: '',
    placeholder: '',
    type: '',
    validators: []
}
export default InputField;