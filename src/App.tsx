import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {FormBuilder} from "./patterns/builder/FormBuilder";
import {userInfo} from "./patterns/singleTon/singleTon.store";
import {observer} from "mobx-react";

interface INewUserInfo{
    firstName: string,
    lastName: string,
    middleName: string,
}


export const App = observer(() => {
    const [newUserInfo, setNewUserInfo] = useState<INewUserInfo>( {
        firstName: "",
        lastName: "",
        middleName: "",
    })

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>, name: string) => {
        setNewUserInfo({
            ...newUserInfo,
            [name]: event.target.value,
        })
        return
    };

    const newForm = new FormBuilder()
        .setInput('Имя', (e) => handleInputChange(e, 'firstName'))
        .setInput('Фамилия', (e) => handleInputChange(e, 'middleName'))
        .setInput('Отчество', (e) => handleInputChange(e, 'lastName'))
        .setButton('Отправить', () => {
            userInfo.setFirstName(newUserInfo.firstName);
            userInfo.setMiddleName(newUserInfo.middleName);
            userInfo.setLastName(newUserInfo.lastName);
        })
        .build()

    return (
        <div className="App">
            { newForm }
            <div>{ userInfo.firstName }</div>
            <div>{ userInfo.middleName }</div>
            <div>{ userInfo.lastName }</div>
        </div>
    );
});

export default App;
