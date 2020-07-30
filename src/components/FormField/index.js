import React from "react"
import { Input, Label } from './styles';

function FormField({type, labelDesc, value, onChange, name}){
    return(
        <div>
            <label>
                {labelDesc}
                <Input
                type={type}
                value = {value}
                name={name}
                onChange={onChange}
                />
            </label>
        </div>

    )
}

export default FormField;