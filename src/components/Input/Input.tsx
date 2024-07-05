import React, {ChangeEvent, FC} from 'react';

interface InputProps {
    placeholder: string,
    change: (event: React.ChangeEvent<HTMLInputElement>) =>  void,
}

export const Input:FC<InputProps> = (props) => {

    const { placeholder, change } = props

    return (
        <input
            type="text"
            placeholder={ placeholder }
            onChange={change}
        />
    );
};

