import React, {FC} from 'react';
import {IUser} from "./models";

export const UserLIstItem:FC<IUser> = ( props ) => {

    const { firstName, maidenName, lastName, age} = props;

    return (
        <div>
            <div>Имя: {maidenName} {firstName} {lastName}</div>
            <div>{ age ? <div>Возраст: {age}</div> : <div> </div> }</div>
        </div>
    );
};

