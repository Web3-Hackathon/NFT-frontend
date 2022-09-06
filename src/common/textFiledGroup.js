import React from 'react'
import {PropTypes} from 'prop-types'

const TextFieldGroup = ({
    name,
    type,
    placeholder,
    value,
    label,
    onChange,
    err
}) => {
    return (
        <div className="form-group">
            <label style={{color: "rgb(141,141,141)"}}>{label}</label>
            <input type={type} 
                value={value}
                placeholder={placeholder}
                name={name} 
                onChange={onChange}
                className="form-control form-control-lg"
                style={{color: "rgb(255,255,255)",backgroundColor: "rgb(30,30,30)",borderColor:"rgb(69,69,69)"}}
            />
            {err && <div className='invalid-feedback'>{err}</div>}
        </div>
        
    )
}

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func,
    err: PropTypes.string
}

TextFieldGroup.defaultProps = {
    type : 'text'
}

export default TextFieldGroup;