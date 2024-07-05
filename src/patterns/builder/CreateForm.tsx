import React, {FC, ReactNode} from 'react';

interface CreateFormProps {
    childes: ReactNode [];
}

export const CreateForm:FC<CreateFormProps> = (props) => {

    const { childes } = props;

    return (
        <div>
            {
                childes && childes.map((node) => {
                    return node
                })
            }
        </div>
    );
};

