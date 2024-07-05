import React, {FC} from 'react';

interface InputProps {
    placeholder: string
}

export const Input:FC<InputProps> = (props) => {

    const { placeholder } = props

    return (
        <input type="text" placeholder={ placeholder }/>
    );
};

