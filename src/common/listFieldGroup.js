import React from 'react'
import {PropTypes} from 'prop-types'

const ListFieldGroup = ({ options, value, onChange, addClass="",name,label }) => {
    const selectOptions = options.map(option => 
        <option value={option.value} key={option.label}>
            {option.label}
        </option>    
    )
    return(
        <div className="form-group">
             <label style={{color: "rgb(141,141,141)"}}>{label}</label>
            <select
                style={{color: "rgb(141,141,141)",backgroundColor: "rgb(30,30,30)",borderColor:"rgb(69,69,69)",marginBottom:"3%"}}
                name={name}
                value={value}
                className={`form-select ${addClass}`}
                onChange={onChange}>
                {selectOptions}
            </select>
        </div>
    )
}

ListFieldGroup.propTypes = {
    options: PropTypes.array,
    value: PropTypes.string,
    addClass: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string
}

export default ListFieldGroup;