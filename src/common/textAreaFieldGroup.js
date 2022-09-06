import React from 'react'
import {PropTypes} from 'prop-types'

const TextAreaFieldGroup = ({
    name,
    placeholder,
    value,
    label,
    onChange,
    err
}) => {
    return (
        <div className="form-group">
            <label style={{color: "rgb(141,141,141)"}}>{label}</label>
            <textarea className="form-control form-control-lg" 
                style={{color: "rgb(255,255,255)",backgroundColor: "rgb(30,30,30)",borderColor:"rgb(69,69,69)"}}
                name={name} 
                rows="3" 
                value={value} 
                onChange={onChange}
                placeholder={placeholder}
            />
            {err && <div className='invalid-feedback'>{err}</div>}
        </div>
        
    )
}

TextAreaFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func,
    err: PropTypes.string
}

export default TextAreaFieldGroup;