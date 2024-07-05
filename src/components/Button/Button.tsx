import React, {FC} from 'react';

interface ButtonProps {
    title: string,
    click: () => void
}

export const Button:FC<ButtonProps> = ( props ) => {

    const { title, click } = props;

    return (
        <button
            onClick={click}
        >
            {title}
        </button>
    );
};

